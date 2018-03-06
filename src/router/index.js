import Vue from 'vue'
import Router from 'vue-router'
import vuewechattitle from 'vue-wechat-title'
import Index from '@/components/index/index.vue'
import Sign from '@/components/sign/login.vue'
import Regist from '@/components/sign/regist.vue'
import mainVer from '@/components/sign/main_ver.vue'
import Error from '@/components/error/error'
import forget from '@/components/sign/forgetPass'
import mailforget from '@/components/sign/mailforget'
import proto from '@/components/sign/proto'
import Infor from '@/components/index/infor'
import Commun from '@/components/index/commun'
import Exhibit from '@/components/index/exhibit'
import Product from '@/components/index/product'
import Race from '@/components/index/race'
import Detail from '@/components/details/inforDel'
import exhibitDel from '@/components/details/exhibitDel'
import RaceDel from '@/components/details/raceDel'
import ProDels from '@/components/details/productDel'
import person from '@/components/personal/index'
import seting from '@/components/personal/seting'
import proColl from '@/components/personal/proColl'
import phoneSet from '@/components/personal/set_phone'
import mailSet from '@/components/personal/set_mail'
import pass_set from '@/components/personal/set_password'
import userSet from '@/components/personal/set_user'
import articleColl from '@/components/personal/articleColl'



Vue.use(Router);


export default new Router({
//	mode: 'history',
	linkActiveClass: 'active',
	routes: [{
			path: '/',
			meta: {
				title: '首页'
			},
			redirect: '/index/infor',
			component: Index,
			children: [{
					path: "/index",
					redirect: '/index/infor'
				},
				{
					path: "/index/infor",
					component: Infor,
					meta: {
						title: '首页'
					}
				},
				{
					path: "/index/commun",
					component: Commun,
					meta: {
						title: '社区'
					}
				},
				{
					path: "/index/product",
					component: Product,
					meta: {
						title: '产品'
					}
				},
				{
					path: "/index/race",
					name: 'race',
					component: Race,
					meta: {
						title: '赛事'
					}
				},
				{
					path: "/index/raceDel/",
					component: RaceDel,
					name: 'raceDel',
					meta: {
						title: '赛事详情'
					}
//					Router.beforeEach(function(transition) { if (transition.to.name === 'race' && transition.from.name !== 'raceDel') { transition.redirect('/index/raceDel/') } transition.next()})
				},
				{
					path: "/index/details/",
					component: Detail,
					meta: {
						title: '资讯详情'
					}
				},
				{
					path: "/index/exhibitDel/",
					component: exhibitDel,
					meta: {
						title: '展会详情'
					}
				},
				{
					path: "/index/proDel/",
					component: ProDels,
					meta: {
						title: '产品详情'
					}
				},
				{
					path: "/index/exhibit",
					component: Exhibit,
					meta: {
						title: '展会'
					}
				}

			]
		},
		{
			path: '/index',
			name: 'index',
			meta: {
				title: '首页'
			},
			component: Index
		},
		{
			path: '/signs',
			name: 'Sign',
			meta: {
				title: '登录'
			},
			component: Sign
		},
		{
			path: '/regist',
			name: 'Regist',
			meta: {
				title: '注册'
			},
			component: Regist
		},
		{
			path: '/proto',
			name: 'proto',
			meta: {
				title: '用户协议'
			},
			component: proto
		},
		{
			path: '/forget',
			name: 'forget',
			meta: {
				title: '忘记密码'
			},
			component: forget
		},
		{
			path: '/mailforget',
			name: 'mailforget',
			meta: {
				title: '忘记密码'
			},
			component: mailforget
		},
		{
			path: '/mainVer',
			name: 'mainVer',
			meta: {
				title: '邮箱注册'
			},
			component: mainVer
		},
		{
			path: '/error',
			name: 'Error',
			meta: {
				title: '异常'
			},
			component: Error
		},
		{
			path: '/person',
			name: 'person',
			meta: {
				title: '个人中心'
			},
			component: person,
			children: [{
					path: "/person",
					redirect: '/person/proColl'
				},
				{
					path: "/person/proColl",
					component: proColl,
					meta: {
						title: '产品收藏'
					}
				},
				{
					path: "/person/articleColl",
					component: articleColl,
					meta: {
						title: '文章收藏'
					}
				}
			]
		},
		{
			path: '/seting',
			name: 'seting',
			meta: {
				title: '账号设置'
			},
			component: seting
		},
		{
			path: '/phone_set',
			name: 'phone_set',
			meta: {
				title: '绑定手机'
			},
			component: phoneSet
		},
		{
			path: '/user_set',
			name: 'user_set',
			meta: {
				title: '更改用户名'
			},
			component: userSet
		},
		{
			path: '/pass_set',
			name: 'pass_set',
			meta: {
				title: '修改密码'
			},
			component: pass_set
		},
		{
			path: '/mail_set',
			name: 'mail_set',
			meta: {
				title: '绑定邮箱'
			},
			component: mailSet
		}

	]
})