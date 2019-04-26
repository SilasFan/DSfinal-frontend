<template>
    <div class="message">
        <div class="content">
            <Paragraph :isSelf="false" para="233fhewiu" />
            <Paragraph :isSelf="true" para="233fhvgbiufhu" />
        </div>
        <div class="send">
            <textarea />
            <button>发送</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import Paragraph from '@/components/letter/Paragraph.vue';

@Component({
    components: {
        Paragraph,
    },
})
export default class Message extends Vue {}
</script>

<style scoped>
.message {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.content {
    height: 75%;
    width: calc(100% + 17px);
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
}
.content div:first-of-type {
    margin-top: 30px;
}

.send {
    height: 25%;
    border-top: #dfdfdf 2px solid;
    display: flex;
    flex-direction: column;
}

p {
    margin-bottom: 100px;
}

textarea {
    width: 98%;
    height: calc(100% - 40px);
    border: none;
    outline: none;
    resize: none;
    font-size: 18px;
    margin: 0px;
    padding: 8px 8px 0px 8px;
}

button {
    color: white;
    background-color: #000000;
    width: 110px;
    height: 25px;
    align-self: flex-end;
    margin-right: 30px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
}
</style>
