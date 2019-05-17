<template>
    <div class="postForm">
        <p>总帖数：{{ totalCount }}</p>

        <table>
            <tr>
                <th></th>
                <th><img src="icons/user.svg" /></th>
                <th><img src="icons/comment.svg" /></th>
                <th><img src="icons/hot2.svg" /></th>
                <th><img src="icons/clock.svg" /></th>
            </tr>
            <tr v-for="post in posts" :key="post.id" class="fcontent">
                <td class="grow">
                    <router-link v-bind:to="'/home/' + Category + '/' + post.id">{{ post.title }}</router-link>
                </td>
                <td class="formCon">{{ post.author.username }}</td>
                <td class="formCon">{{ post.latestCommenter.username }}</td>
                <td class="formCon">{{ post.heat }}</td>
                <td class="formCon">
                    {{ PostTime(TimeTrans(post.latestActiveTime)) }}
                </td>
            </tr>
        </table>

        <div class="page-divide" v-if="PageCounts !== 1">
            <a v-if="currentPage !== 1" @click="LastPage">&lt;</a>
            <a v-for="page in PageArray" :key="page" @click="SetPage(page)" :class="{ currentpage: page === currentPage }">{{ page }}</a>
            <a v-if="currentPage !== PageCounts" @click="NextPage">&gt;</a>
        </div>

        <div class="editor-father">
            <PostEditor :category="Category" v-on:afterpost="pageChange" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Watch } from 'vue-property-decorator';
import GetHotFunc from '@/scripts/hot/AllHot';
import GetEntertainmentFunc from '@/scripts/entertainment/AllEntertainment';
import PostEditor from './PostEditor.vue';

@Component({
    components: {
        PostEditor,
    },
})
export default class PostForm extends Vue {
    @Provide() public posts: any = [];
    @Provide() public totalCount: number = 0;
    @Provide() public currentPage: number = 1;

    public PostTime(postTime: Date): string {
        const time = `${postTime.getMonth() + 1}-${postTime.getDate()} ${postTime.getHours() < 10 ? '0' + postTime.getHours() : postTime.getHours()}:${
            postTime.getMinutes() < 10 ? '0' + postTime.getMinutes() : postTime.getMinutes()
        }`;
        return time;
    }

    public TimeTrans(time: number) {
        return new Date(time);
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

    get Category() {
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

    get PageArray() {
        const arr: number[] = [];
        for (let i = 1; i <= this.PageCounts; i++) {
            arr.push(i);
        }
        return arr;
    }

    // 监听page改变
    @Watch('currentPage')
    public pageChange() {
        if (this.Category === 'hot') {
            this.allHot((this.currentPage - 1) * 10);
        }
        if (this.Category === 'entertainment') {
            this.allEntertainment((this.currentPage - 1) * 10);
        }
    }

    public beforeMount() {
        if (this.Category === 'hot') {
            this.allHot(0);
        }
        if (this.Category === 'entertainment') {
            this.allEntertainment(0);
        }
    }

    private allHot(skip: number) {
        GetHotFunc(skip, 10, 'ActiveTimeDes').then(res => {
            if (res.msg) {
                alert('network error!');
            } else {
                console.log(res);
                this.posts = res.schoolHeats;
                this.totalCount = res.totalCount;
            }
        });
    }

    private allEntertainment(skip: number) {
        GetEntertainmentFunc(skip, 10, 'ActiveTimeDes').then(res => {
            if (res.msg) {
                alert('network error!');
            } else {
                console.log(res);
                this.posts = res.entertainments;
                this.totalCount = res.totalCount;
            }
        });
    }
}
</script>

<style scoped>
.postForm {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    width: 97%;
}
.postForm img {
    height: 20px;
    width: 20px;
}
.postForm table {
    width: 100%;
    text-align: center;
    margin-right: 50px;
    border-collapse: collapse;
}
.postForm p {
    color: #c9c5c5;
    margin-bottom: 30px;
}

.grow {
    text-align: left;
}
.grow a {
    text-decoration: none;
    font-size: 20px;
    color: black;
}

.formCon {
    color: #878787;
    font-size: 20px;
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

.editor-father {
    margin-top: 80px;
}
</style>
