<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State, Getter, Mutation, namespace } from 'vuex-class';

@Component({})
export default class App extends Vue {
    @Mutation public setToken: any;
    @Mutation public setCurrentUser: any;
    @Mutation public setNickName: any;
    @State public CurrentUser!: string;
    @State public NickName!: string;
    @State private token!: string;

    // 读取本地缓存的token
    private mounted() {
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token')) {
            this.setToken(localStorage.getItem('token'));
        }
        if (localStorage.getItem('currentuser')) {
            this.setCurrentUser(localStorage.getItem('currentuser'));
        }
        if (localStorage.getItem('nickname')) {
            this.setNickName(localStorage.getItem('nickname'));
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0px;
    width: 100%;
    height: 100%;
}

body {
    margin: 0px;
    width: 100%;
    height: 100%;
}

html {
    height: 100%;
    width: 100%;
}
</style>
