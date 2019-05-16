<template>
    <div class="user-tab" :class="classObj" @click="setact">
        <img src="icons/user.svg" />
        <p>{{ user.name }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';

interface User {
    name: string;
}
interface ClassObj {
    active: boolean;
}

@Component({})
export default class UserTab extends Vue {
    @Prop() public user!: User;
    @Prop() public usertab!: number;
    @Prop() public curractive!: number;

    get classObj() {
        return {
            active: this.usertab === this.curractive,
        };
    }

    public setact() {
        this.$emit('setact', this.usertab);
    }
}
</script>

<style scoped>
.user-tab {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 3px 0px 3px 0px;
}
.user-tab:hover {
    background-color: white;
}

img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: 5px;
    flex-shrink: 0;
}

p {
    word-wrap: break-word;
    word-break: break-all;
    margin-right: 5px;
}

.active {
    background-color: white;
}
</style>
