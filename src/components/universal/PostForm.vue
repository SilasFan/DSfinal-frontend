<template>
    <div class="postForm">
        <table>
            <tr>
                <th></th>
                <th><img src="/icons/user.svg" /></th>
                <th><img src="/icons/comment.svg" /></th>
                <th><img src="/icons/hot2.svg" /></th>
                <th><img src="/icons/clock.svg" /></th>
            </tr>
            <tr v-for="post in posts" :key="post.post_url" class="fcontent">
                <td class="grow">
                    <router-link v-bind:to="'/home' + Category + post.post_url">{{ post.title }}</router-link>
                </td>
                <td class="formCon">{{ post.author }}</td>
                <td class="formCon">{{ post.lastComment }}</td>
                <td class="formCon">{{ post.hot }}</td>
                <td class="formCon">
                    {{ PostTime(post.post_time) }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

interface MiniPost {
    title: string;
    post_url: string;
    author: string;
    lastComment: string;
    hot: number;
    post_time: Date;
}

@Component({})
export default class PostForm extends Vue {
    @Provide() public posts: MiniPost[] = [
        {
            title: '如何起一个夸张的标题',
            post_url: '2133',
            author: 'Tony',
            lastComment: 'Bob',
            hot: 7777,
            post_time: new Date(2019, 5, 1, 20, 4),
        },
    ];

    public PostTime(postTime: Date): string {
        const time = `${postTime.getMonth()}-${postTime.getDate()} ${postTime.getHours() < 10 ? '0' + postTime.getHours() : postTime.getHours()}:${
            postTime.getMinutes() < 10 ? '0' + postTime.getMinutes() : postTime.getMinutes()
        }`;
        return time;
    }

    get Category() {
        return '/' + this.$attrs.category + '/';
    }
}
</script>

<style scoped>
.postForm {
    display: flex;
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
</style>
