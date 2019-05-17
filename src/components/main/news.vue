<template>
    <div class="anew">
        <p>
            <router-link :to="postURL">{{ anews.title }}</router-link>
        </p>
        <div>
            <img src="icons/user.svg" /><span>{{ anews.author.username }}</span> <img src="icons/hot.svg" /><span>{{ anews.heat }}</span> <img src="icons/clock.svg" /><span>{{
                PostTime(TimeTrans(anews.createTime))
            }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Provide } from 'vue-property-decorator';

@Component({})
export default class News extends Vue {
    @Prop() public anews!: any;

    public TimeTrans(time: number) {
        return new Date(time);
    }

    public PostTime(postTime: Date): string {
        const time = `${postTime.getMonth() + 1}-${postTime.getDate()} ${postTime.getHours() < 10 ? '0' + postTime.getHours() : postTime.getHours()}:${
            postTime.getMinutes() < 10 ? '0' + postTime.getMinutes() : postTime.getMinutes()
        }`;
        return time;
    }

    get postURL() {
        if (this.anews.author.userId) {
            return '/home/hot/' + this.anews.id;
        } else {
            return '/home/entertainment/' + this.anews.id;
        }
    }
}

const da: Date = new Date();
</script>

<style scoped>
.anew {
    padding-bottom: 35px;
    border-bottom: #dfdfdf 1px solid;
}
p {
    margin-top: 20px;
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
