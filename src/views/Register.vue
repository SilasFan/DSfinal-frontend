<template>
    <div class="register">
        <div class="close" v-on:click="close()">
            <img src="icons/close.svg" />
        </div>
        <div class="register-astronaut">
            <img src="icons/astronauts.svg" />
        </div>
        <p>
            scut
            <strong>bbs</strong>
        </p>
        <div class="register-form">
            <div class="register-form-input">
                <br />
                <p><strong style="color:red">*</strong>&nbsp;&nbsp;注册账号</p>
                <div class="input">
                    <input type="text" placeholder="请输入邮箱" v-model="primitiveUsername" />
                    <span>@mail.scut.edu.cn</span>
                </div>
                <br />
                <p><strong style="color:red">*</strong>&nbsp;&nbsp;用户名</p>
                <div class="input">
                    <input type="text" placeholder="请输入用户名" v-model="PreRegister.nickname" />
                </div>
                <br />
                <p><strong style="color:red">*</strong>&nbsp;&nbsp;设置密码</p>
                <div class="input">
                    <input type="password" placeholder="请输入密码" v-model="PreRegister.password" />
                </div>
                <br />
                <p><strong style="color:red">*</strong>&nbsp;&nbsp;确认密码</p>
                <div class="input">
                    <input type="password" placeholder="请再次输入密码" v-model="RepeatPasswd" />
                </div>
                <br />
                <br />
                <button @click="signup">注册</button>
                <br />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import SingUpFunc from '@/scripts/register/Register';

interface SignUPInput {
    username: string;
    password: string;
    nickname: string;
}

@Component({})
export default class Register extends Vue {
    // data
    @Provide() public PreRegister: SignUPInput = {
        username: '',
        password: '',
        nickname: '',
    };

    @Provide() public RepeatPasswd: string = '';
    @Provide() public primitiveUsername: string = '';

    public close(): void {
        this.$router.go(-1);
    }

    private signup(): void {
        this.PreRegister.username = this.primitiveUsername + '@mail.scut.edu.cn';
        if (this.PreRegister.password !== this.RepeatPasswd) {
            alert('两次输入密码不一致!');
        }
        SingUpFunc(this.PreRegister).then(res => {
            if (res.token) {
                alert('注册成功!');
                this.$router.go(-1);
            } else if (res.msg) {
                alert(res.msg);
            }
        });
    }
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
    margin-right: 3px;
    padding: 0px;
    outline: none;
}
.input span {
    align-self: flex-end;
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
