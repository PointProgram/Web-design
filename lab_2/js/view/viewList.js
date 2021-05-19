import viewItem from './viewItem.js';
export default class viewList {
    constructor(model) {
        this.model = model;
        this.controllerOnAddItem = null;
        this.controllerOnTranslation = null;
        this.controllerOnTranscription = null;
        this.controllerOnSelected = null;
        this.controllerOnSelected1 = null;
        this.controllerOnDelItem = null;
        this.controllerOnQuiz = null;
        this.controllerOnQuiz1 = null;
        this.controllerOnQuiz2 = null;
        this.controllerOnQuiz3 = null;
        this.controllerOnQuiz4 = null;
        document.querySelector('#gps_tab').addEventListener('click', (e) => this.onClick(e));
        document.querySelector('#learn_tab').addEventListener('click', (e1) => this.onClick1(e1));
        document.querySelector('#subm').addEventListener('click', (act) => this.onClickSet(act));
    }

    setControllerOnSelected(controllerOnSelected) {
        this.controllerOnSelected = controllerOnSelected;
    }

    setControllerOnSelected1(controllerOnSelected1) {
        this.controllerOnSelected1 = controllerOnSelected1;
    }

    setControllerOnAddItem(controllerOnAddItem, controllerOnTranslation, controllerOnTranscription) {
        this.controllerOnAddItem = controllerOnAddItem;
        this.controllerOnTranslation = controllerOnTranslation;
        this.controllerOnTranscription = controllerOnTranscription;
    }

    setControllerOnDelItem(controllerOnDelItem) {
        this.controllerOnDelItem = controllerOnDelItem;
    }


    setControllerOnQuiz(controllerOnQuiz,controllerOnQuiz1, controllerOnQuiz2, controllerOnQuiz3, controllerOnQuiz4) {
        this.controllerOnQuiz = controllerOnQuiz;
        this.controllerOnQuiz1 = controllerOnQuiz1;
        this.controllerOnQuiz2 = controllerOnQuiz2;
        this.controllerOnQuiz3 = controllerOnQuiz3;
        this.controllerOnQuiz4 = controllerOnQuiz4;
    }

    onClickSet(act) {
        act.preventDefault();
        var dict = {};
        dict["word"] = document.querySelector('input[name="add-word"]').value;
        dict["translation"] = document.querySelector('input[name="add-transl"]').value;
        dict["transcription"] = document.querySelector('input[name="add-transc"]').value;
        return dict;
    }

    inputClear() {
        document.querySelector('input[name="add-word"]').value = "";
        document.querySelector('input[name="add-transl"]').value = "";
        document.querySelector('input[name="add-transc"]').value = "";
    }

    onClick(e) {
        if (e.target.classList.contains('link')) {
            this.controllerOnSelected(e.target.dataset.id);
            return;
        } 
        console.log(e.target.className);
        if (e.target.classList.contains('del-button')) {
            this.controllerOnDelItem(e.target.dataset.id);
            return;
        } 
    }

    onClick1(e1) {
        if (e1.target.classList.contains('link')) {
            this.controllerOnSelected1(e1.target.dataset.id);
            return;
        } 
    }

    onAddItem(e) {
        const elems = this.onClickSet(e);
        this.inputClear();
        if(elems.word == "" || elems.translation == "") {
            alert("ERROR: Word or Translation forms are empty");
            return;
        }
        this.controllerOnAddItem(elems.word, elems.translation, elems.transcription);
    }

    learnList() {
        const itemsHtml = this.model.items.map( (item) => {
            const ViewItem = new viewItem(item);
            return ViewItem.wordToLearn();
        }).join("");
        return `${itemsHtml}`;
    }

    learnDescrList() {
        const itemsH = this.model.items.map( (item) => {
            const ViewItem = new viewItem(item);
            return ViewItem.wordDescription();
        }).join("");
        return `${itemsH}`;
    }

    learnedList() {
        const itemsHtml1 = this.model.itemsLearned.map( (item) => {
            const ViewItem = new viewItem(item);
            return ViewItem.wordLearned();
        }).join("");
        return `${itemsHtml1}`;
    }

    learnedDescrList() {
        const itemsH1 = this.model.itemsLearned.map( (item) => {
            const ViewItem = new viewItem(item);
            return ViewItem.wordDescription();
        }).join("");
        return `${itemsH1}`;
    }
}