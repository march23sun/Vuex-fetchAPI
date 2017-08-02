import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/components/Example'
import Vuexpage from '@/components/Vuexpage'
import Resources from '@/components/Resources'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'example',
      component: Example
    }
    ,
    {
      path: '/resources',
      name: 'resources',
      component: Resources
    }

    ,
    {
      path: '/vuexpage',
      name: 'vuexpage',
      component: Vuexpage
    }
  ],

})
