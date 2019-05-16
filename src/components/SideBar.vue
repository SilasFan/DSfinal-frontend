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
            <router-link to="/home/hot">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="hotjar"
                    class="svg-inline--fa fa-hotjar fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="20px"
                    height="20px"
                >
                    <path
                        fill="currentColor"
                        d="M414.9 161.5C340.2 29 121.1 0 121.1 0S222.2 110.4 93 197.7C11.3 252.8-21 324.4 14 402.6c26.8 59.9 83.5 84.3 144.6 93.4-29.2-55.1-6.6-122.4-4.1-129.6 57.1 86.4 165 0 110.8-93.9 71 15.4 81.6 138.6 27.1 215.5 80.5-25.3 134.1-88.9 148.8-145.6 15.5-59.3 3.7-127.9-26.3-180.9z"
                    ></path></svg
                >校园热点
            </router-link>
            <router-link to="/home/entertainment">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="gamepad"
                    class="svg-inline--fa fa-gamepad fa-w-20"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    height="20px"
                    width="20px"
                >
                    <path
                        fill="currentColor"
                        d="M480 96H160C71.6 96 0 167.6 0 256s71.6 160 160 160c44.8 0 85.2-18.4 114.2-48h91.5c29 29.6 69.5 48 114.2 48 88.4 0 160-71.6 160-160S568.4 96 480 96zM256 276c0 6.6-5.4 12-12 12h-52v52c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-52H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h52v-52c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h52c6.6 0 12 5.4 12 12v40zm184 68c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-80c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
                    ></path></svg
                >休闲娱乐
            </router-link>
            <router-link to="/home/study">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="book"
                    class="svg-inline--fa fa-book fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="20px"
                    height="20px"
                >
                    <path
                        fill="currentColor"
                        d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
                    ></path></svg
                >学习资料
            </router-link>
            <router-link to="/home/lost-and-found">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="key"
                    class="svg-inline--fa fa-key fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="20px"
                    height="20px"
                >
                    <path
                        fill="currentColor"
                        d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
                    ></path></svg
                >失物寻物
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

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
    animation: router-active 0.8s;
}

@keyframes sidebar-in {
    100% {
        transform: translateX(-200px);
    }
}

@keyframes router-active {
    from {
        background-position: -200px;
    }
    to {
        background-position: 0px;
    }
}
</style>
