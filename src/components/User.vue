<template>
    <div class="user-view">
        <h2>我的主页</h2>
        <div class="user-headline">
            <img src="icons/user.svg" />
            <p>username</p>
            <p style="margin-top:0px;font-size:18px;">sign</p>
        </div>
        <InfoForm />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import InfoForm from '@/components/user/InfoForm.vue';

@Component({
    components: {
        InfoForm,
    },
})
export default class User extends Vue {}
</script>

<style scoped>
.user-view {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    padding-left: 15%;
    padding-right: 15%;

    text-align: left;
    overflow-x: auto;
}

h2 {
    margin-top: 40px;
    padding: 5px 0px 5px 20px;
    border-left: #9a9a9a 2px solid;
    text-align: left;
}

.user-headline {
    margin-top: 20px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.user-headline img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}
.user-headline p {
    font-size: 22px;
}
</style>
