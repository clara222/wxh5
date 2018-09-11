import Vue from 'vue';
import Vuex, { StoreOptions, ActionTree } from 'vuex';

Vue.use(Vuex);

interface IBaseStore{
  score: number;
  name: string;
}

const state:IBaseStore = {
  score: 0,
  name: ''
}

const mutations ={
  selectOption: (state: IBaseStore, selectScore: number) => {
    state.score = state.score + selectScore;
  },
  inputName: (state: IBaseStore, name: string) => {
    state.name = name;
  }
}

const actions: ActionTree<IBaseStore, IBaseStore> = {
  selectAction: ({commit}: any, selectScore: number) => {
    commit('selectOption', selectScore);
  },
  nameAction: ({commit}: any, name: string) => {
    commit('inputName', name);
  }
}

const store: StoreOptions<IBaseStore> ={
  state,
  mutations,
  actions,
}

export default new Vuex.Store(store);