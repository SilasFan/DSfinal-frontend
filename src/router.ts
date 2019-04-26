import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            redirect: '/home/main',
            children: [
                {
                    path: 'main',
                    name: 'main',
                    component: () => import('@/components/Main.vue'),
                },
                {
                    path: 'hot',
                    component: () => import('@/components/hot.vue'),
                    children: [
                        {
                            path: '/',
                            component: () => import('@/components/universal/PostForm.vue'),
                            props: { category: 'hot' },
                        },
                        {
                            path: ':postId',
                            component: () => import('@/components/universal/Post1.vue'),
                        },
                    ],
                },
                {
                    path: 'entertainment',
                    component: () => import('@/components/Entertainment.vue'),
                    children: [
                        {
                            path: '/',
                            component: () => import('@/components/universal/PostForm.vue'),
                            props: { category: 'entertainment' },
                        },
                        {
                            path: ':postId',
                            component: () => import('@/components/universal/Post1.vue'),
                        },
                    ],
                },
                {
                    path: 'study',
                    // name: 'study',
                    component: () => import('@/components/Study.vue'),
                    children: [
                        {
                            path: '/',
                            component: () => import('@/components/universal/PartNav.vue'),
                            props: { links: [{ title: '讲座动态', url: '/home/study/lectures' }, { title: '课程资料', url: '/home/study/materials' }], title: '学习资料' },
                        },
                        {
                            path: 'lectures',
                            component: () => import('@/components/lectures/LectureList.vue'),
                        },
                        {
                            path: 'materials',
                            component: () => import('@/components/lectures/Materials.vue'),
                            children: [
                                {
                                    path: '/',
                                    component: () => import('@/components/lectures/MaterialForm.vue'),
                                },
                                {
                                    path: ':postId',
                                    component: () => import('@/components/universal/Post1.vue'),
                                },
                            ],
                        },
                    ],
                },
                {
                    path: 'lost-and-found',
                    // name: 'lost-and-found',
                    component: () => import('@/components/LostAndFound.vue'),
                    children: [
                        {
                            path: '/',
                            component: () => import('@/components/universal/PartNav.vue'),
                            props: {
                                links: [
                                    { title: '失物招领', url: '/home/lost-and-found/found' },
                                    { title: '寻物启事', url: '/home/lost-and-found/lost' },
                                    { title: '发布消息', url: '/home/lost-and-found/newitem' },
                                ],
                                title: '失物寻物',
                            },
                        },
                        {
                            path: 'found',
                            name: 'found',
                            component: () => import('@/components/lostandfound/ItemList.vue'),
                            props: { title: '失物招领' },
                        },
                        {
                            path: 'items/:itemId',
                            component: () => import('@/components/lostandfound/ItemDetails.vue'),
                        },
                        {
                            path: 'lost',
                            name: 'lost',
                            component: () => import('@/components/lostandfound/ItemList.vue'),
                            props: { title: '寻物启事' },
                        },
                        {
                            path: 'newitem',
                            component: () => import('@/components/lostandfound/NewItem.vue'),
                        },
                    ],
                },
                {
                    path: 'search',
                    component: () => import('@/components/Search.vue'),
                },
                {
                    path: 'user',
                    component: () => import('@/components/User.vue'),
                },
                {
                    path: 'mysetting',
                    component: () => import('@/components/UserSetting.vue'),
                    children: [
                        {
                            path: '/',
                            component: () => import('@/components/universal/PartNav.vue'),
                            props: { links: [{ title: '个人信息', url: '/home/mysetting/info' }, { title: '账号密码', url: '/home/mysetting/pswmodify' }], title: '账号设置' },
                        },
                        {
                            path: 'info',
                            component: () => import('@/components/usersetting/UserInfo.vue'),
                        },
                        {
                            path: 'pswmodify',
                            component: () => import('@/components/usersetting/PswAuthentication.vue'),
                        },
                    ],
                },
                {
                    path: 'letters',
                    component: () => import('@/components/Letter.vue'),
                },
            ],
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register.vue'),
        },
    ],
});
