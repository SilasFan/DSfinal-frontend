<template>
    <div class="post-editor">
        <input type="text" v-model="title" />

        <br />
        <br />
        <img id="load-file" src="icons/photo.svg" />
        <input type="file" id="fileSelector" accept="image/*" @change="LoadFiles" />
        <div class="editor" contenteditable="true" id="editor"></div>
        <button @click="aaa">发表文章</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
import { State, Getter, Mutation, namespace } from 'vuex-class';
import CreateHotFunc from '@/scripts/hot/Create';
import CreateEntertainmentFunc from '@/scripts/entertainment/Create';
import { ContentInput, SchoolHeatInput } from '@/scripts/hot/Create';
import { EntertainmentInput } from '@/scripts/entertainment/Create';

@Component({})
export default class PostEditor extends Vue {
    @Provide() public title: string = '';
    @State private token!: string;
    @Prop() private category!: string;

    get editorChildren() {
        const e = document.getElementById('editor');
        if (e !== null) {
            return e.children;
        } else {
            return null;
        }
    }

    public LoadFiles() {
        const e = document.getElementById('editor');
        const f = document.getElementById('fileSelector') as HTMLInputElement;
        if (e !== null && f !== null) {
            let file: any = [];
            if (f.files) {
                file = f.files[0];
            }
            const reader = new FileReader();
            const imgtype = (file.type as string).split('/')[1];
            reader.onloadend = () => {
                if (reader.result) {
                    const node = document.createElement('img');
                    node.src = reader.result as string;
                    node.setAttribute('style', 'max-width:50%;');
                    node.setAttribute('imagetype', imgtype);
                    e.appendChild(node);
                }
            };
            reader.readAsDataURL(file);
        }
    }

    public aaa() {
        if (this.editorChildren) {
            const cont = this.TransToInput(this.editorChildren);
            if (this.category === 'hot') {
                CreateHotFunc(
                    {
                        title: this.title,
                        content: {
                            elems: cont,
                        },
                    },
                    this.token,
                ).then(res => {
                    this.title = '';
                    const e = document.getElementById('editor');
                    if (e) {
                        const childs = e.childNodes;
                        for (let i = 0; i < childs.length; i++) {
                            e.removeChild(childs[i]);
                        }
                    }
                    console.log(res);
                });
            }
            if (this.category === 'entertainment') {
                CreateEntertainmentFunc(
                    {
                        title: this.title,
                        content: {
                            elems: cont,
                        },
                    },
                    this.token,
                ).then(res => {
                    this.title = '';
                    const e = document.getElementById('editor');
                    if (e) {
                        const childs = e.childNodes;
                        for (let i = 0; i < childs.length; i++) {
                            e.removeChild(childs[i]);
                        }
                    }
                });
            }
        }
    }

    private ToUpladString(str: string): string {
        return str.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
    }

    private TransToInput(nodes: HTMLCollection) {
        const content: ContentInput[] = [];
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i] as HTMLElement;
            if (node.getAttribute('data')) {
                content.push({ type: 'Text', str: node.getAttribute('data') as string });
            } else if (node.innerText !== '') {
                content.push({ type: 'Text', str: node.innerText });
            } else if (node.getAttribute('src')) {
                content.push({
                    type: 'Picture',
                    str: node.getAttribute('imagetype') + ' ' + this.ToUpladString(node.getAttribute('src') as string),
                });
            }
        }
        return content;
    }
}
</script>

<style scoped>
.editor {
    border: black 1px solid;
    outline: none;
    margin-top: 30px;
    height: 210px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

#load-file {
    width: 25px;
    height: 25px;
}

img {
    padding-top: 3px;
}

input {
    outline: none;
}
input[type='file'] {
    width: 25px;
    height: 25px;
    opacity: 0;
    margin-left: -25px;
}
input[type='text'] {
    width: 100%;
    font-size: 18px;
}

button {
    background-color: rgb(0, 0, 0);
    color: white;
    border: none;
    padding: 8px 15px 8px 15px;
    font-size: 18px;
    border-radius: 8px;
    margin-top: 10px;
    cursor: pointer;
}
</style>
