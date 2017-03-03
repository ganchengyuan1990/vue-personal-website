<template>
    <div class="menu menu-transition hide_it"> 
        <div>友情链接</div>
        <ul> 
            <li @click="hrefOtherBlog">自己的博客</li> 
            <li @click="hrefOtherBlog">小胡子哥</li> 
            <li @click="hrefOtherBlog">damonare</li> 
        </ul> 
    </div>
    <div class="menu-mask hide_it" @click="maskClose"></div>
</template>
<script>

import {
    set_iframe_url,
    set_menu_active,
    get_weather_info
} from 'actions'


export default {
    vuex: {
        getters: {

        },
        actions: {
            set_iframe_url,
            set_menu_active,
            get_weather_info
        }
    },
    methods: {
        hrefOtherBlog(e){

            document.getElementsByClassName('menu-mask')[0].classList.add('hide_it');
            document.getElementsByClassName('menu')[0].classList.add('hide_it');

            var targetUrl = '';

            if(e.target.innerHTML == "小胡子哥"){
                targetUrl = "//www.barretlee.com/entry/";
            } else if(e.target.innerHTML == "damonare"){
                targetUrl = "//damonare.github.io";
            } else if(e.target.innerHTML == "自己的博客"){
                targetUrl = "//ganchengyuan1990.github.io/blog";
            }


            this.set_iframe_url({title:e.target.innerHTML, url:targetUrl},()=>{
                this.$router.go({
                    path: "/me/shopping"
                })    
            });
        },     

        maskClose(e) {
            e.target.classList.add('hide_it');
            document.getElementsByClassName('menu')[0].classList.add('hide_it');
        }   
    },
}

</script>
<style scoped>
.menu-mask {
    position: fixed;
    z-index: 99;
    top: 60px;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.4);
    -webkit-transition: .2s linear;
    transition: .2s linear;
}
.hide_it {
    display: none;
}

.menu {
    position: absolute;
    z-index: 100;
    width: 180px;
    top: 60px;
    right: 0;
    bottom: 0;
    background-color: #fff;
    padding: 30px 0 0 25px
}

.menu div {
    text-align: center;
    margin-bottom: 25px;
}

.menu ul {
    list-style: none
}

.menu ul li {
    height: 45px;
    line-height: 45px;
    color: #333;
    font-size: 16px;
    border-bottom: 1px solid #eee
}

.menu ul a {
    text-decoration: none;
    color: #333;
    display: block
}

</style>
