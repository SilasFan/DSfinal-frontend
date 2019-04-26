<template>
    <div v-bind:class="IsSelf">
        <p>{{ Message }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';

@Component({})
export default class Paragraph extends Vue {
    @Prop() private isSelf!: boolean;
    @Prop() private para!: string;

    get IsSelf() {
        return {
            self: this.isSelf,
            other: !this.isSelf,
        };
    }

    get Message() {
        return this.para;
    }
}
</script>

<style scoped>
div {
    margin-bottom: 15px;
    border-radius: 3px;
}

p {
    margin: 10px 15px 10px 15px;
}

.other {
    align-self: flex-start;
    max-width: 70%;
    margin-left: 40px;
    box-shadow: #0000002f 0px 0px 5px;
}
.other p::before {
    content: '';
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 12px solid white;
    margin-left: -27px;
    margin-right: 15px;
    position: absolute;
    filter: drop-shadow(-3px 2px 3px #0000002f);
}

.self {
    align-self: flex-end;
    max-width: 70%;
    margin-right: 40px;
    background-color: #a1e85a;
    box-shadow: #0000002f 0px 0px 5px;
}
.self p::after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 12px solid #a1e85a;
    margin-right: -27px;
    margin-left: 15px;
    filter: drop-shadow(3px 2px 3px #0000002f);
}
</style>
