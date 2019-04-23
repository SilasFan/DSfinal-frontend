<template>
    <div class="info-form">
        <h3>资料</h3>
        <div class="info-school">
            <div class="rePost">
                <span class="circle"></span>
                <p>年级：2017级</p>
            </div>
            <div class="rePost">
                <span class="circle"></span>
                <p>学院：2333</p>
            </div>
            <div class="rePost">
                <span class="circle"></span>
                <p>专业：啊啊啊啊</p>
            </div>
        </div>
        <h3>帖子</h3>
        <PostList />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import PostList from '@/components/user/PostList.vue';
import Result from '@/components/search/Result-post.vue';

@Component({
    components: {
        PostList,
    },
})
export default class InfoForm extends Vue {}
</script>

<style scoped>
.info-form {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 30px;
    margin-bottom: 40px;
    height: 100%;
    padding: 5% 6% 5% 6%;
    box-shadow: #0000002d 0px 0px 8px;
}

.info-school {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    padding-top: 20px;
    border-left: #f1f1f1 6px solid;
}

.rePost {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 10px;
}
.rePost p {
    background-color: #fafafa;
    padding: 10px 10px 10px 20px;
    width: 200px;
    font-size: 16px;
    color: #878787;
}

.circle {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    margin-left: -9px;
    margin-right: 30px;
    background-color: #c9c5c5;
}
</style>
