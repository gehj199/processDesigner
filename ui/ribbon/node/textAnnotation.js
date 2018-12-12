/**
 * @fileOverview
 *  可拖拽节点
 *  附加注释节点
 *
 */
define(function(require, exports, module) {
  var witdesigner = require('../../core/witdesigner');
  var Designer = witdesigner.Designer;
  var DesignerNode = witdesigner.Node;
  var FUI = require('../../core/fui');
  var $ = require('../../core/jquery');
  var kity = require('../../core/kity');

  Designer.registerUI('ribbon/node/textAnnotation', function(designer) {

    var $commandselectmenu = designer.getUI('widget/dragbutton');
    var $tabs = designer.getUI('ribbon/tabs');

    var box = new kity.Box(0, 0, 30, 30);
    var fakeNode = new DesignerNode();
    fakeNode.designer = designer;

    var nodeType = 'textAnnotation';
    var textAnnotationOutline = designer.getOutlineManager(nodeType);
    var textAnnotation = textAnnotationOutline.create(fakeNode, box);
    textAnnotationOutline.doUpdate(textAnnotation, fakeNode, box);
    textAnnotation.setAttr('transform', 'translate(10, 10)');
    textAnnotation.setData('text', "textAnnotation");
    textAnnotation.setData('options', {
      outlineType: nodeType,
      linePointsFilter: 8,
    });

    var $nodeSelect = $commandselectmenu.generate('AppendRootNode', [textAnnotation], {
      onShow: function() {
        $tabs.node.getWidgets().forEach(function(widget) {
          if (widget !== this && widget.getType() === 'SelectMenu') {
            widget.hide();
          }
        }, this);
      }
    });

    $tabs.node.appendWidget($nodeSelect);

    return $nodeSelect;
  });
});
