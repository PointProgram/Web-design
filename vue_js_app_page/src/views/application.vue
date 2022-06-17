<template>
    <section class = "app" id = "app">
         <div class = "container">
         <div class = "row">
            <div class = "col-lg-4 coll-sm-12 text-center">
               <div id = "learned">
                  <div class="card border-primary mb-3">
                    <div class="card-header">
                      <a class="collapsed card-link text-dark text-center" data-toggle="collapse" href="#collapseLearn">                      
                        <h5 class="card-title text-dark">Dictionary</h5>
                      </a>
                      <h6 class="card-subtitle mb-2 text-muted">To Learn</h6>
                      <form>
                        <div class="form-group">
                          <input type="text" class="form-control" id="teztControl">
                        </div>
                      </form>
                  </div>
                     <div id="collapseLearn" class="collapse">
                      <div class="card-body">
                        <form>
                              <div class="form-group">
                                 <input type="text" class="form-control" id="add-word" name = "add-word" placeholder="Word" v-model="itemTitle"/>
                                 <input type="text" class="form-control" id="add-transl" name = "add-transl" placeholder = "Translation" v-model="itemTranslation"/>
                                 <input type="text" class="form-control" id="add-transc" name = "add-transc" placeholder = "Transcription" v-model="itemTranscription"/>
                                 <button class="btn btn-primary" type="button" id = "subm" @click="add">Add</button>

                              </div>
                           </form>
                        <div class="card border-primary mb-3">
                          <div class="card-header">
                            <ListTable :listElems="ListElementsGet"
                            @checkSelected="checkSelected" @delete_learn="delete_learn" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
               <div id = "notlearned">
                  <div class="card border-primary mb-3">
                    <div class="card-header">
                      <a class="collapsed card-link text-dark text-center" data-toggle="collapse" href="#collapseUnlearned">                      
                        <h5 class="card-title text-dark">Dictionary</h5>
                      </a>
                      <h6 class="card-subtitle mb-2 text-muted">Learned</h6>
                      <form>
                        <div class="form-group">
                          <input type="text" class="form-control" id="tetControl">
                        </div>
                      </form>
                  </div>
                     <div id="collapseUnlearned" class="collapse">
                      <div class="card-body">
                        <div class="card border-primary mb-3">
                          <div class="card-header">        
                              <div class="nav nav-tabs card-header-tabs scroll_text" id="learn_tab">
                
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
            <div class = "col-lg-8 coll-sm-12">
               <div id="demo" class="carousel slide" data-interval="false">
                     <div id = "to_ukr">
                        <div class="container mt-sm-5 my-1">
                          <div class="question ml-sm-5 pl-sm-5 pt-2">
                            <Choice :arr="get_items($store.state.listElems.items)" :num="get_random(4)" />
                      </div>
                      <div class="d-flex align-items-center pt-3" id="prev">
                        <button class="btn btn-primary" id = "refresh" type="button" @click="get_items($store.state.listElems.items)">Refresh</button>
                      </div>
                     </div>
                     </div>
               </div>
               </div>
            </div>
         </div>
      </section>
</template>



<script>
import ListTable from '../components/ListTable.vue'
import Choice from '../components/Choice.vue'

