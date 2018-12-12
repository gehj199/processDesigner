/**
 * @fileOverview
 *
 * compensateEventDefinition
 */
define(function (require, exports, module) {
  var utils = require('../../core/utils');
  var kity = require('../../core/kity');

  var Designer = require('../../core/designer');

  var compensateEventDefinition = {
    create: function (node) {
      var group = new kity.Group();
      var outline = new kity.Circle().pipe(function () {
        this.stroke(
          node.getStyle('white')
        );
        this.fill(node.getStyle('background'));
      });
      var sign = new kity.Path().stroke(node.getStyle('normal-stroke'), node.getStyle('stroke-width'));
      group.addShape(outline);
      group.addShape(sign);

      // this._node = node;
      return group;
    },
    update: function (group, node, box) {
      var shapes = group.getShapes();
      var outline = shapes[0];
      var sign = shapes[1];
      var space = 4;
      var radius = 13;
      outline.setRadius(radius).setCenter(box.cx, box.cy);//设置边界，无显示样式
      var cx = box.cx;
      var cy = box.cy;
      var x = cx - 20;
      var y = cy - radius;
      sign.getDrawer().clear()
      .moveTo(x+5,y+radius)
      .lineTo(x+radius+3,y)
      .lineTo(x+radius+3,y+2*radius)
      .lineTo(x+5,y+radius)
      .moveTo(x+radius+3,y+radius)
      .lineTo(x+radius*2,y)
      .lineTo(x+2*radius,y+2*radius)
      .lineTo(x+radius+3,y+radius)

      return outline.getRenderBox();
    }
  };
  compensateEventDefinition.getProperty = function () {
    var attributes=[{
      "name":'id',
      "value":utils.uuid('compensateEvent'),
      "editor": {
        "type": "none"
      }
    },{
      "name":'waitForCompletion',
      "value":"true",
      "editor":{
        "type":"checkbox",
      }
    },{
      "name":'activityRef',
      "hidden":true,
    }]
    return {
        "name": "compensateEventDefinition",
        "attributes":attributes,
      };
  };
  Designer.registerEventDefinition('compensateEventDefinition', compensateEventDefinition);

  module.exports = compensateEventDefinition;
});
