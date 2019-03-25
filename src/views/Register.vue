<template>
    <div class="register">
        <div class="close"></div>
        <div class="register-astronaut"></div>
        <p>
            scut
            <strong>bbs</strong>
        </p>
        <div class="register-form">
            <div class="register-form-input">
                <br />
                <p><strong style="color:red">*</strong>&nbsp;&nbsp;注册账号</p>
                <div class="input">
                    <input type="text" placeholder="请输入邮箱" />
                    <span>@mail.scut.edu.cn</span>
                </div>
                <br />
                <p><strong style="color:red">*</strong>&nbsp;&nbsp;用户名</p>
                <div class="input">
                    <input type="text" placeholder="请输入用户名" />
                </div>
                <br />
                <p><strong style="color:red">*</strong>&nbsp;&nbsp;设置密码</p>
                <div class="input">
                    <input type="text" placeholder="请输入密码" />
                </div>
                <br />
                <p><strong style="color:red">*</strong>&nbsp;&nbsp;确认密码</p>
                <div class="input">
                    <input type="password" placeholder="请再次输入密码" />
                </div>
                <br />
                <br />
                <button>登录</button>
                <br />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

interface User {
    id: string;
    password: string;
    name: string;
}

@Component
export default class Register extends Vue {
    //data
    @Provide() pre_register: User = {
        id: "",
        password: "",
        name: ""
    };

    @Provide() RepeatPasswd: string = "";
}
</script>

<style scoped>
.register {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;

    background-color: #f2f2f2;
    overflow-x: auto;
}
.register p,
strong {
    font-size: 20px;
}

.register-astronaut {
    width: 70px;
    height: 70px;
    margin-top: 3%;
    margin-bottom: 10px;
    background-image: url("/icons/astronauts.svg");
    background-repeat: no-repeat;
    align-self: center;
    flex-shrink: 0;
}

.register-form {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: column;

    width: 470px;
    align-self: center;
    border-radius: 10px;
    margin-top: 10px;
    background-color: #ffffff;
    box-shadow: rgba(128, 128, 128, 0.363) 0px 0px 3px;
}

.register-form-input {
    align-self: center;
    width: 80%;
}
.register-form-input p {
    text-align: left;
    font-size: 16px;
    margin-bottom: 10px;
}
.register-form-input button {
    width: 100%;
    font-size: 17px;
    background-color: black;
    color: white;
    padding: 10px 15px 10px 15px;
    margin-bottom: 50px;
    border-radius: 6px;
    border: black 1px solid;
    box-shadow: rgba(128, 128, 128, 0.918) 0px 3px 5px;
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
    margin-right: 3px;
    padding: 0px;
}
.input span {
    align-self: flex-end;
}

.close {
    background-image: url("/icons/close.svg");
    background-repeat: no-repeat;
    position: fixed;
    right: 20px;
    top: 15px;
    width: 20px;
    height: 30px;
    cursor: pointer;
}
</style>