export default {
  name: 'Application',
  components: { ListTable, Choice },
  data() {
    return {
      itemTitle: '',
      itemTranslation: '',
      itemTranscription: ''
    }
  },
  methods: {
    add() {
      if( this.itemTitle ==="" || this.itemTranslation===""){
        alert("Missing title or translation");
        return;
      }
      this.$store.dispatch('ADD_TODO', {itemTitle: this.itemTitle, itemTranslation: this.itemTranslation, itemTranscription: this.itemTranscription});
      this.itemTitle="";
      this.itemTranslation="";
      this.itemTranscription="";
    },
    checkSelected(itemId) {
      this.$store.dispatch('TOGGLE_DONE_TODO', itemId);
    },
    delete_learn(itemId) {
       this.$store.dispatch('DELETE_ITEM_TODO', {itemId: itemId});
    },
    get_items(array) {
        //this.arr.splice(0, this.arr.length)
        console.log(array.length);
        if(array.length === 0) {
            console.log(array.length);
            return;
        }
        var randIndex, ind = [], arr = [];
        if(array.length == 0) {
            for(let i = 0; i < 4; i++)
            arr.push("None");
            return arr;
        }
        while(arr.length != 4) {
            if(ind.length == array.length) arr.push("None");
            randIndex = Math.floor(Math.random() * array.length);
            if(!ind.includes(randIndex)) {
                arr.push(array[randIndex]);
                ind.push(randIndex);
            }
        }
        console.log(arr);
        //this.pos = Math.floor(Math.random() * 4);
        return arr;
    },
    get_random(el) {
      return Math.floor(Math.random() * el);
    }
  },
  computed: {
    ListElementsGet: function() {
        return this.$store.getters.ListElementsGet
    }
  }
};
</script>


<style>
#to_ukr{
  background-color: white;
} 
.back {
    background-color:white;
    border-radius: 10px;
    max-width: 700px;
  }

  .app {
    background-color: #007b5e;
    padding-top: 5vw;
    padding-bottom: 8vw;
  }

  .del-button {
    height: 15px;
    font-size: 15px;
    line-height: 0;
  }
  .back>p {
    font-size: 32px;
  }
  
  .question {
    width: 75%;
  }
  .question h5 {
    size: 64px;
    text-align: center;
  }
  
  .options {
    background-color: #FF9933;
    border-radius: 10px;
    padding: 20px;
    position: relative;
    padding-left: 40px
  }
  
  .options:hover {
    background-color: #e98017;
    border-radius: 10px;
    padding: 20px;
    position: relative;
    padding-left: 40px
  }
  
  #options label {
    display: block;
    margin-bottom: 15px;
    font-size: 14px;
    cursor: pointer
  }
  
  .options input {
    opacity: 0
  }
  
  .checkmark {
    position: absolute;
    top: -1px;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #1B75DB;
    border: 1px solid #ddd;
    border-radius: 50%
  }
  
  .options input:checked~.checkmark:after {
    display: block
  }
  
  .options .checkmark:after {
    content: "";
    width: 10px;
    height: 10px;
    display: block;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: 300ms ease-in-out 0s
  }
  
  .options input[type="radio"]:checked~.checkmark {
    background: #1B75DB;
    transition: 300ms ease-in-out 0s
  }
  
  .options input[type="radio"]:checked~.checkmark:after {
    transform: translate(-50%, -50%) scale(1)
  }

@media(max-width:576px) {
    .question {
        width: 100%;
        word-spacing: 2px
    }
  }
  
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: invert(1);
  }
  
  .volume {
    background-color:white;
    border-radius: 10px;
    padding: 20px;
    max-width: 700px
  }
  
  .volume>p {
    font-size: 32px;
  }
  
  .areaV {
    background-color: #FF9933;
    padding: 50px;
    font-size: 2rem;
  }
  
  .areaV fa{
    background-color: #007B5E;
    text-decoration: none;
    font-size: 35px;
  }
  
  .areaV fa:hover{
    background-color: #007B5E;
    text-decoration: none;
    font-size: 35px;
  }

.scroll_text{
	height:100px;
	overflow:auto;
	padding:0px 15px;
}
.scroll_text::-webkit-scrollbar {  
    width: 8px;  
}  
.scroll_text::-webkit-scrollbar-track {  
    background-color: #E7E7E7
}  
.scroll_text::-webkit-scrollbar-thumb {  
    background-color: rgba(223, 86, 86, 0.69);
    border: 1px solid rgba(92, 92, 92, 0.5);
    border-radius: 10px;
}  
.scroll_text::-webkit-scrollbar-thumb:hover {  
    background-color: #000;  
	
}  
</style>