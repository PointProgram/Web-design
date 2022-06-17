export default class itemModel {
    constructor(title, translation, transcription) {
        this.id = Math.round(Math.random() * 100000).toString();
        this.word_id = Math.round(Math.random() * 100000).toString();
        this.title = title;
        this.translation = translation;
        this.transcription = transcription;
        this.if_selected = false;

        this.onChangeCallback = null;
        return this.initOnModelChange();
    }

    checkSelected() {
        this.if_selected = !this.if_selected;
        return this.if_selected;
    }
    
    setOnChangeCallback() {
        this.onChangeCallback = onChangeCallback;
    }

    initOnModelChange() {
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                if (this.onChangeCallback) this.onChangeCallback(this);
                return true;
            }
        }
        return new Proxy(this, handler);
    }
}

