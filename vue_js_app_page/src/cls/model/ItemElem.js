export default class ItemElem {
    constructor(title, translation, transcription) {
        this.id = Math.round(Math.random() * 100000).toString();
        this.word_id = Math.round(Math.random() * 100000).toString();
        this.title = title;
        this.translation = translation;
        this.transcription = transcription;
        this.if_selected = false;

    }

    checkSelected() {
        this.if_selected = !this.if_selected;
    }
    
}
   

