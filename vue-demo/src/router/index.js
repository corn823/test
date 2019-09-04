import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Store from '@/components/Store'
import Movie from '@/components/Movie'
import Tibame from '@/components/Tibame'
import TableRender from '@/components/TableRender'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/tibame',
      name: 'Tibame',
      component: Tibame
    },
    {
      path: '/tablerender',
      name: 'TableRender',
      conponent: TableRender
    }
  ]
})
