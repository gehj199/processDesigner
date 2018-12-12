/**
 * @fileOverview
 *
 * 针对XML格式中未定义的节点，流程设计器设计过程不会产生(新增需求时的过渡节点)
 */
define(function (require, exports, module) {
  var kity = require('../../core/kity');
  var utils = require('../../core/utils');

  var Designer = require('../../core/designer');
  var OutlineManager = require('../../core/outline');


  var undefinedNodeShape = kity.createClass('undefinedNodeShape', {
    base: OutlineManager,
    create: function (node) {
      var group = new kity.Group();
      var circle = new kity.Circle().pipe(function() {
        this.stroke(node.getStyle('selected-connect-color'),
          node.getStyle('stroke-width'));
        this.fill(node.getStyle('background'));
      });
      var sign = new kity.Path().stroke(node.getStyle('selected-connect-color'), 2);
      circle.setId(utils.uuid('undefinedNode'));
      this._node = node;
      group.addShape(circle);
      group.addShape(sign);
      this._outlineShape = group;
      return this._outlineShape;
    },
    doUpdate: function (outlineGroup, node, box) {
      var shapes = outlineGroup.getShapes();
      var outline = shapes[0];
      var d = box.width > box.height ? box.width : box.height;
      outline.setRadius(d / 2);

      var mid = utils.midPoint(box, {
        x: box.x + box.width,
        y: box.y + box.height
      });
      outline.setCenter(mid.x, mid.y);
      //设置圆心
      var sign=shapes[1];
      var signX=box.x;
      var signY=box.y;
      var radius=5;
      sign.getDrawer().clear()
        .moveTo(signX+20,signY+10)
        .carcTo(radius*1.2,1,1,signX+27,signY+17)
        .lineTo(signX+27,signY+27)
        .moveTo(signX+27,signY+31)
        .lineTo(signX+27,signY+34)
      return box;
    }
  });
  Designer.registerOutline('undefinedNode', undefinedNodeShape);

  undefinedNodeShape.getProperty = function (designer, options) {
    var attributes=[{
      "name": "id",
      "editor": {
        "type": "none"
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
    return{
      name:'',
      "attributes":attributes,
    };
  };

  });
