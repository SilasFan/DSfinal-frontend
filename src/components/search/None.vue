<template>
    <div>
        <p>
            没有找到与 <strong>{{ Keyword }}</strong> 相关的{{ PostOrUser }}
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';

@Component({})
export default class None extends Vue {
    @Prop() public keyword!: string;
    @Prop() public postoruser!: boolean;

    get Keyword() {
        return this.keyword;
    }

    get PostOrUser() {
        if (this.postoruser) {
            return '帖子';
        } else {
            return '用户';
        }
    }
}
</script>

<style scoped>
div {
    width: calc(100% - 60px);
}

p {
    height: 480px;
    color: #878787;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

strong {
    color: #1492e6;
}
</style>
