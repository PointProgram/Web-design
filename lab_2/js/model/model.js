export default class model {
    constructor() {
        this.items = [];
        this.itemsLearned = [];
        this.onChangeCallback = null;
    }

    add(item, what) {
        item.onChangeCallback = this.onChangeCallback;
        if(what == "TOLEARN")
            this.items.push(item);
        else
            this.itemsLearned.push(item);
    }

    delete(itemId, what) {
        let itemA;
        if(what == "TOLEARN")
            itemA = this.items;
        else
            itemA = this.itemsLearned;
        const itemIndex = itemA.findIndex( (item) => item.id === itemId); 
        itemA.splice(itemIndex, 1);
    }

    checkSelected(itemIdList, what) {
        let itemA;
        if(what == "TOLEARN")
            itemA = this.items;
        else
            itemA = this.itemsLearned;
            itemA.map( (item) => {
            if (itemIdList.indexOf(item.id) > -1) item.checkSelected();
         }); 
    }

    setOnChangeCallback(onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    }

}

