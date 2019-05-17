<template>
    <div class="post-editor">
        <h3>发表帖子</h3>

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
            console.log(cont);
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
                        const length = e.childNodes.length;
                        for (let i = 0; i < length; i++) {
                            if (e.firstChild) {
                                e.removeChild(e.firstChild);
                            }
                        }
                    }
                    this.$emit('afterpost');
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
                        const length = e.childNodes.length;
                        for (let i = 0; i < length; i++) {
                            if (e.firstChild) {
                                e.removeChild(e.firstChild);
                            }
                        }
                    }
                    this.$emit('afterpost');
                });
            }
        }
    }

    private ToUpladString(str: string): string {
        return str.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
    }

    private TransToInput(nodes: HTMLCollection) {
        const content: ContentInput[] = [];
        // 判断第一个是不是text
        const e = document.getElementById('editor');
        if (e) {
            const firstchild = e.childNodes[0];
            if (firstchild.textContent) {
                content.push({ type: 'Text', str: firstchild.textContent });
            }
        }

        // 主循环
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
    /*border: black 1px solid;*/
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    outline: none;
    margin-top: 10px;
    margin-left: 2px;
    padding: 10px;
    height: 210px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

#load-file {
    padding-left: 5px;
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
    width: 99%;
    font-size: 18px;
    padding: 10px;
    border: none;
    margin-left: 2px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    outline: none;
}

button {
    background-color: rgb(0, 0, 0);
    color: white;
    border: none;
    padding: 8px 15px 8px 15px;
    font-size: 18px;
    border-radius: 8px;
    margin-top: 20px;
    cursor: pointer;
}
</style>
