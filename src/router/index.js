import Vue from 'vue'
import Router from 'vue-router'
import Benefits from '@/components/Benefits'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Benefits',
      component: Benefits
    }
  ]
})
