<template>
    <div class="anew">
        <p>
            <router-link to="#">{{ anews.title }}</router-link>
        </p>
        <div>
            <img src="/icons/user.svg" /><span>{{ anews.post_user }}</span> <img src="/icons/hot.svg" /><span>{{ anews.hot }}</span> <img src="/icons/clock.svg" /><span>{{
                anews.post_date.getMonth() + '-' + anews.post_date.getDate() + ' ' + anews.post_date.getHours() + ':' + anews.post_date.getMinutes()
            }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

interface New {
    title: string;
    post_user: string;
    post_date: Date;
    hot: number;
}

@Component({})
export default class News extends Vue {
    @Prop() public anews!: New;
}

const da: Date = new Date();
</script>

<style scoped>
.anew {
    padding-bottom: 35px;
    border-bottom: #dfdfdf 1px solid;
}
p {
    margin-top: 10px;
}
img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
}
span {
    margin-right: 40px;
}
a {
    text-decoration: none;
    font-size: 18px;
    color: #333333;
}
</style>
