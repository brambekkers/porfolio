import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        text: {
            all: true,
            intro: true,
            profession: false
        },
        info: false,
        scroll: false,
        contact: false,
        person: true,
        profession: ""
    },
    getters: {
        text(state) {
            return state.text;
        },
        info(state) {
            return state.info;
        },
        scroll(state) {
            return state.scroll;
        },
        contact(state) {
            return state.contact;
        },
        profession(state) {
            return state.profession;
        },
        person(state) {
            return state.person;
        },

    },
    mutations: {
        text(state, { type, bool }) {
            state.text[type] = bool;
        },
        info(state, val) {
            state.info = val;
        },
        person(state, val) {
            state.person = val;
        },
        scroll(state) {
            state.scroll = true;
        },
        profession(state, val) {
            state.profession = val;
        },
        contact(state, val) {
            state.contact = val;
        },
        close(state) {
            state.profession = "";
            state.person = true;
            state.contact = false;
            state.text.all = true;
            state.info = false;
        }
    }
});
