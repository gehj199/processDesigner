/**
 * @fileOverview
 *
 * 连线的类型，实现或者虚线
 *
 */
define(function(require, exports, module){
    var Designer = require('../../core/witdesigner').Designer;
    var FUI = require('../../core/fui');
    var $ = require('../../core/jquery');
    var kity = require('../../core/kity');

    Designer.registerUI('ribbon/node/lineType', function(designer) {
        var $tabs = designer.getUI('ribbon/tabs');
        var text = designer.getLang('ui.command.operation');
        var $lineType = new FUI.LabelPanel({
            label: text,
            column: true
        });

        var names = ['line','dotline'];
        names.forEach(function(name){
        var buttonText = designer.getLang('ui.command.' + name);
        var $button = new FUI.Button({
            label: buttonText,
            text: buttonText,
            className: ['command-widget', 'command-button', name]
        });
        $button.bindExecution('click',  function() {
          designer.lineType=name;
        });
        $button.appendTo($lineType);
      });
        $lineType.appendTo($tabs.node);
        return $lineType;
    });
});
