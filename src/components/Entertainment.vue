<template>
    <div class="entertainment">
        <h2>休闲娱乐</h2>
        <p>总帖数：{{ postSum }}</p>
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import PostForm from './universal/PostForm.vue';

@Component({
    components: {
        PostForm,
    },
})
export default class Entertainment extends Vue {
    @Provide() public postSum: number = 2333;
}
</script>

<style scoped>
.entertainment {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-left: 6%;
    margin-top: 40px;
    text-align: left;
}
.entertainment h2 {
    padding: 5px 0px 5px 20px;
    border-left: #9a9a9a 2px solid;
    text-align: left;
}
.entertainment p {
    color: #c9c5c5;
}
</style>
