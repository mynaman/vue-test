import Vue from 'vue'
import VueRouter from 'vue-router'
import header from '../page/HeaderPage'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            components: {
                default: Slider,
                header: header,
                footer: Footer
            }
        },
        // {
        //     path: '/main',
        //     components: {                
        //         default: { template: '<div>main</div>'},
        //         header: home,
        //         footer: Footer               
        //     }
        // },
        // {
        //     path: '/login',
        //     components: {                
        //         default: { template: '<div>login</div>'},
        //         header: home,
        //         footer: Footer               
        //     }
        // }
    ]
  })
  
export default router