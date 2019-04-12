<template>
    <div class="result">
        <h2>讲座动态</h2>
        <div class="lectures">
            <span class="circle"></span>
            <p class="date">2019-3-23 19:00</p>
            <div class="content">
                <p>讲座标题</p>
                <p>主讲人</p>
                <p>地点：</p>
                <p>备注：</p>
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
    max-width: 900px;
    height: max-content;
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    margin-top: 150px;
    margin-bottom: 50px;
    border-left: #f1f1f1 6px solid;
}
.result h2 {
    text-align: left;
    padding: 5px 0px 5px 20px;
    margin-top: -100px;
    margin-bottom: 100px;
    border-left: #9a9a9a 2px solid;
}

.lectures {
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
    height: 186px;
    max-width: 700px;
    background-color: #fafafa;
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.content p:first-of-type {
    margin-left: 30px;
    margin-bottom: 15px;
    font-size: 20px;
    color: black;
    display: flex;
    align-items: center;
}
.content p {
    margin: 5px 0px 5px 30px;
    color: #878787;
}
</style>
