import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Skills from '../views/Skills.vue'
import Work from '../views/Work.vue'
import Hobbies from '../views/Hobbies.vue'
import Contact from '../views/Contact.vue'
import Thanks from '../views/Thanks.vue'
import Protected from '../views/protected.vue'
import Blogs from '../views/Blogs.vue'
import Blog from '../views/Blog.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    },
    {
        path: '/work',
        name: 'work',
        component: Work
    },
    {
        path: '/hobbies',
        name: 'Hobbies',
        component: Hobbies
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: Blogs
    },
    {
        path: '/blog/:id',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/protected',
        name: 'Protected',
        component: Protected
    },
    {
        path: '/thanks',
        name: 'Thanks',
        component: Thanks
    }
]

const router = new VueRouter({
    routes
})

export default router