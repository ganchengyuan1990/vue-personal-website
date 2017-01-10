<template>
    <div class="_full_inner _effect component-me" :class="{'_effect--30':decline}">
        <div class="weather"></div>
        <div class="weui_cells weui_cells_access me-line">
            <div class="title"   v-touch:tap='hrefShopping()'>个人简介</div>
           <!--  <div class="personalInfo">个人信息</div> -->
            <a class="weui_cell " href="javascript:;">
                <div class="weui_cell_hd">
                    <img src="../assets/images/webwxgeticon.jpg">
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>阿追</p>
                    <p><span>微信号:&nbsp;&nbsp;</span><span>Jason19900915</span></p>
                </div>
                <div class="weui_cell_ft">
                    <img class="_align-middle" style="height:25px;" src="../assets/images/chat-info-qr.png" @click="popQrcode">
                </div>
            </a>
            <div class="github">
                <p>Gitub: &nbsp;&nbsp; <a href="https://github.com/ganchengyuan1990">github.com/ganchengyuan1990</a></p>
                <!-- <p>微信公众号管理: &nbsp;&nbsp; http://weixin.jasongan.cn</p> -->
            </div>

            <div class='company'>
                <h1>公司项目</h1>
                <ul class="programs">
                    <li>
                        <div class="weui_cell_hd">
                            <img src="../assets/images/webwxgeticon.jpg">
                        </div>
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>登录页面</p>
                            <p><a href="http://m.feiniu.com/login/index.html">m.feiniu.com/login/index.html</a></p>
                        </div>
                    </li>
                    <li> 
                        <div class="weui_cell_hd">
                            <img src="../assets/images/webwxgeticon.jpg">
                        </div>
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>订单列表页面</p>
                            <p><a href="http://m.feiniu.com/my/order/index.html">m.feiniu.com/my/order/index.html</a></p>
                        </div>
                    </li>
                    <li>
                        <div class="weui_cell_hd">
                            <img src="../assets/images/webwxgeticon.jpg">
                        </div>
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>领券中心页面(APP内嵌)</p>
                            <p><a href="http://m.feiniu.com/my/recharge/vouchermark.html">recharge/vouchermark.html</a></p>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
        
        <mt-popup
          v-show="qrcodeVisible"
          popup-transition="popup-fade"
          modal="true"
          close-on-click-modal="true"
          modal-class="modal">
          <div class="qrcode" @click="popMention" v-show="qrcodeVisible">
            <img src="../assets/images/qrcode.png" alt="">
          </div>
        </mt-popup>
        
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

// import MonthlyIncome from 'path/to/component/MonthlyIncome'

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
                qrcodeVisible: false,
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
        },
        popQrcode(e) {
            debugger
            e.stopPropagation(); 
            this.$data.qrcodeVisible = !this.$data.qrcodeVisible;
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
            success: function (e) {
                var result = JSON.parse(e);
                // $('.weather').html(result);
                $('.weather').html("今天" + result.weatherinfo.city + "的气温是" + result.weatherinfo.temp + "度, " + result.weatherinfo.WD + result.weatherinfo.WS + ", 湿度" + result.weatherinfo.SD);
            },
            error: function (e) {
              //reject(msg);
              var a = {"weatherinfo":{"city":"太仓","cityid":"101190408","temp":"17","WD":"南风","WS":"2级","SD":"47%","WSE":"2","time":"17:05","isRadar":"0","Radar":"","njd":"暂无实况","qy":"1017","rain":"0"}};
              debugger
              $('.weather').html("今天" + a.weatherinfo.city + "的气温是" + a.weatherinfo.temp + ", " + a.weatherinfo.WD + a.weatherinfo.WS + ", 湿度" + a.weatherinfo.SD);
              // debugger
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
    margin: 1rem;
}
.weui_cells {
    margin-top: 0 !important;
}
.weather {
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    color: #999;
    /*position: fixed;
    bottom: 3rem;*/
    width: 100%;
}
.programs {
    /*border: 1px solid #333;*/
}
.programs li{
    padding: 5px 15px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
 .github p {
    padding: 5px 15px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    font-size: 0.9rem;
 }
.company h1{
    text-align: center;
    margin: 0rem 1rem 0.5rem 1rem;
    border-bottom: 1px solid #444;
    padding: 0.5rem;
}
.title {
    border-bottom: 1px solid #444;
    margin: 0 1rem;
    color: #000;
    font-weight: 600;
}
.title:after {
    border-color: #333; 
}
section.app-content {
    overflow: scroll !important;
}
</style>
