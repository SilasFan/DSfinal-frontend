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
        <div class="loggedin">
            <ul>
                <li>
                    <img src="/icons/message.svg" id="message" @click="showMessage" />
                    <div class="message-content" v-if="ShowMessage">
                        <div class="content-box">
                            <a href="#"><p>23333</p></a>
                            <a href="#"><p>23333</p></a>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="/icons/notification.svg" id="notification" @click="showNotification" />
                    <div class="message-content" v-if="ShowNotification">
                        <div class="content-box">
                            <a href="#">
                                <p class="reply">2333355555哈哈<strong>回复了你的贴子</strong>88888</p>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import { State, Getter, Mutation, namespace } from 'vuex-class';

@Component({})
export default class Navbar extends Vue {
    @Provide() public SearchText: string = '';

    @State public CurrentUser!: string;

    @Provide() public ShowMessage: boolean = false;
    @Provide() public ShowNotification: boolean = false;

    public showMessage() {
        this.ShowMessage = !this.ShowMessage;
        this.ShowNotification = false;
    }
    public showNotification() {
        this.ShowNotification = !this.ShowNotification;
        this.ShowMessage = false;
    }

    private search() {
        this.$router.push('/home/search');
    }
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

.loggedin {
    display: flex;
    margin-left: auto;
    margin-right: 100px;
}
.loggedin img {
    width: 26px;
    height: 20px;
    cursor: pointer;
    margin-right: 10px;
}
.loggedin ul {
    display: flex;
}
.loggedin li {
    list-style: none;
}

.message-content {
    width: 240px;
    z-index: 99;
    display: block;
    position: absolute;
    background-color: #fdfdfd;
    margin-left: -120px;
    margin-top: 10px;
    border-radius: 6px;
    box-shadow: #00000031 0px 3px 6px;
}
.message-content::before {
    content: '';
    width: 0px;
    height: 0px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #fdfdfd transparent;
    display: inline-block;
    position: absolute;
    margin-top: -16px;
    margin-left: 4px;
}

.content-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 20px 20px 20px;
    font-size: 16px;
}
.content-box a {
    width: 200px;
    text-decoration: none;
}
.content-box p {
    text-align: left;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 0px;
    padding-bottom: 10px;
    color: black;
    border-bottom: #f1f1f1 1px solid;
}
.content-box p::after {
    content: '发来一条私信';
    margin-left: 15px;
    color: #c9c5c5;
}

.reply {
    text-align: left;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 0px;
    padding-bottom: 10px;
    color: black;
    border-bottom: #f1f1f1 1px solid;
}
.reply::after {
    content: '' !important;
}
.reply strong {
    margin-top: -1px;
    margin-left: 0.5em;
    margin-right: 0.5em;
    font-size: 16px;
    font-weight: normal;
    color: #c9c5c5;
}
</style>
