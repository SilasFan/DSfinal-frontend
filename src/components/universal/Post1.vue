<template>
    <div class="post">
        <h3>{{ title }}</h3>
        <Storey :author="author" :content="content" :louzhu="author.username" :date="GetTime(createTime)" />
        <Storey v-for="(comment, index) in comments" :key="index" :author="comment.author" :content="comment.content.items" :louzhu="author.username" :date="GetTime(comment.creationTime)" />
        <CommentEditor :category="category" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import Storey from '@/components/universal/Storey.vue';
import CommentEditor from '@/components/universal/CommentEditor.vue';
import GetSingleHotFunc from '@/scripts/hot/GetSinglePost';
import GetSingleEntertainmentFunc from '@/scripts/entertainment/GetSinglePost';

@Component({
    components: {
        Storey,
        CommentEditor,
    },
})
export default class Post1 extends Vue {
    @Provide() public title: string = '';
    @Provide() public content: any = {};
    @Provide() public author: any = {};
    @Provide() public createTime: number = 0;
    @Provide() public comments: any = [];

    get postId() {
        return this.$route.params.postId;
    }

    get category() {
        return this.$attrs.category;
    }

    public GetContent() {
        if (this.category === 'hot') {
            GetSingleHotFunc(this.postId).then(res => {
                console.log(res);
                this.title = res.title;
                this.content = res.content.items;
                this.author = res.author;
                this.createTime = res.createTime;
                this.comments = res.allComments.comments;
            });
        } else if (this.category === 'entertainment') {
            GetSingleEntertainmentFunc(this.postId).then(res => {
                console.log(res);
                this.title = res.title;
                this.content = res.content.items;
                this.author = res.author;
                this.createTime = res.createTime;
                this.comments = res.allComments.comments;
            });
        }
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
