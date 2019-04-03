<template>
    <div class="main-content">
        <h2>今日头条</h2>
        <span></span>
        <h2>最新动态</h2>
        <div class="news">
            <News v-for="New in news" :key="New.title" v-bind:anews="New" />
        </div>
    </div>
</template>

<script  lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import News from "./news.vue";

interface New {
    title: string;
    post_user: string;
    post_date: Date;
    hot: number;
}

@Component({
    components: {
        News
    }
})
export default class Content extends Vue {
    @Provide() public news: New[] = [
        {
            title: "test111",
            post_user: "silas",
            post_date: new Date(9102, 10, 11, 10, 28),
            hot: 120
        }
    ];
}
</script>

<style scoped>
.main-content {
    padding: 40px;
    padding-right: 10%;
    padding-left: 5%;
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: left;
}

.main-content h2 {
    padding-bottom: 15px;
    box-shadow: #d8d8d852 0px 3px 0px;
}

span {
    width: 200px;
    height: 400px;
    background-color: aqua;
    align-self: center;
}
</style>