import VueRouter from 'vue-router'
import Vue from 'vue'
import Foo from '../apps/foo.vue'
import Bar from '../apps/bar.vue'
import Coo from '../apps/coo.vue'

Vue.use(VueRouter)
const routes = [
		  { 
			path: '/bar', 
			name:'bar',
			component:{
				render(c){
					return c('router-view')
				}
			},
			children:[{
				path:'foo',
				name:'foo',
				component:Foo
			},{
				path:'coo',
				name:'coo',
				component:Coo
			}]
		  }
       ]
let  addmenu=(data)=>{
	   let menus=[]
	   data.forEach((level1)=>{
		    menus.push({
			   path:level1.path,
			   name:level1.name,
			   children:(()=>{
				   let arr=[]
				   if(level1.children){
					  level1.children.forEach((level2)=>{
						  arr.push({
							  path:level1.path+"/"+level2.path,
							  name:level2.name
						  })
					  }) 
				   } 
				   return arr
			   })()
		    }) 

	   })
	return menus
     }
let menuArr=addmenu(routes)
const router=new VueRouter({
	routes
})

export { router,menuArr } 