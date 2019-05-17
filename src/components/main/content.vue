<template>
    <div class="main-content">
        <h2>今日头条</h2>
        <img src="icons/user.svg" />
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

@Component({
    components: {
        News,
    },
})
export default class Content extends Vue {
    @Provide() public latest: any = [];

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

    public beforeMount() {
        this.getLatest();
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

span {
    width: 200px;
    height: 400px;
    background-color: aqua;
    align-self: center;
}
</style>
