<template>
    <div class="result">
        <div class="rePost">
            <span class="circle"></span>
            <p class="date">2019-3-23</p>
            <div class="content">
                <p>
                    <img src="/icons/write.svg" class="icon" />
                    <a href="#" class="title">中文</a>
                    <em>|&nbsp;&nbsp;&nbsp;&nbsp;英文</em>
                </p>
                <a href="#" class="user">doooris</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({})
export default class Result extends Vue {}
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

.rePost {
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

.date {
    margin: 0px;
    color: #878787;
    font-size: 16px;
    padding-right: 20px;
}

.content {
    height: 129px;
    background-color: #fafafa;
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.content p:first-of-type {
    margin-left: 30px;
    display: flex;
    align-items: center;
}

.icon {
    color: #c9c5c5;
    width: 24px;
    height: 21px;
    margin-right: 30px;
    margin-top: -10px;
}

.title {
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

.user {
    text-decoration: none;
    color: #c9c5c5;
    font-size: 16px;
    margin-left: 84px;
}
</style>
