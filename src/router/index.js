import Vue from 'vue'
import VueRouter from 'vue-router'

//引入所有出现在路由中的页面组件
import Nav from '@/views/Nav.vue'
import LoginIn from '@/views/LoginIn.vue'
import LoginUp from '@/views/LoginUp.vue'
import Index from '@/views/Index.vue'
import Message from '@/views/Message.vue'
import Profile from '@/views/Profile.vue'
import FromMessage from '@/views/FromMessage.vue'
import ToMessage from '@/views/ToMessage.vue'
import Articles	from '@/views/Articles.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import Topics from '@/views/Topics.vue'
import Search from '@/views/Search.vue'
import SearchUser from '@/views/SearchUser.vue'
import SearchTopic from '@/views/SearchTopic.vue'
import SearchArticle from '@/views/SearchArticle.vue'
import Empty from '@/views/Empty.vue'
import Text9 from '@/views/Text9.vue'
import MessageBoard from '@/views/MessageBoard.vue'
// import TopicDetail from '@/views/TopicDetail.vue'


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
			path: 'topics',
			component: Topics
		},
		{
			path: 'board',
			component: MessageBoard
		},
		{
			path:'text9',
			component: Text9
		},
		// {
		// 	path: 'topic/:id',
		// 	component: TopicDetail
		// },
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
			path:'search',
			component : Search,
			children : [
				{
					path:'/',
					redirect: 'article'
				},
				{
					path: 'article',
					component: SearchArticle
				},
				{
					path: 'topic',
					component: SearchTopic
				},
				{
					path: 'user',
					component: SearchUser
				}
			]
		},
		{
			path:'empty',
			component : Empty
		},
		{
			path:'profile',
			component : Profile
		},
		{
			path: 'articles',
			component: Articles
		},
		{
			path:'article/:id',
			component : ArticleDetail
		}
		
	]
  },
  {
    path: '/login-in',
    component : LoginIn
	
	//路由懒加载
    // component: () => import('../views/Login.vue')
  },
  {
  		path: '/login-up',
  		component: LoginUp
  }
]

const router = new VueRouter({
  routes
})

export default router
