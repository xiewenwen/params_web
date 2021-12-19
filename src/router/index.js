import Vue from 'vue'
import VueRouter from 'vue-router'
import ParamList from '../components/params/ParamList'
import Container from '../components/Container'
import ParamTemplate from '../components/params/ParamTemplate'

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        component:Container
    },
    {
        path:'/paramList',
        component:ParamList
    },
    {
        path:'/paramTemplate',
        component:ParamTemplate
    }
]
const router=new VueRouter({
    routes
})
router.beforeEach((to,from,next)=>{
    console.log('路由守卫开启')
    console.log(from)
    next()
  })
export default router