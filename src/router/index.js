import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Filter from '@/components/filter'
import Directive from '@/components/directive'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: "/filter",
      name: 'filter',
      component: Filter
    }, {
      path: "/directive",
      name: 'directive',
      component: Directive
    }
  ]
})
