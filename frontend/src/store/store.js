import getMovie from '../util/getMovie';
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
    movies:[],
}

const mutations = {
    getMovieMutation(state,payload){
        console.log(JSON.parse(payload).entries)
        state.movies= JSON.parse(payload).entries;
    }
}
const actions = {
    getMovies({commit}){
    getMovie.then(result=>{
        console.log(JSON.parse(result));
        commit('getMovieMutation',result)
        })
    }
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
  })
  