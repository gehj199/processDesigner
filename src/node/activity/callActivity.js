/**
 * @fileOverview
 *
 * 子流程
 */
define(function (require, exports, module) {
  var kity = require('../../core/kity');
  var utils = require('../../core/utils');

  var Designer = require('../../core/designer');
  var OutlineManager = require('../../core/outline');

  var Renderer = require('../../core/render');

  var flags=0,Designers;
  var callActivityShape = kity.createClass('callActivityShape', {
    base: OutlineManager,
    create: function (node) {
      var group = new kity.Group();
      var rect = new kity.Rect().pipe(function () {
        this.stroke(
          node.getStyle('normal-stroke'),
          node.getStyle('stroke-width')
        );
        this.fill(node.getStyle('trans'));//不填充背景色，使线条显示
      });
      //子流程的图形标志
      var sign = new kity.Path().stroke(node.getStyle('normal-stroke'), 1.5,
      node.getStyle('line-shadow-width') || 8).fill(node.getStyle('background'));
      sign.setId('sign');
      group.addShape(rect);
      group.addShape(sign);
      group.setId(utils.uuid('callActivity'));
      this._node = node;
      this._outlineShape = group;

      return this._outlineShape;
    },
    doUpdate: function (outlineGroup, node, box,json) {
      var shapes = outlineGroup.getShapes();
      var outline = shapes[0];
      outline.x = box.x;
      outline.y = box.y;
      outline.width = box.width;
      outline.height = box.height+10;
      outline.setRadius(5);

       var sign = shapes[1];
       var x = box.x;
       var y = box.y;
      var width=box.width/2,
          height=box.height/2;
          space=(height+1)/2;
      if(sign){
       sign.getDrawer().clear()
          .moveTo(x+width-space-1,y+height+space/2+8)
          .lineTo(x+width+space+1,y+height+space/2+8)
          .lineTo(x+width+space+1,y+box.height+10)
          .lineTo(x+width-space-1,y+box.height+10)
          .lineTo(x+width-space-1,y+height+space/2+8)
          .moveTo(x+width-space+1,y+height+space+12)
          .lineTo(x+width+space-1,y+height+space+12)
          .moveTo(x+width,y+height+2+space/2+7)
          .lineTo(x+width,y+box.height+9);
     }
     function importNode(designer, jsonNode, nodesDic, lang,tabsLang) {
       var multiInstanceLoopCharacteristics = require('../mixins/multiInstanceLoopCharacteristics');
       var info = utils.getInfo(jsonNode.attributes);
       //特殊处理reject notation
       if (jsonNode.name === 'endEvent') {
         if (jsonNode.attributes && jsonNode.attributes.length) {
           var index = utils.getValueFromRows(jsonNode.attributes, 'rejectNotation', true);
           if (~index) {
             jsonNode.attributes.splice(index, 1);
             jsonNode.name = 'terminateEndEvent';
           }
         }
       }

       var eventDefinition, originExtension, isLoop;
       if(jsonNode.children){
         jsonNode.children.forEach(function(child){
           if(~child.name.indexOf('EventDefinition')){
             eventDefinition = child.name;
           }else if(child.name === 'extensionElements'){
             originExtension = child;
           } else if(jsonNode.name === 'userTask' && child.name === "multiInstanceLoopCharacteristics"){
             isLoop = true;
           }
         });
       }
       var opts = {
         outlineType: jsonNode.name,
         nodeId: info.id,
         eventDefinition: eventDefinition,
         mode: info.pins === 'true' ? 'pins' : 'default' ,
         isLoop: isLoop,
         isImport: true,
         markers: isLoop ? ['loopCharacteristics'] : null
       };
       var property;
       if(designer.getOutlineManagerClass(jsonNode.name))
         property = designer.getOutlineManagerClass(jsonNode.name).getProperty(designer, opts);
       else{
         opts.outlineType='undefinedNode';
         property = designer.getOutlineManagerClass('undefinedNode').getProperty(designer, opts);
       }
       jsonNode = utils.xdeepExtend(property, jsonNode);
       opts.property = jsonNode;

       var node = designer.createNode(opts, nodesDic[info.attachedToRef]);
       if(isLoop){
         multiInstanceLoopCharacteristics.beforeImport(designer, node, jsonNode);
       }

       var basicChildren = jsonNode.children.slice(0),
         extension = utils.certainName('extensionElements', jsonNode.children);

       utils.setTabs(extension, node, tabsLang);
       utils.setTabs(property, node, tabsLang);

       var noteElem = utils.certainName(
         'note',
         extension ? extension.children : null
       );
       var note;
       if (noteElem && noteElem.children && noteElem.children.length) {
         note = noteElem.children[0].value;
       }
       if (note !== null && typeof note !== 'undefined') {
         node.setData('note', note);
       }
       node.setData('basic', {
         name: jsonNode.name,
         attributes: jsonNode.attributes,
         children: basicChildren
       });

       var displayName;
       if (extension) {
         displayName = utils.getDisplayName(
           node,
           utils.certainName('displayName', extension.children),
           lang
         );
       }
       if (displayName) {
         node.setText(displayName);
       } else if(info.name){
         node.setText(info.name);
       }else if((info.id)&&(info.id).indexOf('text')!=-1||(node.data.property.name=="textAnnotation")){
         if(node && node.data && node.data.basic&& node.data.basic.children && node.data.basic.children[0].children[0])
           node.setText(node.data.basic.children[0].children[0].value||'');
       }

       if (info.offsetX && info.offsetY) {
         node.setLayoutOffset({
           x: info.offsetX - 0,
           y: info.offsetY - 0
         });
       }
       if (info.transform) {
         var matrix = new kity.Matrix();
         matrix.setMatrix.apply(matrix, info.transform.split(' '));
      //   node.setLayoutTransform(matrix);
       }
       nodesDic[info.id] = node;
       return node;
     }
     /*设置显示子流程*/
     function importLine(designer, jsonLine, nodesDic) {
       var line, startNode, endNode, lineData;
       var info = utils.getInfo(jsonLine.attributes);
       startNode = nodesDic[info.sourceRef];
       endNode = nodesDic[info.targetRef];
       if(!endNode)
         endNode = nodesDic[info.sourceRef];
       var property;
       if(jsonLine.name==="association"){
         line = designer.createLine(startNode, endNode);
         property = designer.getDotlineDefaultProps();
         if(endNode.data.property.name=='restServiceTask'){
           var isForCompensation=utils.findProperty(endNode.data.property.attributes,'isForCompensation');
           isForCompensation.editor.disabled="true";
         }
         else if(endNode.data.property.name=='scriptTask'){
         var isForCompensation=utils.findProperty(endNode.data.property.attributes,'isForCompensation');
         isForCompensation.editor.disabled="true";
         }
       }
       else{
         line = designer.createLine(startNode, endNode);
         property = designer.getLineDefaultProps();
       }
       jsonLine = utils.xdeepExtend(property, jsonLine);

       //actionId 转小写
       if(info.actionId){
         info.actionId = info.actionId.toLowerCase();
       }

       line.setData({
         id: info.id,
         text: info.name,
         property: jsonLine,
         basic: jsonLine,
         x: info.offsetX,
         y: info.offsetY,
         actionId: info.actionId,
       });
       line.startIndex = info.startPos === null ? NaN : info.startPos - 0;
       line.endIndex = info.endPos === null ? NaN : info.endPos - 0;
       if (info.inflections) {
         var inflections;
         try {
           inflections = JSON.parse(info.inflections);
           var jsonflag="false";
           for(var p=0;p<inflections.length;p++){
             for(var i=0;i<info.inflections.length;i++){
               if(inflections[p].x==info.inflections[i].x){
                 jsonflag="true";break;
               }
             }
             if(jsonflag=="false"){
              inflections.splice(p,1);
              p--;
              jsonflag='false';
            }
          }//删除原先节点数据
         } catch (e) {
           console.log('waring: The inflections of line is illegel');
         }
         line.originalInflecions = inflections;
       }
     }
     /*确定需要平移的位移量*/
     function findOffsex(jsonChild,limitX,limitY){
       var offsetX=[],minOffsetX;
       for(var i=0;i<jsonChild.length;i++){
         if(jsonChild[i].attributes){
           for(var j=0;j<jsonChild[i].attributes.length;j++){
             if(jsonChild[i].attributes[j].fullName=='offsetX' &&jsonChild[i].attributes[j].value!='')
              {
                var obj={};
                offsetX[i]=jsonChild[i].attributes[j].value;
              }
           }
         }
       }
       for(var i=0;i<offsetX.length;i++){
         if(!minOffsetX)
             minOffsetX=offsetX[i];
         else if(parseInt(minOffsetX)>parseInt(offsetX[i])){
            minOffsetX=offsetX[i];
          }
       }
       var offsetY=[],minOffsetY;
       for(var i=0;i<jsonChild.length;i++){
         if(jsonChild[i].attributes){
           for(var j=0;j<jsonChild[i].attributes.length;j++){
             if(jsonChild[i].attributes[j].fullName=='offsetY' &&jsonChild[i].attributes[j].value!='')
              {
                var obj={};
                offsetY[i]=jsonChild[i].attributes[j].value;
              }
           }
         }
       }
       for(var i=0;i<offsetY.length;i++){
         if(!minOffsetY)
             minOffsetY=offsetX[i];
         else if(parseInt(minOffsetY)>parseInt(offsetY[i])){
            minOffsetY=offsetY[i];
          }
       }
       var setValueX=limitX-minOffsetX;
       var setValueY=limitY-minOffsetY;
       return [setValueX,setValueY];
       };
     function offsetNode(node,offsetVal){
       node.attributes.forEach(function(child){
         if(child.fullName=='offsetX'){
           child.value-=-offsetVal[0];
         }else if(child.fullName=='offsetY'){
           child.value-=-offsetVal[1];
         }

       })
       return node;
     }
   //  if(node && node.data && node.data.basic && node.data.basic.attributes[6].value){
   //   var nodeId=node.data.basic.attributes[0].value;
   //     sign.on('click',function(){
   //       if(!flags && node.processChild.length==0){
   //        var processId=node.data.basic.attributes[6].value;
   //       sign.getDrawer().clear();
   //        var witdesigners = require('../../witdesigner');
   //        var href = (window.location.href).match(/(\S*)(?=Designer)/);
   //        Designers=node.designer;
   //         $.ajax({
   //           url:href[0]+'getlastprocessdefinition?processid='+processId,
   //           type:'get',
   //           dataType:'json',
   //           success:function(data){
   //             var childName=['textAnnotation','callActivity','boundaryEvent','userTask','sendTask','scriptTask','endEvent','restServiceTask','startEvent','sequenceFlow','association','exclusiveGateway'];
   //             var jsonChildrens=data.json.children;
   //             var jsonChildren;
   //             jsonChildrens.forEach(function(child,i){
   //               if(child.name=='process')
   //                 jsonChildren=child.children;
   //             })
   //             var jsonflag="false";
   //             for(var p=0;p<jsonChildren.length;p++){
   //               for(var i=0;i<childName.length;i++){
   //                 if(jsonChildren[p].fullName==childName[i]){
   //                   jsonflag="true";break;
   //                 }
   //               }
   //               if(jsonflag=="false"){
   //                jsonChildren.splice(p,1);
   //                p--;
   //                jsonflag='false';
   //              }
   //            }//删除非节点或连线数据
   //            var limitX=node.data.property.attributes[2].value;
   //            var limitY=node.data.property.attributes[3].value;
   //            var offsetVal=findOffsex(jsonChildren,limitX,limitY);
   //             var nodesDic = {};
   //             var lang = Designers.getOption('lang');
   //             var tabsLang = Designers.getLang('tabs');
   //             var childrenNode=[];
   //             var lineNode=[];
   //             var lineObject=['association','sequenceFlow'];
   //             var newNode;
   //             jsonChildren.forEach(function(json,i){
   //               if(lineObject.indexOf(json.name)!=-1)
   //                 lineNode.push(json);
   //               else if(json.name === 'boundaryEvent'){
   //                 childrenNode.push(json);
   //               }
   //               else{
   //                 json=offsetNode(json,offsetVal);
   //                 node.insertLeaves(importNode(Designers,json,nodesDic,lang,tabsLang));
   //               }
   //             });
   //             childrenNode.forEach(function(json){
   //               importNode(Designers,json,nodesDic,lang,tabsLang);
   //             });
   //             lineNode.forEach(function(child){
   //               importLine(Designers,child,nodesDic);
   //             });
   //             Designers.refresh();
   //           },
   //           error:function(){console.log('process not found');}
   //         })
   //         flags=1;
   //       }
   //       else if(!flags && Designers && node.processChild.length>0 ){
   //         node.processChild.forEach(function(child,i){
   //           Designers.removeNode(child);
   //         });
   //         if(Designers){
   //           node.processChild=[];
   //           Designers.refresh();
   //         }
   //         flags=1;
   //       }
   //   });
   // }
   // flags=0;
      return box;
    }
  });

  Designer.registerOutline('callActivity', callActivityShape);

  var attributes = require('../mixins/attributes');
  var note = require('../mixins/note');
  var resourceRole = require('../mixins/resourceRole');


  var dataInputAssociations=require('../mixins/dataInputAssociations');
  var dataInputAssociation=require('../mixins/dataInputAssociation');

  var sourceRefData=new Array;
  function updateValue(json, input){
    var firstData=new Object();
    firstData.text=designer.getLang('label.choose');
    sourceRefData[0]=firstData;
    for(var i=0;i<input.length;i++){
      if(!input[i].attributes[0].value)
      input.splice(i,1);
    }
    for(var i=0;i<input.length;i++)
    {
      var data=new Object();
      data.text=input[i].attributes[0].value;
      data.value=input[i].attributes[0].value;
      data.type=input[i].attributes[2].value;
      sourceRefData[i+1]=data;
    }
    return sourceRefData;
  }

  callActivityShape.getProperty = function (options, json) {
    var attrs=attributes.get();
    var isImport = options.isImport;
    var values;
    if(json && json.property ){
      values=json.property.attributes[7].value;
    }
    attrs.push({
      "name": "terminateProcessWhenRejected",
      "value": "true",
      "editor": {
        "type": "checkbox"
      }
    });
    attrs.push({
      "name": 'calledElement',
      "editor":{
        "type":"getSelect",
        "label":designer.getLang('label.select'),
        "onClick": function() {
          var popupWindow = designer.getOption("popupWindow");
          var propertyEditor = designer.getUI("ribbon/node/property");
          if (popupWindow && propertyEditor) {
              popupWindow(this, propertyEditor, {
                type: "processPath"
              });
          }
        }
      }
    });
    attrs.push({
      "name": "childName",
      "hidden": true
    });

    function setView(){
      if(json.property && json.property.attributes){
        var calledElement=utils.findProperty(json.property.attributes,'calledElement');
        var childName=utils.findProperty(json.property.attributes,'childName');
        if(childName && calledElement.value)
          calledElement.value +='  |'+childName.value;
      }
      if(json.property && json.property.children)
        {
         var dataObject=json.property.children;
         var newObject=new Array();
         for(var i=1;i<dataObject.length;i++){
           var idEditor=new Object();
           idEditor.type="none";
           var editorObj0=new Object();//获取editor内容
           editorObj0.type="combobox";
           editorObj0.options=sourceRefData;
           var newTarget=new Array();
           var editorObj1=new Object();//获取editor内容
           editorObj1.type="combobox";
           editorObj1.options=dataInputAssociations.childProcess(newTarget, json.property.attributes);
           dataObject[i].attributes[0].editor=idEditor;
           dataObject[i].children[0].children[0].editor=editorObj0;
           dataObject[i].children[1].children[0].editor=editorObj1;
           newObject[i-1]=utils.deepCopy(dataObject[i]);
           dataObject[i].hidden=true;
         }
         dataObject[0].children=newObject;
       }
    }
    setTimeout(setView,100);

    var datas= {
      "name": "callActivity",
      "attributes": attrs,
      "children": [dataInputAssociations.get(attrs)],
    };
    return datas;
  };

  callActivityShape.beforeExport=function(designer, node, json){
      if(json && json.attributes){
        var calledElement=utils.findProperty(json.attributes,"calledElement");
        if(calledElement && calledElement.value){
          calledElement.value=$.trim(calledElement.value.split("|")[0]);
        }
      }
      json.children.length=1;
      for(var i=0; i<json.children[0].children.length; i++){
        json.children[i+1]=utils.deepCopy(json.children[0].children[i]);
      }
      for(var i=1;i<json.children.length;i++)
      {
        json.children[i].hidden=true;
      }
      return json;
  }

  exports.updateValue=updateValue;
});
