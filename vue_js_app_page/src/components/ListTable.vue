<template>
    <div class="card border-primary mb-3" v-if="listElems">
        <div class="card-header">
            <div class="nav nav-tabs card-header-tabs scroll_text" id="learn_tab">
                <div id = "lnk" v-for="listElem in listElems" :key="listElem.id">                  
                    <button class="nav-item nav-link text-dark col-12 link" v-bind:id="listElem.id" data-toggle="tab" v-bind:href="'#' + listElem.word_id" role="tab" v-bind:aria-controls="listElem.id" aria-selected="false" v-bind:name="listElem.id" @click="checkSelected(listElem.id)">{{listElem.title}}</button>     
                    <button v-bind:id="listElem.id" class="btn btn-primary btn-lg btn-block del-button" @click="delete_learn(listElem.id)">Delete</button>
          <div class="tab-content" id="tab_desk">
            <div class="tab-pane fade show descr" :class="listElem.if_selected ? 'active' : ''" v-bind:id="listElem.word_id" role="tabpanel" v-bind:aria-labelledby="listElem.id">
                <table class="table table-hover group table-striped">
                    <tbody>
                        <tr>
                            <td>{{listElem.translation}}</td>
                        </tr>
                        <tr>
                            <td>{{listElem.transcription}}</td>
                        </tr>
                    </tbody>
                </table>      
            </div>   
        </div>                         
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListTable',
    props: {
        listElems: Array
    },
    methods: {
    delete_learn(id) {
      this.$emit('delete_learn', id);
    },
    checkSelected(id) {
      this.$emit('checkSelected', id);
    }
  }
}
</script>
<style>
#lnk {
  display: block;
  width: 250px;
}
#lnk > .link {
    height: 50px;
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
