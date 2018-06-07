<template>
    <div id="addContent" class="container-pull">
        <mavon-editor v-model="value" @save="save" style="height:700px;"/>
    </div>    
</template>
<script>
    import Vue from 'vue'
    import $ from "jquery"
    import mavonEditor from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import axios from 'axios'
    Vue.use(mavonEditor)
    export default {
        data(){
            return {
                value:''
            }
        },
        mounted(){
            let _this=this
        },
        methods:{
            save(value,render){
                axios.post('/addcontent',{
                        name:'Edit',
                        content:render
                })
            }
        }
        
    }
</script>

