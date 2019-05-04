<template>
    <div class="navbar">
        <img src="/icons/menu.svg" style="height:24px;width:27px;opacity:0.5;cursor:pointer" v-on:click="$emit('Display')" />
        <img src="/icons/astronauts.svg" style="height:30px;width:30px;margin-left:30px;" />
        <span>scut<strong>bbs</strong></span>
        <div class="nav-search">
            <input type="text" placeholder="搜索" v-model="SearchText" />
            <img src="/icons/lookup.svg" style="height:20px;width:30px;" @click="search" />
        </div>
        <div class="user-status"></div>
        <div class="not-login">
            <router-link to="/login">登录</router-link>
            <router-link to="/register">注册</router-link>
        </div>
        <div id="logged"><Loggedin /></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import { State, Getter, Mutation, namespace } from 'vuex-class';
import Loggedin from '@/components/universal/Loggedin.vue';

@Component({
    components: {
        Loggedin,
    },
})
export default class Navbar extends Vue {
    @Provide() public SearchText: string = '';

    public search() {
        this.$router.replace({ name: 'search', query: { keyWord: this.SearchText } });
    }

    @Getter public isLogin: any;
}
</script>

<style scoped>
.navbar {
    background-color: #f2f2f2;
    height: 65px;
    display: flex;
    align-items: center;
    flex-direction: row;
}
.navbar > * {
    font-size: 28px;
    margin-left: 10px;
}
.navbar span {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.nav-search {
    height: 36px;
    background-color: white;
    margin-left: 100px;
    border-radius: 8px;
    display: flex;
    padding-left: 10px;
}
.nav-search input {
    border: none;
    padding: 0px;
    height: 100%;
    width: 300px;
    font-size: 20px;
    display: block;
    border-radius: 10px;

    /* 去除chrome的聚焦 */
    outline: none;
}
.nav-search img {
    height: 30px;
    width: 30px;
    align-self: center;
    cursor: pointer;
}

.user-status {
    align-self: flex-end;
}

.not-login {
    display: flex;
    font-size: 18px;
    margin-left: auto;
    display: none;
}
.not-login a {
    color: #2c3e50;
    margin-left: 20px;
}

#logged {
    margin-left: auto;
}
</style>
