/**
 * @fileOverview
 *
 * 注释节点
 */
define(function (require, exports, module) {
  var kity = require('../../core/kity');
  var utils = require('../../core/utils');

  var Designer = require('../../core/designer');
  var OutlineManager = require('../../core/outline');
  var Renderer = require('../../core/render');


  var textAnnotationShape = kity.createClass('textAnnotationShape', {
    base: OutlineManager,
    create: function (node) {
     var group = new kity.Group();
     var outline = new kity.Rect().pipe(function () {
       this.stroke(
         node.getStyle('normal-stroke'),
         node.getStyle('stroke-width')
       );
       this.fill(node.getStyle('background'));
     });
     group.addShape(outline);
     group.setId(utils.uuid('textAnnotation'));
     this._node = node;
     this._outlineShape = group;
      return this._outlineShape;
    },
    doUpdate: function (outlineGroup, node, box) {
      var shapes = outlineGroup.getShapes();
      var outline = shapes[0];
      var x = box.x + 4;
      var y = box.y;
      var width=box.width;
      var height=box.height;
      outline.getDrawer().clear()
        .moveTo(x,y)
        .lineTo(x+20,y)
        .moveTo(x,y)
        .lineTo(x,y+height+10)
        .lineTo(x+20,y+height+10);
      return outline.getRenderBox();
    }
  });
  Designer.registerOutline('textAnnotation', textAnnotationShape);

  textAnnotationShape.getProperty = function (designer, options) {
    var attributes=[{
      "name": "id",
      "editor": {
        "type": "none"
      }
    },{
      "name": 'textFormat',
      "value":'text/plain',
      "editor":{
        "type":"combobox",
        "options": [{
            "value": 'text/plain',
            "text": 'text/plain'
        }]
      }
    }, {
      "name": 'offsetX',
      "hidden": true
    }, {
      "name": 'offsetY',
      "hidden": true
    }, {
      "name": 'transform',
      "hidden": true
    }];
    return {
      "name": "textAnnotation",
      "attributes":attributes,
      "children":[{
        "name": "text",
        "children": [{
          "name": "text",
          "value": "",
          "editor": {
            "placeholder":designer.getLang('message.inputs'),
            "requiredMessage":designer.getLang('message.requiredMessage'),
            "multiline": true,
            "required": true,
            "style": {
              "height": "100px",
              "width": "350px"
            }
          }
        }]
      }],
    };
  };

  });
