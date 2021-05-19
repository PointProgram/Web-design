export default class viewItem {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }
    wordToLearn() {
        return `
        <button class="nav-item nav-link text-dark col-12 link" id = "${this.itemModel.id}" data-id="${this.itemModel.id}" data-toggle="tab" href="#${this.itemModel.word_id}" role="tab" aria-controls="${this.itemModel.word_id}" aria-selected="false" name="${this.itemModel.id}">${this.itemModel.title} </button>     
        <button data-id="${this.itemModel.id}" class="btn btn-primary btn-lg btn-block del-button">Delete</button>`
    }
    wordLearned() {
        return `
        <button class="nav-item nav-link text-dark col-12 link" id = "${this.itemModel.id}" data-id="${this.itemModel.id}" data-toggle="tab" href="#${this.itemModel.word_id}" role="tab" aria-controls="${this.itemModel.word_id}" aria-selected="false" name="${this.itemModel.id}">${this.itemModel.title} </button>`
    }
    wordDescription() {
        const if_sel = (this.itemModel.if_selected) ? "active" : "";
        return `
        <div class="tab-pane fade show descr ${if_sel}" id = "${this.itemModel.word_id}" data-id="${this.itemModel.word_id}" role="tabpanel" aria-labelledby="${this.itemModel.id}">
            <table class="table table-hover group table-striped">
                <tbody>
                    <tr>
                        
                        <td>${this.itemModel.translation}</td>
                    </tr>
                    <tr>
                        <td>${this.itemModel.transcription}</td>
                    </tr>
                </tbody>
            </table>         
        </div>`
    }
}