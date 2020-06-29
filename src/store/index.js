import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        scroll: false,
        profession: ""
    },
    getters: {
        scroll(state) {
            return state.scroll;
        },
        profession(state) {
            return state.profession;
        }
    },
    mutations: {
        scroll(state) {
            state.scroll = true;
        },
        profession(state, val) {
            state.profession = val;
        }
    }
});
