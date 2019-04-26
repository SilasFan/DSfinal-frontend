<template>
    <div class="letter">
        <h2>私信</h2>
        <div class="content-father">
            <div class="left">
                <UserTab v-for="(user, index) in users" :key="index" :user="user" :usertab="index" v-bind:curractive="currentActive" v-on:setact="setactive(index)" />
            </div>
            <div class="right">
                <Message />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import UserTab from '@/components/letter/UserTab.vue';
import Message from '@/components/letter/Message.vue';

interface User {
    name: string;
}

@Component({
    components: {
        UserTab,
        Message,
    },
})
export default class Letter extends Vue {
    @Provide() public users: User[] = [{ name: 'yousaaaaaaaaaa' }, { name: '小红' }, { name: '三无' }];

    @Provide() public currentActive: number = 0;
    @Provide() public currentDialogue!: User;

    public setactive(index: number): void {
        this.currentActive = index;
    }
}
</script>

<style scoped>
.letter {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 20% 0px 20%;
}

h2 {
    margin-top: 40px;
    padding: 5px 0px 5px 20px;
    border-left: #9a9a9a 2px solid;
    text-align: left;
    font-size: 20px;
    font-weight: 600;
}

.content-father {
    width: 100%;
    height: calc(0.96 * (100% - 92px));
    box-shadow: #00000031 0px 0px 8px;
    display: flex;
    flex-wrap: nowrap;
}

.left {
    width: 20%;
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    padding-top: 20px;
    padding-bottom: 20px;
}

.right {
    width: 80%;
    height: 100%;
}
</style>
