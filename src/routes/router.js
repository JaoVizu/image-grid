import { createRouter, createWebHashHistory} from 'vue-router'

import ImageGrid from '../components/ImageGrid.vue'
import ConfigureImageQuery from '../components/ConfigureImageQuery.vue' 

const routerHistory = createWebHashHistory()

const router = createRouter({
  history: routerHistory,
  routes : [
    { path: '/', component: ImageGrid },
    { path: '/configure', component: ConfigureImageQuery },
  ]
})

export default router