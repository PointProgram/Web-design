import Vue from 'vue'
import Vuex from 'vuex'
import ListElements from '@/cls/model/ListElements.js'
import ListElementBackend from '@/cls/model/backend/ListElementBackend.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listElems: null
  },
  getters: {
    ListElementsGet(state) {
      return state.listElems.getItems();
    }
  },
  mutations: { // cannot be asynchronous! (always sync)
    INIT_TODO: (state, storage) => {
      if (storage === 'vuex') {
        state.listElems = new ListElements();
      }
      if (storage === 'backend')
      state.listElems = new ListElementBackend();

    },
    ADD_TODO: (state, {itemTitle, itemTranslation, itemTranscription}) => {
      state.listElems.add_learn(itemTitle, itemTranslation, itemTranscription);
    },
    TOGGLE_DONE_TODO: (state, listElemId) => {
        state.listElems.checkSelected([listElemId]);
    },
    DELETE_ITEM_TODO: (state, listElemId) => {
      state.listElems.delete_learn([listElemId]);
    }
  },
  actions: { // can be asynchronous!
    INIT_TODO: (context, storage) => {
      context.commit('INIT_TODO', storage);
    },
    ADD_TODO: (context, {itemTitle, itemTranslation, itemTranscription}) => {
      context.commit('ADD_TODO', {itemTitle, itemTranslation, itemTranscription} );
    },
    TOGGLE_DONE_TODO: (context, listElemId) => {
        context.commit('TOGGLE_DONE_TODO', listElemId);
    },
    DELETE_ITEM_TODO: (context, listElemId) => {
      context.commit('DELETE_ITEM_TODO', listElemId);
    }
  },
  modules: {
  }
})
