<template>
    <div class="main-content">
        <h2>今日头条</h2>
        <img :src="touTiaoURL" />
        <router-link to="/home/news">{{ toutiao.title }}</router-link>
        <h2>最新动态</h2>
        <div class="news">
            <News v-for="(New, index) in latest" :key="index" :anews="New" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import News from './news.vue';
import { getLatestFunc } from '@/scripts/main/Latest';
import GetNewsFunc from '@/scripts/main/News';

@Component({
    components: {
        News,
    },
})
export default class Content extends Vue {
    @Provide() public latest: any = [];
    @Provide() public toutiao: any = {};

    public getLatest() {
        const This = this;
        getLatestFunc().then(res => {
            if (res.msg) {
                console.log(res.msg);
            } else {
                this.latest = res.latests;
                console.log(res);
            }
        });
    }

    public getNews() {
        GetNewsFunc().then(res => {
            if (res.msg) {
                console.log(res.msg);
            } else {
                console.log(res);
                this.toutiao = res.newss[0];
            }
        });
    }

    get touTiaoURL() {
        return 'http://localhost:4000' + this.toutiao.pictureURL;
    }

    public beforeMount() {
        this.getLatest();
        this.getNews();
    }
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

.news {
    margin-bottom: 40px;
}

img {
    width: 200px;
    height: 200px;
    align-self: center;
}
a {
    align-self: center;
    text-decoration: none;
    color: white;
    background-color: rgba(0, 0, 0, 0.507);
    width: 100%;
    text-align: center;
    padding: 8px 0px 8px 0px;
}
</style>
