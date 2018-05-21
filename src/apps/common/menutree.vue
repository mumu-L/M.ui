<template>
  <div id="menu">
  	<ul class="list-group">
 	   <div v-for="item in menuArr">
 	     <router-link :to="item.path" v-if="item.children.length==0" >
			<li class="list-group-item"  v-text="item.name" @click="links(item.path)">	
			</li>
	     </router-link>
			<li class="list-group-item"  :class="menuListStyle(item)" v-if="item.children.length>0" @click="toggle(item)">
		      <span v-text="item.name"></span>
			</li> 
	        <div v-for="ite in item.children" v-if="item.expanded">
	        	<router-link :to="ite.path" >
			        <li class="list-group-item"  v-text="ite.name" @click="links(ite.path)">
					</li>
		       </router-link>
	        </div>
	  </div>
   </ul>
    <ol class="breadcrumb" id="m-ui-breadcrumb">
	  <li v-for="i in menuPathArr"><a href="#" v-text="i"></a></li>
   </ol>
  </div>
   
</template>
<style lang="scss">
	#menu{
		height:100%;
		background-color:#363636;
		ul{
			   li{
				   width:100%;
				   height:35px;
				   border: none;
				   background-color:#363636;
				   color: #fff;
				   border-radius: 0%;
				   &:hover{
					  background-color: #000;
				   }
				   span{
					   display: inline-block;
					   width: 95%;
				   }
				   &.open{
					   background-color: #4A4A4A;
				   }    
	            }

			a.router-link-exact-active{
				li{
				  background-color: #000;	
				}
				
			}
		}
		
        
	}
	.mui-caret-d-after:after{
					   content:"\f0d7";
				   }
	.mui-caret-r-after:after{
					   content:"\f0da";
				   }
</style>
<script>
import { menuArr } from '../../router/index.es6'
export default{
   data(){
	   return {
		   menuArr:menuArr,
		   menuPathArr:[],
	   }
   },
   computed:{
	  
   },
	mounted(){
	},
	methods:{
		render(){
			 
		},
		links(link){
			let  prtt=/\//,
				 arr=link.split(prtt)
				this.menuPathArr=arr
		},
		menuListStyle(item){
			
		   if(item.expanded){
			   return "fa mui-caret-d-after open"
		   }else{
			   return "fa mui-caret-r-after"
		   }
	   },
		toggle(item){
			item.expanded=!item.expanded
		}
	}
 }

</script>