<template>
    <div class="user-info">
        <h2>个人信息</h2>
        <div class="info-form">
            <div class="info1">
                <span>
                    <p>头像</p>
                    <img src="/icons/user.svg" />
                </span>
                <span>
                    <p>用户名</p>
                    <input type="text" placeholder="username" />
                </span>
            </div>
            <div class="info2">
                <span>
                    <p>性别</p>
                    <select>
                        <option disabled value="">请选择</option>
                        <option>男</option>
                        <option>女</option>
                        <option>保密</option>
                    </select>
                </span>
                <span>
                    <p>年级</p>
                    <select>
                        <option disabled value="">请选择</option>
                    </select>
                </span>
                <span>
                    <p>学院</p>
                    <select>
                        <option disabled value="">请选择</option>
                    </select>
                </span>
                <span>
                    <p>专业</p>
                    <select>
                        <option disabled value="">请选择</option>
                    </select>
                </span>
            </div>
            <div class="info3">
                <span>
                    <p>个人简介</p>
                    <input type="text" placeholder="username" style="margin-left:calc(20% - 20px)" />
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({})
export default class UserInfo extends Vue {}
</script>

<style scoped>
.user-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 50px;
}

h2 {
    margin-top: 40px;
    padding: 5px 0px 5px 20px;
    border-left: #9a9a9a 2px solid;
    text-align: left;
}

span {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    border-bottom: #c9c5c5 2px solid;
    padding-bottom: 10px;
    margin-top: 20px;
}
span img {
    width: 80px;
    height: 80px;
    align-self: flex-end;
    border-radius: 50%;
    margin-left: auto;
    margin-right: 20px;
}

p {
    color: #696969;
    text-align: left;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.info-form {
    margin-top: 40px;
    padding: 10px 40px 10px 40px;
    width: 78%;
    box-shadow: #0000002d 0px 0px 8px;
}

.info1 {
    display: flex;
    flex-direction: column;
}
.info2 {
    margin-top: 130px;
}
.info3 {
    margin-top: 100px;
    margin-bottom: 30px;
}

input {
    border: none;
    outline: none;
    margin-left: 20%;
    margin-right: 30%;
    font-size: 20px;
    flex-grow: 2;
}

select {
    border: none;
    outline: none;
    margin-left: calc(20% + 20px);
    font-size: 20px;
    flex-grow: 2;
}
</style>
