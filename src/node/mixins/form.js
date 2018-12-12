define(function (require, exports, module) {
  var utils = require('../../core/utils');
  var formActionSet = require('./formActionSet');
  var fieldRight=require('./fieldRight');

  function get(designer, withoutActionSet,nodeAttributes) {
    var attributes=[{
      "name": "attachmentRight",
      "value": 1,
      "editor": {
        "type": "multicheckbox",
        "data": designer.getOption('attachmentRightType'),
        "onBeforeChange": function (value, index, checked) {
          if (checked && index && !isNaN(index)) {
            return value | 1;
          }
        }
      }
    },{
      "name": "path",
      "editor":{
        "type":"getSelect",
        "label":designer.getLang('label.select'),
        "onClick": function() {
          var popupWindow = designer.getOption("popupWindow");
          var propertyEditor = designer.getUI("ribbon/node/property");
        if (popupWindow && propertyEditor) {
              popupWindow(this, propertyEditor, {
                type: "formPath"
              });
          }
        }
      }
    },{
      "name": "pathName",
      "hidden": true,
      "editor":{
        "placeholder": "path name"
      }
    },{
     "name": "type",
     "value": "razortemplate",
     "hidden": true
   }];
    return {
      "name": "form",
      "hidden": true,
      "attributes" : attributes,
      "children":withoutActionSet ? [] :((nodeAttributes.length<6) ? [fieldRight.get(designer,attributes)] : [fieldRight.get(designer,attributes),formActionSet.get(designer)]),
    };
  }
  function beforeImport(form) {
    if (!form || !form.children) return;
    var actionSet = utils.certainName('formActionSet', form.children);
    if (actionSet) {
      formActionSet.beforeImport(actionSet);
    }
    if(form && form.attributes && form.attributes.length==4){
      var path=utils.findProperty(form.attributes,'path');
      var pathName=utils.findProperty(form.attributes,'pathName');
      var type=utils.findProperty(form.attributes,'type');
      if(type.value=='formtemplate')
        path.value +='  |'+pathName.value;
    }
    if(form && form.children){
      for(var i=0;i<form.children.length;i++){
        if(form.children[i].name=="fieldRightSet"){
          for(var j=0;j<form.children[i].children.length;j++){
            if(form.children[i].children[j].name=="fieldRight")
              form.children[i].children[j].hidden=true;
          }
        }
      }
    }
  }
  function beforeExport(form){
    var type=utils.findProperty(form.attributes,'type');
    var path=utils.findProperty(form.attributes,'path');
    if(type.value=='formtemplate' && path.value)
    path.value=$.trim(path.value.split("|")[0]);
  }
  exports.get = get;
  exports.beforeImport = beforeImport;
  exports.beforeExport = beforeExport;
});
