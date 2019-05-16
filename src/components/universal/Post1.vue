<template>
    <div class="post">
        <h3>{{ title }}</h3>
        <Storey :author="author" :content="content" :louzhu="author.username" :date="GetTime(createTime)" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import Storey from '@/components/universal/Storey.vue';
import GetSingleHotFunc from '@/scripts/hot/GetSinglePost';

@Component({
    components: {
        Storey,
    },
})
export default class Post1 extends Vue {
    @Provide() public title: string = '';
    @Provide() public content: any = {};
    @Provide() public author: any = {};
    @Provide() public createTime: number = 0;

    get postId() {
        return this.$route.params.postId;
    }

    get category() {
        return this.$attrs.category;
    }

    public GetContent() {
        GetSingleHotFunc(this.postId).then(res => {
            console.log(res);
            this.title = res.title;
            this.content = res.content.items;
            this.author = res.author;
            this.createTime = res.createTime;
        });
    }

    public GetTime(time: number) {
        const date = new Date(time);
        return `${date.getMonth() + 1}-${date.getDate()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
    }

    private beforeMount() {
        this.GetContent();
    }
}
</script>

<style scoped>
.post {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
}

h3 {
    padding: 20px 0px 20px 20px;
    margin-bottom: 40px;
    background-color: #fafafa;
}
</style>
