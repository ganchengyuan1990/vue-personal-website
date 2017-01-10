<template>
    <div class="_full_inner _effect component-me" :class="{'_effect--30':decline}">
        <div class="weui_cells weui_cells_access me-line" v-touch:tap='hrefShopping()'>
            <a class="weui_cell " href="javascript:;">
                <div class="weui_cell_hd">
                    <img src="../assets/images/webwxgeticon.jpg">
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>yangtao</p>
                    <p><span>微信号:&nbsp;&nbsp;</span><span>wxid_yangtao</span></p>
                </div>
                <div class="weui_cell_ft">
                    <img class="_align-middle" style="height:25px;" src="../assets/images/chat-info-qr.png">
                </div>
            </a>
        </div>
        <div class="qrcode" @click="popMention">
            <img src="../assets/images/qrcode.png" alt="">
        </div>
        <mt-popup
          v-show="popupVisible"
          popup-transition="popup-fade">
          请直接将二维码图片保存到手机
        </mt-popup>
        <div class="weather"></div>
        <!-- flag -->
        <!-- <div class="weui_cells weui_cells_access">
            <a class="weui_cell" href="javascript:;">
                <div class="weui_cell_hd"><img src="../assets/images/me_more-my-album.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>相册</p>
                </div>
                <div class="weui_cell_ft"></div>
            </a>
            <a class="weui_cell" href="javascript:;">
                <div class="weui_cell_hd"><img src="../assets/images/me_more-my-favorites.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>收藏</p>
                </div>
                <div class="weui_cell_ft"></div>
            </a>
            <a class="weui_cell" href="javascript:;">
                <div class="weui_cell_hd"><img src="../assets/images/me_more-my-bank-card.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>钱包</p>
                </div>
                <div class="weui_cell_ft"></div>
            </a>
            <a class="weui_cell" href="javascript:;">
                <div class="weui_cell_hd"><img src="../assets/images/me_my-card-package-icon.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>卡包</p>
                </div>
                <div class="weui_cell_ft"></div>
            </a>
        </div>
        flag
        <div class="weui_cells weui_cells_access">
            <a class="weui_cell" href="javascript:;">
                <div class="weui_cell_hd"><img src="../assets/images/me_more-expression.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>表情</p>
                </div>
                <div class="weui_cell_ft"></div>
            </a>
        </div>
        flag
        <div class="weui_cells weui_cells_access">
            <a class="weui_cell" href="javascript:;">
                <div class="weui_cell_hd"><img src="../assets/images/me_more-setting.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>设置</p>
                </div>
                <div class="weui_cell_ft"></div>
            </a>
        </div> -->
    </div>
    <router-view transition="cover"></router-view>
</template>
<script>

import {
    set_iframe_url,
    set_menu_active
} from 'actions'

export default {
    vuex: {
        getters: {

        },
        actions: {
            set_iframe_url,
            set_menu_active
        }
    },
    route: {
        activate({
            from,
            to,
            next
        }) {
            this.set_menu_active(1)
            next()
        },
    },
    data() {
            return {
                decline: false,
                popupVisible: false,
            }
        },
    events: {
        'route-pipe' (_decline) {
            this.decline = _decline
            this.$parent.$emit('route-pipe', _decline)
        }
    },
    methods: {
        hrefShopping(){
            this.set_iframe_url({title:"个人博客",url:"//blog.jasongan.cn/"},()=>{
                this.$router.go({
                    path: "/me/shopping"
                })    
            });
        },
        popMention() {
            this.$data.popupVisible = !this.$data.popupVisible;
        }
    },
    created() {
        $.ajax(
          {
            url: "http://jasongan.cn/php/hello1.php",                                   //跨域到http://www.wp.com，另，http://test.com也算跨域
            type: "GET",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            //dataType: 'jsonp',                          //指定为jsonp类型
            //data: `data=${postStr}`,                    //数据参数
            //jsonp: 'callback',
            success: function (result) {
              $('.weather').html(result);
              debugger
            },
            error: function (msg) {
              //reject(msg);
              $('.weather').html('sdsds');
              debugger
            }
          }
        )
    }
}
</script>
<style scoped>
.component-me {
    padding-top: 1px;
    background-color: #efeff4;
}
.qrcode {
    display: flex;
    align-items: center;
}
.qrcode img {
    width: 80%;
    height: 80%;
    flex: 1;
    margin: 30px;
}
</style>
