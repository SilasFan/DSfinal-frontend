<template>
    <div class="toutiao">
        <h3>{{ toutiao.title }}</h3>
        <img :src="touTiaoURL" />
        <div class="article">
            <div v-for="(item, index) in toutiao.content.items" :key="index">
                <img v-if="item.url" :src="PATH_IMG + item.url" />
                <p v-if="item.text">{{ item.text }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import GetNewsFunc from '@/scripts/main/News';

@Component({})
export default class Toutiao extends Vue {
    @Provide() public toutiao: any = {};
    @Provide() public PATH_IMG = 'http://localhost:4000';

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
        this.getNews();
    }
}
</script>

<style scoped>
.toutiao {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    padding-left: 5%;
    padding-right: 5%;
    overflow-y: auto;
}

img {
    align-self: center;
}

h3 {
    padding: 20px 0px 20px 20px;
    margin-bottom: 40px;
    margin-top: 50px;
    background-color: #fafafa;
    text-align: left;
}

.article {
    font-size: 18px;
    width: 98%;
    margin-left: 20px;
    margin-top: 30px;
    margin-bottom: 20px;
}
.article img {
    max-width: 90%;
}
.article p {
    text-align: left;
    text-indent: 2em;
}
</style>
