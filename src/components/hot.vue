<template>
    <div class="hot">
        <h2>校园热点</h2>
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import PostForm from './universal/PostForm.vue';
import Editor from './universal/Editor.vue';

@Component({
    components: {
        PostForm,
        Editor,
    },
})
export default class Hot extends Vue {}
</script>

<style scoped>
.hot {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-left: 6%;
    text-align: left;
    overflow-y: auto;
}
.hot h2 {
    margin-top: 40px;
    padding: 5px 0px 5px 20px;
    border-left: #9a9a9a 2px solid;
    text-align: left;
}
.hot p {
    color: #c9c5c5;
}
</style>
