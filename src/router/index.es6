import VueRouter from 'vue-router'
import Vue from 'vue'
import Foo from '../apps/foo.vue'
import Bar from '../apps/bar.vue'

Vue.use(VueRouter)
const routes = [
		  { 
			path: '/bar', 
			name:'bar',
			component:Bar
		  },
	      {
			path:'/foo',
			name:'foo',
			component:Foo
		  }
       ]
let  addmenu=(data)=>{
	   let menus=[]
	   data.forEach((val)=>{
		   console.log()
		   menus.push({
			   path:val.path,
			   name:val.name
		   })
	   })
	return menus
     }
let menuArr=addmenu(routes)
console.log(menuArr)
const router=new VueRouter({
	routes
})

export { router,menuArr } 