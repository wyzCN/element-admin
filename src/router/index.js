import Vue from 'vue'
import VueRouter from 'vue-router'

import ListArticle from '../views/ListArticle'
import CreateArticle from '../views/CreateArticle'
import EditArticle from '../views/EditArticle'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'home',
    redirect: '/articles/index'
  },
  {
    path: '/articles/index',
    component: ListArticle
  },
  {
    path: '/articles/create',
    component: CreateArticle
  },
  {
    path: '/articles/:id/edit',
    component: EditArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
