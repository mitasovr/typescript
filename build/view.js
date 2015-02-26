var TextFlow;
(function (TextFlow) {
    var WordWrap = (function () {
        function WordWrap(Paragraph, text) {
            this.Paragraph = Paragraph;
        }
        WordWrap.prototype.process = function () {
            this.currentPar = new this.Paragraph();
            return this.currentPar;
        };
        return WordWrap;
    })();
    TextFlow.WordWrap = WordWrap;
})(TextFlow || (TextFlow = {}));
var Paragraph;
(function (Paragraph) {
    var View = (function () {
        function View() {
        }
        View.prototype.process = function () {
        };
        return View;
    })();
    Paragraph.View = View;
})(Paragraph || (Paragraph = {}));
/// <reference path="common/TextFlow.ts" />
/// <reference path="view/Paragraph.ts" />
var textFlow = new TextFlow.WordWrap(Paragraph.View, 'sadasd');
textFlow.process();
