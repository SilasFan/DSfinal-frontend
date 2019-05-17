<template>
    <div class="login">
        <div class="close" v-on:click="close()">
            <img src="icons/close.svg" />
        </div>
        <div class="login-astronaut">
            <img src="icons/astronauts.svg" />
        </div>
        <p>scut<strong>bbs</strong></p>
        <div class="login-form">
            <div class="login-form-input">
                <br />
                <br />
                <p>账号</p>
                <div class="input">
                    <img src="icons/user.svg" style="width:16px;height:16px;" />
                    <input type="text" placeholder="请输入邮箱" v-model="primitiveUsername" />
                    <span>@mail.scut.edu.cn</span>
                </div>
                <br />
                <p>密码</p>
                <div class="input">
                    <img src="icons/password.svg" style="width:16px" />
                    <input type="password" placeholder="请输入密码" v-model="PreLogin.password" />
                </div>
                <br />
                <br />
                <br />
                <button @click="login">登录</button>
                <br />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import { State, Getter, Mutation, namespace } from 'vuex-class';
import VueRouter from 'vue-router';
import { LoginFunc } from '@/scripts/login/Login';
import LogoutFunc from '@/scripts/login/Logout';
Vue.use(VueRouter);

interface LoginInput {
    username: string;
    password: string;
}

@Component({})
export default class Login extends Vue {
    // data
    @Provide() public PreLogin: LoginInput = {
        username: '',
        password: '',
    };
    @Provide() public primitiveUsername: string = '';

    @Mutation public setToken: any;
    @Mutation public setCurrentUser: any;

    // methods
    private close(): void {
        this.$router.go(-1);
    }

    private login(): void {
        this.PreLogin.username = this.primitiveUsername + '@mail.scut.edu.cn';
        LoginFunc(this.PreLogin).then(res => {
            if (res.msg) {
                alert(res.msg);
            }
            if (res.token) {
                this.setToken(res.token);
                this.setCurrentUser(this.PreLogin.username);
                this.$router.go(-1);
            }
        });
    }
}
</script>

<style scoped>
.login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;

    background-color: #f2f2f2;
}
.login p,
strong {
    font-size: 20px;
}

.login-astronaut {
    width: 70px;
    height: 70px;
    margin-top: 3%;
    margin-bottom: 10px;
    background-repeat: no-repeat;
    align-self: center;
    flex-shrink: 0;
}

.login-form {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: column;

    width: 500px;
    align-self: center;
    border-radius: 10px;
    margin-top: 50px;
    background-color: #ffffff;
    box-shadow: rgba(128, 128, 128, 0.363) 0px 0px 3px;
}

.login-form-input {
    align-self: center;
    width: 80%;
}
.login-form-input p {
    text-align: left;
    font-size: 16px;
    margin-bottom: 10px;
}
.login-form-input button {
    width: 100%;
    font-size: 17px;
    background-color: black;
    color: white;
    padding: 10px 15px 10px 15px;
    margin-bottom: 50px;
    border-radius: 6px;
    border: black 1px solid;
    box-shadow: rgba(128, 128, 128, 0.918) 0px 3px 5px;
    cursor: pointer;
}

.input {
    display: flex;
    align-items: stretch;

    padding: 8px 15px 8px 15px;
    border: 1px #e5e5e5 solid;
    border-radius: 10px;
    box-shadow: rgba(128, 128, 128, 0.363) 0px 0px 5px;
}
.input > * {
    font-size: 16px;
}
.input input {
    flex-grow: 2;
    border: none;
    margin-left: 20px;
    margin-right: 3px;
    padding: 0px;
    outline: none;
    height: auto;
}
.input span {
    align-self: flex-end;
}
.input img {
    width: 16px;
    height: 16px;
    margin-top: 2px;
}

.close {
    background-repeat: no-repeat;
    position: fixed;
    right: 20px;
    top: 15px;
    width: 20px;
    height: 30px;
    cursor: pointer;
}
</style>
