import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        CurrentUser: '',
        token: '',
        NickName: '',
    },
    getters: {
        isLogin: state => {
            return state.CurrentUser !== '' && state.token !== '';
        },
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload;
            window.localStorage.setItem('token', payload);
        },
        setCurrentUser(state, payload) {
            state.CurrentUser = payload;
            window.localStorage.setItem('currentuser', payload);
        },
        setNickName(state, payload) {
            state.NickName = payload;
            window.localStorage.setItem('nickname', payload);
        },
        logout(state) {
            state.token = '';
            state.CurrentUser = '';
            localStorage.clear();
        },
    },
    actions: {},
});
