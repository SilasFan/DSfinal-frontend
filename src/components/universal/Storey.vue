<template>
    <div class="storey">
        <div class="user">
            <img :src="PATH_IMG + (author.pictureURL === null ? '/content/00000032.png' : author.pictureURL)" />
            <div class="info">
                <p>{{ author.username }}</p>
                <p>{{ author.introduction }}</p>
            </div>
            <p class="main" v-if="author.username === louzhu">楼主</p>
        </div>
        <div class="article" :id="date">
            <div v-for="(items, index) in content" :key="index">
                <img v-if="items.url" :src="PATH_IMG + items.url" />
                <p v-if="items.text">{{ items.text }}</p>
            </div>
        </div>
        <div class="bottombar">
            <a>删除</a>
            <p>{{ date }}</p>
            <a href="#">回复</a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
import { State, Getter, Mutation, namespace } from 'vuex-class';

@Component({})
export default class Storey extends Vue {
    @Prop() public author!: any;
    @Prop() public content!: any;
    @Prop() public louzhu!: string;
    @Prop() public date!: string;
    @Provide() public PATH_IMG = 'http://localhost:4000';
    @State public CurrentUser!: any;

    public RenderContent() {
        const article = document.getElementById(this.date);
    }

    private mounted() {
        this.RenderContent();
    }
}
</script>

<style scoped>
.storey {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    margin-bottom: 30px;
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
.article img {
    max-width: 90%;
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
