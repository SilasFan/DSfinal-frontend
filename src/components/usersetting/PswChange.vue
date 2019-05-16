<template>
    <div class="pswchange">
        <h2>请输入新密码</h2>
        <p>新密码</p>
        <div class="input">
            <img src="icons/password.svg" style="width:16px" />
            <input type="password" placeholder="请输入新密码" />
        </div>
        <p>确认新密码</p>
        <div class="input">
            <img src="icons/password.svg" style="width:16px" />
            <input type="password" placeholder="请确认新密码" />
        </div>
        <button>提交</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({})
export default class PswChange extends Vue {}
</script>

<style scoped>
.pswchange {
    align-self: center;
    width: 80%;
}
.pswchange p {
    margin-top: 30px;
    text-align: left;
    font-size: 16px;
    margin-bottom: 10px;
}
.pswchange button {
    width: 100%;
    font-size: 17px;
    background-color: black;
    color: white;
    padding: 10px 15px 10px 15px;
    margin-bottom: 50px;
    margin-top: 50px;
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
.input img {
    width: 16px;
    height: 16px;
    margin-top: 2px;
}
</style>
