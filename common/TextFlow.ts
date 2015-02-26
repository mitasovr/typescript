
module TextFlow {

    export class WordWrap<Par extends Paragraph.View> {

        currentPar: Par;

        constructor(private Paragraph, text: string) {

        }

        process(): Par {
            this.currentPar = new this.Paragraph();
            return this.currentPar;
        }
    }
}