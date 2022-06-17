import itemModel from "../model/itemModel.js";

export default class controller {
    constructor(model, viewList) {
        this.model = model;
        this.viewList = viewList;
        this.model.setOnChangeCallback((e) => this.onChangeCallback(e));
        this.viewList.setControllerOnAddItem(this.addItem);
        this.viewList.setControllerOnDelItem(this.delItem);
        this.initOnModelChange(); 
        this.viewList.setControllerOnSelected(this.itemSelected);
        this.viewList.setControllerOnSelected1(this.itemSelected1);
        this.viewList.setControllerOnQuiz(this.onQuizSome); 
        document.querySelector('#subm').addEventListener('click', (e)=>viewList.onAddItem(e));
        document.querySelector('#check').addEventListener('click', ()=>this.onQuizSome());
        document.querySelector('#refresh').addEventListener('click', ()=>this.refreshTable());
    }

    getItems(array) {
        var arr = [], randIndex, ind = [], count = 1;
        if(array.length == 0) {
            for(let i = 0; i < 4; i++)
            arr.push("None");
            return arr;
        }
        while(arr.length != 4) {
            if(ind.length == array.length) arr.push("None");
            var randIndex = Math.floor(Math.random() * array.length);
            if(!ind.includes(randIndex)) {
                arr.push(array[randIndex]);
                ind.push(randIndex);
            }
            count++;
        }
        return arr;
    }

    itemSelected(word_id) {
        this.model.checkSelected([word_id], "TOLEARN");
    }
    itemSelected1(word_id) {
        this.model.checkSelected([word_id], "LEARNED");
    }

    onChangeCallback() {
        /* updates UI when a model has changed (title, done attributes) */
        document.querySelector('#gps_tab').innerHTML = this.viewList.learnList();
        document.querySelector('#tab_desk').innerHTML = this.viewList.learnDescrList();
        document.querySelector('#learn_tab').innerHTML = this.viewList.learnedList();
        document.querySelector('#learn_desk').innerHTML = this.viewList.learnedDescrList();
    }

    putValues(mainWord, mainTrans,  sub_1, sub_2, sub_3, sub_4) {
        let main_word = document.getElementById('main_word');
        let main_trans = document.getElementById('transl_h');
        let usersec1 = document.getElementById('tr_1');
        let usersec2 = document.getElementById('tr_2');
        let usersec3 = document.getElementById('tr_3');
        let usersec4 = document.getElementById('tr_4');

        main_word.innerHTML = (mainWord == undefined) ? "None" : mainWord;
        main_trans.innerHTML = (mainTrans == undefined) ? "None" : mainTrans;
        usersec1.innerHTML = (sub_1 == undefined) ? "None" : sub_1;
        usersec2.innerHTML = (sub_2 == undefined) ? "None" : sub_2;
        usersec3.innerHTML = (sub_3 == undefined) ? "None" : sub_3;
        usersec4.innerHTML = (sub_4 == undefined) ? "None" : sub_4;
    }

    initializeTable(ar) {
        const it = this.getItems(ar);
        this.putValues(it[0].title, it[0].translation, it[0].translation, it[1].translation, it[2].translation, it[3].translation);
    }

    onQuizChangeCallback() {
        let handler = {};
        this.model.items = new Proxy(this.model.items, handler);
    }


    addItem(title, translation, transcription) {
        console.log(this.clicked);
        const item = new itemModel(title, translation, transcription);
        this.model.add(item, "TOLEARN");
    }

    delItem(id) { 
        this.model.delete(id, "TOLEARN");
    }

    checkBox (){
        if(document.getElementById('rad_1').checked)
            return 1;
        else if(document.getElementById('rad_2').checked)
            return 2;
        else if(document.getElementById('rad_3').checked)
            return 3;
        else if(document.getElementById('rad_4').checked)
            return 4;
        alert("None was checked");
        return false;
    }

    onQuizSome (){
        let onCheck = this.checkBox();
        if(!onCheck) 
            return;
        let main_word = document.getElementById('main_word');
        let main_trans = document.getElementById('transl_h');
        let usersec1 = document.getElementById('tr_1');
        let usersec2 = document.getElementById('tr_2');
        let usersec3 = document.getElementById('tr_3');
        let usersec4 = document.getElementById('tr_4');
        switch(onCheck) {
            case 1:
                if((main_trans.textContent != usersec1.textContent)) {
                    alert("Incorrect answer 1");
                    return;
                }
                break;
            case 2:
                if((main_trans.textContent != usersec2.textContent)) {
                    alert("Incorrect answer 2");
                    return;
                }
                break;
            case 3:
                if((main_trans.textContent != usersec3.textContent)) {
                    alert("Incorrect answer 3");
                    return;
                }
                break;
            case 4:
                if(main_trans.textContent != usersec4.textContent) {
                    alert("Incorrect answer 4");
                    return;
                }
                break;
        }
        if(main_trans.textContent == "None") {
            alert("Unknown words");
            return;
        }
        alert("Correct answer");
        for(let i = 0; i < this.model.items.length; i++) {
            if((this.model.items[i].title == main_word.textContent) && (this.model.items[i].translation == main_trans.textContent)) {
                const item = new itemModel(this.model.items[i].title, this.model.items[i].translation, this.model.items[i].transcription);
                this.model.add(item, "LEARNED");

                this.delItem(this.model.items[i].id);
                this.onQuizChangeCallback();
            }
        }
        this.refreshTable();
    }

    refreshTable() {
        const it = this.getItems(this.model.items);
        let randIndex = Math.floor(Math.random() * 4), con=0;
        while(it[randIndex].title == undefined) {
            randIndex = con;
            con++;
            if(con == 4)
                break;
        }
        this.putValues(it[randIndex].title, it[randIndex].translation, it[0].translation, it[1].translation, it[2].translation, it[3].translation);
    }

    initOnModelChange() {
        /* updates UI when a model list has changed (adds, deletes items) */
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                document.querySelector('#gps_tab').innerHTML = this.viewList.learnList();
                document.querySelector('#tab_desk').innerHTML = this.viewList.learnDescrList();
                document.querySelector('#learn_tab').innerHTML = this.viewList.learnedList();
                document.querySelector('#learn_desk').innerHTML = this.viewList.learnedDescrList();
                return true;
            }
        }
        this.model.items = new Proxy(this.model.items, handler);
    }
}