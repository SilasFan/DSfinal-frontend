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
            state.token = payload.newtoken;
            localStorage.setItem('token', state.token);
            console.log(state.token);
        },
        setCurrentUser(state, payload) {
            state.CurrentUser = payload.username;
            localStorage.setItem('currentuser', state.CurrentUser);
        },
        setNickName(state, payload) {
            state.NickName = payload.nickname;
            localStorage.setItem('nickname', payload.nickname);
        },
        logout(state) {
            state.token = '';
            state.CurrentUser = '';
            localStorage.clear();
        },
    },
    actions: {},
});
