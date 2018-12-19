define(function (require, exports, module) {
  var utils = require('../../core/utils');
  var formAction = require('./formAction');

  function get(designer) {
    var defaultActions = designer.getOption('defaultActions');
    var children = [];
    var defaultActionsIncludeAssign=designer.exVariable[0].defaultActionsIncludeAssign;
    var defaultActionsIncludeAddSignBefore=designer.exVariable[1].defaultActionsIncludeAddSignBefore;
    if(defaultActions && defaultActions.length > 0){
      defaultActions.forEach(function(action){
        if((action.type!='assign' && action.type!='addsignbefore')||(action.type=='assign' && defaultActionsIncludeAssign==true) ||(action.type=='addsignbefore' && defaultActionsIncludeAddSignBefore==true))
        children.push(
          formAction.get(designer, action)
        );
      });
    }
    return {
      "name": "formActionGroup",
      "variableChildren": true,
      "defaultChild": formAction.def.bind(null, designer, {type: 'approve'}),
      "children": children
    };
  }

  function def(designer) {
    return {
      "name": "formActionGroup",
      "variableChildren": true,
      "defaultChild": formAction.def.bind(null, designer, {type: 'approve'}),
      "children": [
        formAction.def(designer, {
          type: 'approve'
        })
      ]
    };
  }

  function beforeImport(group) {
    if(!group || !group.children)return;
    group.children.forEach(function(action){
      formAction.beforeImport(action);
    });
  }

  exports.get = get;
  exports.def = def;
  exports.beforeImport = beforeImport;
});
