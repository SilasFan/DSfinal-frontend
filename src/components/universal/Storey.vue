<template>
    <div class="storey">
        <div class="user">
            <img src="/icons/user.svg" />
            <div class="info">
                <p>user</p>
                <p>sign</p>
            </div>
            <p class="main">louzhu</p>
        </div>
        <div class="article">
            <p>我觉得不行</p>
        </div>
        <div class="bottombar">
            <a href="#">删除</a>
            <p>date</p>
            <a href="#">回复</a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({})
export default class Storey extends Vue {}
</script>

<style scoped>
.storey {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    border-bottom: #dfdfdf 2px solid;
}

.user {
    height: 70px;
    width: max-content;
    display: flex;
    align-items: center;
    font-size: 18px;
    background-color: #fafafa;
    border-radius: 35px;
}
.user img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}

.main {
    color: #1492e6;
    font-size: 14px;
    margin-right: 30px;
}

.info {
    margin-left: 20px;
    margin-right: 90px;
}
.info p:first-of-type {
    font-weight: bold;
    margin-bottom: 8px;
}
.info p:last-of-type {
    margin-top: 8px;
    color: #878787;
}

.article {
    font-size: 18px;
    width: 85%;
    margin-left: 90px;
    margin-top: 30px;
    margin-bottom: 20px;
}

.bottombar {
    display: flex;
    align-self: flex-end;
    align-items: baseline;
}
.bottombar p {
    margin: 0px 40px 0px 50px;
    color: #c9c5c5;
}
.bottombar a {
    text-decoration: none;
    color: #878787;
}
</style>
