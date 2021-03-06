/**
 * @fileOverview
 *
 * 用户任务
 */
define(function (require, exports, module) {
  var kity = require('../../core/kity');
  var utils = require('../../core/utils');

  var Designer = require('../../core/designer');
  var OutlineManager = require('../../core/outline');
  var Renderer = require('../../core/render');

  var multiInstanceLoopCharacteristics = require('../mixins/multiInstanceLoopCharacteristics');

  var UserTaskShape = kity.createClass('UserTaskShape', {
    base: OutlineManager,
    create: function (node) {
      var group = new kity.Group();
      var rect = new kity.Rect().pipe(function () {
        this.stroke(
          node.getStyle('normal-stroke'),
          node.getStyle('stroke-width')
        );
        this.fill(node.getStyle('background'));
      });
      //用户的图形标志
      var hair = new kity.Path().fill('black');
      var sign = new kity.Path().stroke(node.getStyle('normal-stroke'), 1);
      group.addShape(rect);
      group.addShape(hair);
      group.addShape(sign);

      group.setId(utils.uuid('userTask'));
      this._node = node;
      this._outlineShape = group;
      return this._outlineShape;
    },
    doUpdate: function (outlineGroup, node, box) {
      var shapes = outlineGroup.getShapes();
      var outline = shapes[0];
      outline.x = box.x;
      outline.y = box.y;
      outline.width = box.width;
      outline.height = box.height;
      outline.setRadius(5);

      var hair = shapes[1];
      var x = box.x + 4;
      var y = box.y + 8;
      var redius = 5,
        space = 3;
      hair.getDrawer().clear()
        .moveTo(x, y)
        .arcTo(redius, redius, 0, 0, 1, x + 2 * redius, y)
        .arcTo(redius, redius, 0, 0, 0, x + redius, y)
        .arcTo(redius, redius, 0, 0, 1, x, y);

      var sign = shapes[2];
      sign.getDrawer().clear()
        .moveTo(x, y)
        .arcTo(redius, redius, 0, 0, 0, x + 2.5, y + 4.3)
        .lineTo(x + space, y + 2 * space)
        .arcTo(redius, redius, 0, 0, 0, x + space - redius, y + 2 * space + redius)
        .lineTo(x + space - redius, y + 2 * space + 2 * redius)
        .lineTo(x + space + 2 * redius, y + 2 * space + 2 * redius)
        .lineTo(x + space + 2 * redius, y + 2 * space + redius)
        .arcTo(redius, redius, 0, 0, 0, x + 2 * redius - space, y + 2 * space)
        .lineTo(x + redius + 2.5, y + 4.3)
        .arcTo(redius, redius, 0, 0, 0, x + 2 * redius, y)
        .moveTo(x + 2 * redius - space, y + 2 * space)
        .lineTo(x + 2 * redius - space, y + 3 * space)
        .lineTo(x + space, y + 3 * space)
        .lineTo(x + space, y + 2 * space)
        .moveTo(x + 2 * space - redius, y + 2 * space + 2 * redius)
        .lineTo(x + 2 * space - redius, y + 2 * redius)
        .moveTo(x + 2 * redius, y + 2 * space + 2 * redius)
        .lineTo(x + 2 * redius, y + 2 * redius);

      return box;
    }
  });

  Designer.registerOutline('userTask', UserTaskShape);

  var attributes = require('../mixins/attributes');
  var displayName = require('../mixins/displayName');
  var ioSpecification=require('../mixins/dataSet/ioSpecification');
  var eventNotifications = require('../mixins/eventNotifications');
  var form = require('../mixins/form');
  var note = require('../mixins/note');
  var resourceRole = require('../mixins/resourceRole');

  var returnElement = require('../mixins/return');
  var bypass = require('../mixins/bypass');


  UserTaskShape.getProperty = function (designer, options) {
    var isImport = options.isImport;
    var isLoop = options.isLoop;
    /*初始化*/
    function setIo(){
      if(options && options.property){
        var children=options.property.children;
        var ioSpec,j=0;
        children.forEach(function (child, i) {
          if (child.name === 'ioSpecification') {
            ioSpec = child;
             j++;
          }
        });
        ioSpecification.beforeImport(ioSpec);
        if(ioSpec && ioSpec.children && ioSpec.children.length!=0){
          for(var i=0;i<ioSpec.children.length;i++)
            if(ioSpec.children[i].children)
            for(var j=0;j<ioSpec.children[i].children.length;j++){
              var editor0=new Object();
              editor0.type="none";
              var editor2=new Object(),editor3=new Object();
              editor2.type='combobox';
              editor2.options=designer.getOption('dataType');
              editor3.type='checkbox';
              ioSpec.children[i].children[j].attributes[0].editor=editor0;
              ioSpec.children[i].children[j].attributes[2].editor=editor2;
              ioSpec.children[i].children[j].attributes[3].editor=editor3;
          }
        }
      }
    }
    setTimeout(setIo,500);
    /*初始化*/
    var attrs = attributes.get();
    attrs.push({
      "name": "terminateProcessWhenRejected",
      "value": "true",
      "editor": {
        "type": "checkbox"
      }
    });
    attrs.push({
      "name": 'pins',
      "value": 'false',
      "editor": {
        "type": "checkbox"
      }
    });

    var performer = isLoop ?
      multiInstanceLoopCharacteristics.get(designer) :
      utils.extend(
        resourceRole.get(designer, {name: 'humanPerformer'}, ["humanPerformer", "potentialOwner"]),
        {potentialNames: ["humanPerformer", "potentialOwner"]}
      );
    var children=[{
      "name": "extensionElements",
      "children": [
        displayName.get(designer),
        note.get(designer),
        form.get(designer,false,attrs),
        eventNotifications.get(designer, 'node'),
        //策略
        {
          "name": "policies",
          "hidden": true,
          "children": [{
              "name": "bypass",
              "children": [
                bypass.get('bypassWhenParticipantIsNull', "false"),
                bypass.get('bypassWhenParticipantIsStartUser', "false"),
                bypass.get('bypassWhenParticipantSameAsPreviousTask', "false"),
                bypass.get('bypassWhenParticipantProcessed', "false")
              ]
            },
            returnElement.get('enableReturn', "true"),
            returnElement.get('executeReturn', 'true'),
            returnElement.get('executeSuspend', 'true'),
            returnElement.get('executeTerminate', 'true'),
            returnElement.get('executeRestart', 'true')
          ]
        }
      ]
    }];
    if(!isLoop)
      children.unshift(ioSpecification.get(designer));
    children.unshift(performer);
    return {
      "name": "userTask",
      "attributes": attrs,
      "children": children
    };
  };
  UserTaskShape.beforeExport=function(designer, node, json){
    var children=json.children;
    var ioSpec;
    children.forEach(function (child, i) {
      if (child && child.name === 'ioSpecification') {
        ioSpec = child;
      }
    });
    if(ioSpec)
    ioSpecification.beforeExport(ioSpec);
  }
});
