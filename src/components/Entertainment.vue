<template>
    <div class="entertainment">
        <h2>休闲娱乐</h2>
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
export default class Entertainment extends Vue {}
</script>

<style scoped>
.entertainment {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-left: 6%;
    text-align: left;
    overflow-y: auto;
}
.entertainment h2 {
    margin-top: 40px;
    padding: 5px 0px 5px 20px;
    border-left: #9a9a9a 2px solid;
    text-align: left;
}
.entertainment p {
    color: #c9c5c5;
}
</style>
