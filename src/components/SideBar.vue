<template>
    <div class="bbs-sidebar">
        <div class="absolute">
            <router-link to="/home/main">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="home"
                    class="svg-inline--fa fa-home fa-w-18"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width="20px"
                    height="20px"
                >
                    <path
                        fill="currentColor"
                        d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                    ></path>
                </svg>
                主页
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";

export default class SideBar extends Vue {}
</script>

<style scope>
.bbs-sidebar {
    background-color: #fafafa;
    height: 100%;
    width: 242px;
}
.absolute {
    margin-top: 78px;
    width: 220px;
}

.absolute a {
    padding-bottom: 15px;
    padding-top: 15px;
    font-size: 19px;
    color: #878787;
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;
}
.absolute a:hover {
    background-color: #eeeeee;
}

a svg {
    margin-left: 20px;
    margin-right: 40px;
    width: 25px;
    height: 25px;
}

.router-link-active {
    color: #1492e6 !important;
    background-color: #eeeeee;
}
</style>