<template>
    <div class="result">
        <div class="reUser">
            <span class="circle"></span>
            <div class="content">
                <img src="icons/user.1.svg" class="icon" />
                <img src="icons/user.1.svg" class="portrait" />
                <div class="words">
                    <p>
                        <a href="#" class="name">名字</a>
                        <em>|&nbsp;&nbsp;&nbsp;&nbsp;学院年级</em>
                    </p>
                    <p class="selfdescription">签名</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({})
export default class ResultUser extends Vue {}
</script>

<style scoped>
.result {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    padding-top: 20px;
    border-left: #f1f1f1 6px solid;
}

.reUser {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 30px;
}

.circle {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    margin-left: -9px;
    margin-right: 30px;
    background-color: #c9c5c5;
}

.content {
    height: 129px;
    background-color: #fafafa;
    flex-grow: 2;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
}
.content > * {
    margin-top: 30px;
}

.icon {
    width: 24px;
    height: 21px;
    margin-right: 30px;
    margin-left: 40px;
}

.portrait {
    width: 73px;
    height: 73px;
    border-radius: 70px;
}

.words {
    display: flex;
    flex-direction: column;
}
.words p {
    margin-left: 30px;
    margin-top: 3px;
    display: flex;
    align-items: center;
}

.name {
    text-decoration: none;
    font-size: 20px;
    color: black;
    margin-right: 20px;
}
em {
    color: #c9c5c5;
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
}

.selfdescription {
    color: #878787;
    font-size: 16px;
}
</style>
