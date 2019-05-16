<template>
    <div class="MaterialForm">
        <select id="select">
            <option selected disabled>请选择所查课程的名称</option>
            <option value="qq">qq</option>
        </select>
        <table>
            <tr>
                <th></th>
                <th><img src="icons/category.svg" /></th>
                <th><img src="icons/user.svg" /></th>
                <th><img src="icons/comment.svg" /></th>
                <th><img src="icons/hot2.svg" /></th>
                <th><img src="icons/clock.svg" /></th>
            </tr>
            <tr v-for="post in posts" :key="post.post_url" class="fcontent">
                <td class="grow">
                    <router-link v-bind:to="'/home/study/materials/' + post.post_url">{{ post.title }}</router-link>
                </td>
                <td class="formCon">{{ post.category }}</td>
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
    category: string;
    author: string;
    lastComment: string;
    hot: number;
    post_time: Date;
}

@Component({})
export default class MaterialForm extends Vue {
    @Provide() public posts: MiniPost[] = [
        {
            title: '如何起一个夸张的标题',
            post_url: '2133',
            category: 'web程序设计',
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
}
</script>

<style scoped>
.MaterialForm {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.MaterialForm img {
    height: 20px;
    width: 20px;
}
.MaterialForm table {
    width: 100%;
    text-align: center;
    margin-right: 50px;
    margin-bottom: 50px;
    border-collapse: collapse;
}

#select {
    width: 20%;
    align-self: flex-end;
    margin-top: -48px;
    margin-bottom: 60px;
    padding: 5px 0px 5px 10px;
    border: none;
    font-size: 18px;
    outline: none;
    color: #c9c5c5;
    box-shadow: #00000031 0px 0px 8px;
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
