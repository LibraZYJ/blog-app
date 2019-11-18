import Vue from 'vue'
import VueRouter from 'vue-router'

//引入所有出现在路由中的页面组件
import Nav from '@/views/Nav.vue'
import Login from '@/views/Login.vue'
import Index from '@/views/Index.vue'
import Message from '@/views/Message.vue'
import Profile from '@/views/Profile.vue'
import FromMessage from '@/views/FromMessage.vue'
import ToMessage from '@/views/ToMessage.vue'
import Article	from '@/views/Article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Nav,
	children:[
		{
			path: '/',
			redirect:'index'
		},
		{
			path:'index',
			component : Index
		},
		{
			path:'message',
			component : Message,
			children : [
				{
					path:'from',
					component : FromMessage
				},
				{
					path:'to',
					component : ToMessage
				}
			]
			
		},
		{
			path:'profile',
			component : Profile
		},
		{
			path:'article',
			component : Article
		}
		
	]
  },
  {
    path: '/login',
    component : Login
	
	//路由懒加载
    // component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
