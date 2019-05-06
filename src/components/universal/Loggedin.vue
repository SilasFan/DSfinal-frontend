<template>
    <div class="loggedin">
        <ul>
            <li>
                <img src="/icons/message.svg" id="message" @click="showMessage" />
                <div class="message-content" v-if="ShowMessage">
                    <div class="content-box">
                        <router-link to="/home/letters"><p>23333</p></router-link>
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
            <li>
                <div class="userinfo" @click="showUserMenu">
                    <img src="/icons/user.1.svg" />
                    <p>userName</p>
                </div>
                <div class="message-content" id="userinfo" v-if="ShowUserMenu">
                    <div>
                        <router-link to="/home/user"><img src="/icons/user.svg" />我的主页</router-link>
                        <router-link to="/home/mysetting"><img src="/icons/setting.svg" />账号设置</router-link>
                        <a href="#" @click="LogOut"><img src="/icons/logout.svg" />退出登录</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Watch } from 'vue-property-decorator';
import { State, Getter, Mutation, namespace } from 'vuex-class';
import LogoutFunc from '@/scripts/login/Logout';
import { getInfo } from '@/scripts/login/Login';

@Component({})
export default class Loggedin extends Vue {
    @State public CurrentUser!: string;
    @Mutation public logout: any;
    @Mutation public setNickName: any;

    @Provide() public ShowMessage: boolean = false;
    @Provide() public ShowNotification: boolean = false;
    @Provide() private ShowUserMenu: boolean = false;
    @Provide() private headUrl: string = '';

    @State private token!: string;

    public showMessage() {
        this.ShowMessage = !this.ShowMessage;
        this.ShowNotification = false;
        this.ShowUserMenu = false;
    }
    public showNotification() {
        this.ShowNotification = !this.ShowNotification;
        this.ShowMessage = false;
        this.ShowUserMenu = false;
    }
    public showUserMenu() {
        this.ShowUserMenu = !this.ShowUserMenu;
        this.ShowMessage = this.ShowNotification = false;
    }

    public LogOut() {
        LogoutFunc(this.token).then(res => {
            if (res.msg) {
                alert(res.msg);
            } else if (res.ok) {
                this.logout();
            }
        });
    }

    // 获取nickname和imageurl
    // TODO:这里没有处理imgurl，等api弄好了再写
    public getNickname() {
        console.log(this.token);
        getInfo(this.token).then(res => {
            if (res.msg) {
                console.log(res.msg);
            } else {
                console.log(res);
                this.setNickName(res.username);
            }
        });
    }

    // TODO:不知道为什么老是登录过期，待修复
    @Watch('CurrentUser', { immediate: true, deep: true })
    public onChange() {
        setTimeout(this.getNickname, 1000);
    }
}
</script>

<style scoped>
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
    margin-top: 13.5px;
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
    font-size: 16px;
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
    background-color: white !important;
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

.userinfo {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.userinfo img {
    width: 40px;
    height: 40px;
    margin-left: 5px;
    border-radius: 50%;
    margin-top: 4px;
}
.userinfo p {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 2px;
    font-size: 20px;
}

#userinfo {
    width: 140px;
    margin-left: -55px;
    margin-top: 15px;
}
#userinfo div {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}
#userinfo a {
    margin-top: 20px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #878787 !important;
    background-color: white !important;
}
#userinfo a img {
    margin: 0px;
    margin-right: 5px;
}
</style>
