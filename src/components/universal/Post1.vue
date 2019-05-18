<template>
    <div class="post">
        <h3>{{ title }}</h3>
        <Storey :author="author" :content="content" :louzhu="author.username" :date="GetTime(createTime)" />
        <Storey v-for="(comment, index) in comments" :key="index" :author="comment.author" :content="comment.content.items" :louzhu="author.username" :date="GetTime(comment.creationTime)" :cmmid="comment.id" v-on:delete="GetContent"/>

        <div class="page-divide" v-if="PageCounts !== 1">
            <a v-if="currentPage !== 1" @click="LastPage">&lt;</a>
            <a v-if="currentPage !== 1" @click="SetPage(1)">1</a>
            <a v-if="currentPage > 2">...</a>
            <a class="currentpage">{{ currentPage }}</a>
            <a v-if="currentPage < PageCounts - 1">...</a>
            <a v-if="currentPage !== PageCounts" @click="SetPage(PageCounts)">{{ PageCounts }}</a>
            <a v-if="currentPage !== PageCounts" @click="NextPage">&gt;</a>
        </div>

        <CommentEditor :category="category" v-on:aftercomment="GetContent" />
    </div>
</template>

<script lang="ts">
  import {Component, Vue, Provide, Watch} from 'vue-property-decorator';
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
    @Provide() public totalCount: number = 0;
    @Provide() public currentPage: number = 1;


    get postId() {
          return this.$route.params.postId;
      }

    public LastPage() {
      this.currentPage -= 1;
    }
    public NextPage() {
      this.currentPage += 1;
    }
    public SetPage(page: number) {
      this.currentPage = page;
    }

    get category() {
        return this.$attrs.category;
    }

    get PageCounts() {
      const a = (this.totalCount - (this.totalCount % 10)) / 10;
      if (this.totalCount % 10 === 0) {
        return a;
      } else {
        return a + 1;
      }
    }

    // 监听page改变
    @Watch('currentPage')
    public pageChange() {
      if (this.category === 'hot') {
        GetSingleHotFunc(this.postId, (this.currentPage - 1) * 10, 10).then(res => {
          console.log(res);
          this.title = res.title;
          this.content = res.content.items;
          this.author = res.author;
          this.createTime = res.createTime;
          this.comments = res.allComments.comments;
          this.totalCount = res.totalCount;
        });
      }
      if (this.category === 'entertainment') {
        GetSingleEntertainmentFunc(this.postId, (this.currentPage - 1) * 10, 10).then(res => {
          console.log(res);
          this.title = res.title;
          this.content = res.content.items;
          this.author = res.author;
          this.createTime = res.createTime;
          this.comments = res.allComments.comments;
          this.totalCount = res.totalCount;
        });
      }
    }


    public GetContent() {
        if (this.category === 'hot') {
            GetSingleHotFunc(this.postId, 0, 10).then(res => {
                console.log(res);
                this.title = res.title;
                this.content = res.content.items;
                this.author = res.author;
                this.createTime = res.createTime;
                this.comments = res.allComments.comments;
            });
        } else if (this.category === 'entertainment') {
          // FIXME: 分页
            GetSingleEntertainmentFunc(this.postId, 0, 10).then(res => {
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


th {
    padding-bottom: 20px;
}

td {
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: #dfdfdf 2px solid;
    border-bottom: #dfdfdf 2px solid;
}

.page-divide {
    display: flex;
    margin-top: 60px;
    justify-content: center;
}
.page-divide a {
    text-decoration: none;
    color: #878787;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
}
.currentpage {
    color: black !important;
    text-decoration: underline black !important;
}
</style>
