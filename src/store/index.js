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
        scroll: false,
        contact: false,
        person: true,
        profession: ""
    },
    getters: {
        text(state) {
            return state.text;
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
        fieldOpen(state) {
            return state.contact
        }
    },
    mutations: {
        text(state, { type, bool }) {
            state.text[type] = bool;
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
            state.person = true
            state.contact = false
            state.text.all = true
        }
    }
});
