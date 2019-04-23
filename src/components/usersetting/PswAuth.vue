<template>
    <div class="login-form-input">
        <h2>身份验证</h2>
        <p style="text-align:center">为保障您的账户安全，修改前请先进行身份验证</p>
        <br />
        <br />
        <br />
        <br />
        <p style="text-align:center">201730612499@mail.scut.edu.cn</p>
        <br />
        <br />
        <div class="input">
            <img src="/icons/password.svg" style="width:16px" />
            <input type="password" placeholder="请输入原密码" />
        </div>
        <br />
        <br />
        <br />
        <button @click="succeed">下一步</button>
        <br />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({})
export default class PswAuth extends Vue {
    public succeed(): void {
        this.$emit('auth-succeed');
    }
}
</script>

<style scoped>
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
</style>
