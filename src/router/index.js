import Vue from 'vue'
import Router from 'vue-router'

//让Vue使用插件Router 
Vue.use(Router)

import Home from '../pages/Home/Home.vue'
import Biology from '../pages/Biology/Biology.vue'
import Activities from '../pages/Activities/Activities.vue'
import Cooperate from '../pages/Cooperate/Cooperate.vue'
import Data from '../pages/Data/Data.vue'
import About from '../pages/About/About.vue'
import Mall from '../pages/Mall/Mall.vue'
import PersonalCenter from '../pages/PersonalCenter/PersonalCenter.vue'

import Animals from '../pages/Biology/Animals.vue'
import Botany from '../pages/Biology/Botany.vue'
import Fungus from '../pages/Biology/Fungus.vue'
import Protist from '../pages/Biology/Protist.vue'
import Prokaryote from '../pages/Biology/Prokaryote.vue'

import ScienceTalk from '../pages/Activities/ScienceTalk.vue'
import SciencePicture from '../pages/Activities/SciencePicture.vue'
import ScienceConference from '../pages/Activities/ScienceConference.vue'
import ScienceArticles from '../pages/Activities/ScienceArticles.vue'

import Zoo from '../pages/Cooperate/Zoo.vue'
import ResearchInstitutes from '../pages/Cooperate/ResearchInstitutes.vue'
import CommonwealOrganization from '../pages/Cooperate/CommonwealOrganization.vue'

import ProjectIntroduction from '../pages/About/ProjectIntroduction.vue'
import ContactUs from '../pages/About/ContactUs.vue'

import Register from '../pages/User/Register.vue'
import Login from '../pages/User/Login.vue'





export default new Router({
	routes: [
    //一个对象就是一个页面组件的配置项内容
		{
			name:'tab0',
			path:'/home',
			component:Home
		},
		{
			name: 'tab1',
			path:'/biology',
			component: Biology
		},
		{
			name: 'tab2',
			path:'/activities',
			component: Activities
		},
		{
			name: 'tab3',
			path: '/cooperate',
			component: Cooperate
		},
		{
			name: 'tab4',
			path: '/data',
			component: Data
		},
		{
			name: 'tab5',
			path: '/about',
			component: About
		},
		{
			name: 'tab6',
			path: '/mall',
			component: Mall
		},
		{
			name: 'tab7',
			path: '/personalCenter',
			component: PersonalCenter
		},
		{
			path: '/',//当路径为'/'时，将地址栏改变为'/home'
			redirect: '/home'
		},
		{
			path: '**',//不满足前面的配置项，将地址栏改变为'/home'
			redirect: '/home'
		},
		{
			name:'tab11',
			path:'/animals',
			component:Animals
		},
		{
			name:'tab12',
			path:'/botany',
			component:Botany
		},
		{
			name:'tab13',
			path:'/fungus',
			component:Fungus
		},
		{
			name:'tab14',
			path:'/protist',
			component:Protist
		},
		{
			name:'tab15',
			path:'/prokaryote',
			component:Prokaryote
		},
		{
			name:'tab21',
			path:'/scienceTalk',
			component:ScienceTalk
		},
		{
			name:'tab22',
			path:'/sciencePicture',
			component:SciencePicture
		},
		{
			name:'tab23',
			path:'/scienceConference',
			component:ScienceConference
		},
		{
			name:'tab24',
			path:'/scienceArticles',
			component:ScienceArticles
		},
		{
			name:'tab31',
			path:'/zoo',
			component:Zoo
		},
		{
			name:'tab32',
			path:'/researchInstitutes',
			component:ResearchInstitutes
		},
		{
			name:'tab33',
			path:'/commonwealOrganization',
			component:CommonwealOrganization
		},
		{
			name:'tab51',
			path:'/projectIntroduction',
			component:ProjectIntroduction
		},
		{
			name:'tab52',
			path:'/contactUs',
			component:ContactUs
		},
		{
			name:'tab111',
			path:'/login',
			component:Login
		},
		{
			name:'tab222',
			path:'/register',
			component:Register
		}
    
	]
});
