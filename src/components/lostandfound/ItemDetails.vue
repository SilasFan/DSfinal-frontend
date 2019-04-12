<template>
    <div class="details">
        <h2>物品详情</h2>
        <div class="content">
            <div class="image">
                <img src="/icons/user.svg" />
            </div>
            <div class="words">
                <h3>title</h3>
                <p><img src="/icons/location.svg" />location</p>
                <p><img src="/icons/information.svg" />user</p>
                <p>是一张从广州开往新疆的蓝色磁质火车票，时间是2019年4月20日</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({})
export default class ItemDetails extends Vue {}
</script>

<style scoped>
.details {
    width: 100%;
    height: 100%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

h2 {
    margin-top: 50px;
    padding: 5px 0px 5px 20px;
    border-left: #9a9a9a 2px solid;
    text-align: left;
}

.content {
    width: 93%;
    max-width: 1024px;
    margin-top: 5%;
    margin-right: 100px;
    display: flex;
    text-align: left;
}
.image {
    width: 300px;
    height: 400px;
    flex-shrink: 0;
}
.words {
    margin-left: 160px;
}
.words img {
    width: 16px;
    height: 16px;
    margin-right: 3px;
}
.words p {
    display: flex;
    font-weight: bold;
}
.words p:last-of-type {
    margin-top: 2em;
}
h3 {
    font-size: 26px;
    margin-bottom: 2em;
}
</style>
