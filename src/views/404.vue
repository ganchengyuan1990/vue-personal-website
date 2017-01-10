<template>
    <div class="_full_router component-xxx">
        <div class="_full_inner">
            <top-handle
                :back-text="topModel.backText"
                :cur-text="topModel.curText"
                :decline="decline"
                >
            </top-handle>
            <div class="_cover-content _effect"
                :class="{'_effect--30':decline}">
                <div><div v-link="{path:'/'}">返回首页</div></div>
            </div>
        </div>
        <!-- router -->
        <router-view  transition="cover"></router-view>
    </div>
</template>
<script>
// import {} from 'getters'
// import {} from 'actions'

import topHandle from 'topHandle'

export default {
    vuex:{
        getters:{

        },
        actions:{

        }
    },
    route:{
        activate({from,to,next}) {
            next()
        },
        deactivate({from,to,next}){
            next()
        }
    },
    data() {
        return {
            decline:false,
            topModel:{
                backText:'返回',
                curText:'404',
                nextPath:{path:''},
                nextIcon:''
            }
        }
    },
    methods:{
    },
    events:{
        'route-pipe'(_decline){
            this.decline = _decline
            this.$parent.$emit('route-pipe',_decline)
        }
    },
    created(){

    },
    ready(){

    },
    components: {
        topHandle
    },
}
</script>
<style scoped>
    
</style>


        