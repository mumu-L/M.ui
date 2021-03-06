import VueRouter from 'vue-router'
import Vue from 'vue'
import Menu from '../apps/menus/menu.vue'
import menuCode from '../apps/menus/code.vue'
import addContent from '../apps/addContent/addcontent.vue'
import Demo from '../apps/common/demo.vue'

Vue.use(VueRouter)
const routes = [
		  { 
			path: '/menus', 
			name:'菜单',
			redirect:'/menus/menu',
			component:{
				render(c){
					return c('router-view')
				}
			},
			children:[{
				path:'menu',
				name:'左侧菜单',
				component:Menu
			},{
				path:'code/:id',
				name:'代码',
				component:menuCode,
				hidden:true
			},{
				path:'demo/:id',
				name:'示例',
				component:Demo,
				hidden:true
			},{
				path:'addcontent',
				name:'添加',
				component:addContent
			}]
		  }
       ]
let  addmenu=(data)=>{
	   let menus=[]
	   data.forEach((level1)=>{
		    menus.push({
			   path:level1.path,
			   name:level1.name,
			   expanded:false,
			   children:(()=>{
				   let arr=[]
				   if(level1.children){
					  level1.children.forEach((level2)=>{
						  arr.push({
							  path:level1.path+"/"+level2.path,
							  name:level2.name,
							  hidden:level2.hidden?level2.hidden:false
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