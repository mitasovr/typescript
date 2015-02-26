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
/// <reference path="../view/Paragraph.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Paragraph;
(function (Paragraph) {
    var Edit = (function (_super) {
        __extends(Edit, _super);
        function Edit() {
            _super.apply(this, arguments);
        }
        return Edit;
    })(Paragraph.View);
    Paragraph.Edit = Edit;
})(Paragraph || (Paragraph = {}));
/// <reference path="common/TextFlow.ts" />
/// <reference path="edit/Paragraph.ts" />
var textFlow = new TextFlow.WordWrap(Paragraph.Edit, 'sadasd');
textFlow.process();
