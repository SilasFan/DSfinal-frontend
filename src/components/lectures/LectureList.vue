<template>
    <div class="result">
        <h2>讲座动态</h2>
        <div class="lectures" v-for="lecture in Lectures" :key="lecture.id">
            <span class="circle"></span>
            <p class="date">{{ PostTime(TimeTrans(lecture.time)) }}</p>
            <div class="content">
                <p>{{ lecture.title }}</p>
                <p>主讲人：{{ lecture.lecturer }}</p>
                <p>地点：{{ lecture.position }}</p>
                <p>备注：{{ lecture.note }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Watch } from 'vue-property-decorator';
import GetLectureFunc from '@/scripts/study/GetLectures';

@Component({})
export default class Result extends Vue {
    @Provide() public Lectures: any = [];
    @Provide() public totalCount: number = 0;
    @Provide() public currentPage: number = 1;

    public LastPage() {
        this.currentPage -= 1;
    }
    public NextPage() {
        this.currentPage += 1;
    }
    public SetPage(page: number) {
        this.currentPage = page;
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
    public pageChange() {}

    public TimeTrans(time: number) {
        return new Date(time);
    }

    public PostTime(postTime: Date): string {
        const time = `${postTime.getFullYear()}-${postTime.getMonth() + 1}-${postTime.getDate()} ${postTime.getHours() < 10 ? '0' + postTime.getHours() : postTime.getHours()}:${
            postTime.getMinutes() < 10 ? '0' + postTime.getMinutes() : postTime.getMinutes()
        }`;
        return time;
    }

    private getLectures(first: number, skip: number) {
        GetLectureFunc(first, skip).then(res => {
            if (res.msg) {
                alert(res.msg);
            } else {
                console.log(res);
                this.Lectures = res.lectures;
            }
        });
    }

    private beforeMount() {
        this.getLectures(0, 10);
    }
}
</script>

<style scoped>
.result {
    width: 100%;
    max-width: 900px;
    height: max-content;
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    margin-top: 150px;
    margin-bottom: 50px;
    border-left: #f1f1f1 6px solid;
}
.result h2 {
    text-align: left;
    padding: 5px 0px 5px 20px;
    margin-top: -100px;
    margin-bottom: 100px;
    border-left: #9a9a9a 2px solid;
}

.lectures {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 30px;
}

.circle {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    margin-left: -9px;
    margin-right: 30px;
    background-color: #c9c5c5;
}

.date {
    margin: 0px;
    color: #878787;
    font-size: 16px;
    padding-right: 20px;
}

.content {
    height: 186px;
    max-width: 700px;
    background-color: #fafafa;
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.content p:first-of-type {
    margin-left: 30px;
    margin-bottom: 15px;
    font-size: 20px;
    color: black;
    display: flex;
    align-items: center;
}
.content p {
    margin: 5px 0px 5px 30px;
    color: #878787;
}
</style>
