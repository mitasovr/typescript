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
//# sourceMappingURL=TextFlow.js.map