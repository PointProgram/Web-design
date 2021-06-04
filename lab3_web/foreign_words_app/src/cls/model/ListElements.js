import ItemElem from './ItemElem.js';

export default class ListElements {
    constructor() {
        this.items = [];
        this.itemsLearned = [];
    }

    _getItemIndex_learn(itemId) {
        return this.items.findIndex( (item) => item.id === itemId); 
    }

    _getItemIndex_tolearn(itemId) {
        return this.itemsLearned.findIndex( (item) => item.id === itemId); 
    }

    getItems() {
        return this.items;
    }

    add_learn(title, translation, transcription) {
        const item = new ItemElem(title, translation, transcription);
        this.items.push(item);
    }

    add_tolearn(title, translation, transcription) {
        const item = new ItemElem(title, translation, transcription);
        this.itemsLearned.push(item);
    }

    delete_learn(itemId) {
        this.items.splice(this._getItemIndex_learn(itemId), 1);
    }

    delete_tolearn(itemId) {
        this.itemsLearned.splice(this._getItemIndex_tolearn(itemId), 1);
    }

    checkSelected(itemIdList) {
        this.items.map( (item) => {
        if (itemIdList.indexOf(item.id) > -1) item.checkSelected();
        }); 
    }

    checkSelected_tolearn(itemIdList) {
        this.itemsLearned.map( (item) => {
        if (itemIdList.indexOf(item.id) > -1) item.checkSelected_tolearn();
        }); 
    }

    getTitle(itemId) {
        const itemIndex = this._getItemIndex_learn(itemId);
        return this.items[itemIndex].title;
    }

    getTranslation(itemId) {
        const itemIndex = this._getItemIndex_learn(itemId);
        return this.items[itemIndex].translation;
    }

    getTranscription(itemId) {
        const itemIndex = this._getItemIndex_learn(itemId);
        return this.items[itemIndex].transcription;
    }

}

