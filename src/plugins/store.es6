import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        routePath:{
            type:'Array',
            path:['bar','foo']
        }
    },
    mutations:{
        routePath(state,payload){
            state.routePath.path=payload.path
        }
    }
})
export { store }