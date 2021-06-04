const axios = require('axios');

export default class ListElementBackend {
    constructor() {
        this.listElements = [];
        this.loadElems();
    }
    
    get baseURL() { //only getter. it used as baseURL without ()
        return  'http://localhost:8080/';
    }

    async add_learn(title, translation, transcription) {
        await axios.post(this.baseURL, {"title": title, "translation": translation, "transcription": transcription, "if_selected": false} );
        await this.loadElems();
    }

    getItems() {
        return this.listElements;
    }

    async loadElems() {
        const result = await axios.get(this.baseURL + '');
        this.listElements = result.data;

    }

    async delete_learn(itemId) {
        await axios.delete(this.baseURL + itemId + '/');
        await this.loadElems();

    }

    async getItem(itemId) {
        const response = await axios.get(this.baseURL + itemId + '/');
        return response.data;
    }

    async getTitle(itemId) {
        const item = await this.getItem(itemId);
        return item.title;
    }

    async getTranslation(itemId) {
        const item = await this.getItem(itemId);
        return item.translation;
    }

    async getTranscription(itemId) {
        const item = await this.getItem(itemId);
        return item.transcription;
    }

    async checkSelected(itemId) {
        const item = await this.getItem(itemId);
        await axios.patch(this.baseURL + itemId + '/', {"if_selected": !item.if_selected} );
        await this.loadElems();
    }
}