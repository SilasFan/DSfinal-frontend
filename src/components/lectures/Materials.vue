<template>
    <div class="materials">
        <h2>课程资料</h2>
        <p>总帖数：{{ postSum }}</p>
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({})
export default class Materials extends Vue {
    @Provide() public postSum: number = 5533;
}
</script>

<style scoped>
.materials {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-left: 6%;
    margin-top: 40px;
    margin-right: 4%;
    text-align: left;
}
.materials h2 {
    padding: 5px 0px 5px 20px;
    border-left: #9a9a9a 2px solid;
    text-align: left;
}
.materials p {
    color: #c9c5c5;
}
</style>
