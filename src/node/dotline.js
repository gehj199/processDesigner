/**
 * @fileOverview
 *
 * dotline虚线
 */
define(function (require, exports, module) {
  var kity = require('../core/kity');

  var Designer = require('../core/designer');

  kity.extendClass(Designer, {
    getDotlineDefaultProps: function () {
      var designer = this;
      return {
        "name": "association",
        "hideTitle": true,
        "attributes": [{
          "name": "id",
          "hidden": "true",

        }, {
          "name": 'offsetX',
          "hidden": true
        }, {
          "name": 'offsetY',
          "hidden": true
        }, {
          "name": 'targetRef',
          "hidden": true
        }, {
          "name": 'sourceRef',
          "hidden": true
        }, {
          "name": 'startPos',
          "hidden": true
        }, {
          "name": 'endPos',
          "hidden": true
        }, {
          "name": 'inflections',
          "hidden": true
        },{
          "name": 'associationDirection',
          "value": 'One',
          "editor":{
            "type":"combobox",
            "options": designer.getOption('dotline')
          }
        }],
      };
    }
  });

});
