<style scoped>
.loginhead {
    height: 0.64rem;
    background: #DFF4F4 url(../../assets/img/login_logo.png) no-repeat 16% center;
    background-size: 2.92rem 0.4rem;
    margin: 0 auto;
    padding: 0.1rem 0.3rem;
}

.login {
    position: relative;
    width: 100%;
    background: url(../../assets/img/loginMain.jpg) no-repeat center;
    background-size: cover;
    margin: 0 auto;
}
.loginMain2{
    position: absolute;
    left: 15%;
    width: 4.85rem;
    height: 5.66rem;
    background: url(../../assets/img/loginMain2.png) no-repeat center;
    background-size: 4.84rem 5.12rem;
    margin: 0 auto;
}

.loginbox {
    -width: 4.8rem;
    height: 3.4rem;
    position: absolute;
    top: 1rem;
    right: 18%;
    border-radius: 0.1rem;
    padding: 0 0.4rem;
    z-index: 99;
    background: #fff
}

 .login-type,.account-val{
    float: right;
    width: 3.36rem;
    height: 3.4rem;
    overflow: auto;
    overflow-x: hidden;
}

.inputmain {
    border-radius: 0.05rem 0.05rem 0 0;
    border-bottom: 0.01rem solid #e4e4e4;
    width: 3.35rem;
    height: 0.7rem;
    line-height: 0.7rem;
    color: #333;
    text-align: center;
    font-size: 0.18rem;
    position: relative;
}
.returnBack{
    position: absolute;
    top: 0;
    left: 0;
    width: 0.65rem;
    height: 0.7rem;
    text-indent: 0.04rem;
    line-height: 0.7rem;
    cursor: pointer;
    color: #666460;
    background: url(../../assets/img/previous.png) no-repeat left center;
    background-size: 0.09rem 0.16rem;
}

.btn_login {
    background: #1dc499;
    color: #fff;
    display: block;
    height: 0.45rem;
    text-align: center;
    line-height: 0.45rem;
    border-radius: 0.05rem;
    margin-top: 0.2rem;
    width: 3.36rem;
    border: none;
    font-size: 0.16rem;
    cursor: pointer;
}
.rememberPsd{
    width: 100%;
    height: 0.18rem;
    line-height: 0.18rem;
    padding-left: 0.26rem;
    margin-top: 0.18rem;
    color: #888580;
    font-size: 0.12rem;
    cursor: pointer;
    background: url(../../assets/img/unRememberPsd.png) no-repeat left center;
    background-size: 0.18rem;
}
.remPsd{
    background: url(../../assets/img/rememberPsd.png) no-repeat left center;
    background-size: 0.18rem;
}
.logininput {
    font-size: 0.14rem;
    height: 0.45rem;
    line-height: 0.45rem;
    border: 0.01rem solid #dcdcdc;
    border-radius: 0.05rem;
    color: #888;
    padding-left: 0.4rem;
    width: 3.36rem;
    margin-top: 0.1rem;
}

.user {
    background: url(../../assets/img/userbg.png) no-repeat 0.1rem center;
    background-size: 0.23rem 0.22rem;
    box-sizing: auto 80%;
}

.password {
    background: url(../../assets/img/passwordbg.png) no-repeat 0.1rem center;
    background-size: 0.23rem 0.22rem;
    box-sizing: auto 80%;
}

.inputbox li {
    margin-top: 0.15rem;
}
/*login-type*/
.login-type{
    background-color: #fff;
}
.login-type ul li{
    float: left;
    width: 1.28rem;
    height: 0.88rem;
    margin-top: 0.1rem;
    position: relative;
    background-position: center 0.18rem!important;
    background-repeat: no-repeat!important;
}
.login-type ul li:hover{
    background-color: #E8F7F2!important;
    border-radius: 0.1rem;
}
.login-type ul li{
    background: url(../../assets/img/login_icon/2-1.png);
    background-size: 0.2rem;
}

.login-type ul li a{
    float: left;
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 0.42rem;
    color: #1BAC7E;
    font-size: 0.12rem;
    text-align: center;
}
.login-type ul li a.activeColor{
    color: #00CA87;
}
.login_foot {
    text-align: center;
    font-size: 0.12rem;
    color: #fff;
    height: 0.4rem;
    line-height: 0.4rem;
    position: absolute;
    bottom: 10%;
    width: 100%;
    left: 0;
}
.login_foot span {
    display: inline-block;
    width: .5rem;
    height: .1rem;
    margin-left: .1rem;
    background: url(../../assets/img/pic.gif) no-repeat center;
    background-size: .5rem .12rem;
}
/*模态框*/
.sel-role .modal .modal-content{
    width: 6rem;
    min-height: 3rem;
    height: auto!important;
    position: relative;
}
.sel-role .modal .modal-content h3{
    text-align: center;
}
.sel-role .modal .modal-content ul li{
    display: block;
    text-align: center;
}
.sel-role .modal .modal-content .conCanBtn{
    position: relative;
    bottom: 0.1rem;
    margin: 0 auto;
    height: 0.34rem;
}
.sel-role .modal .modal-content .conCanBtn button{
    width: 1rem;
    position: absolute;
}
.sel-role .modal .modal-content .conCanBtn .confirmLoginBtn{
    left: 25%;
}
.sel-role .modal .modal-content .conCanBtn .cancelLoginBtn{
    right: 25%;
}

/*scroll*/
.loginbox .roles-list{
    width: 100%;
    height: 2.36rem;
    overflow: auto;
}
.loginbox .roles-list::-webkit-scrollbar{
    width: 0.07rem;
    height: 0.85rem;
    border-radius: 0.1rem;
}
.loginbox .roles-list::-webkit-scrollbar-track-piece{
    background-color:#626262;
}
.loginbox .roles-list::-webkit-scrollbar-thumb:vertical{
    background-color: #3BE8BB;
    -webkit-border-radius: 0.1rem;
}

</style>

<template>
    <div>
        <!-- 顶部 -->
        <div class="loginhead clearfix"></div>
        <!-- 主体 -->
        <div class="login" :style="{'height':loginTop}">
            <div class="loginMain2"></div>
            <div class="loginbox">
                <!-- 登录人员类型 -->
                <div class="login-type" v-show="isGetLoginType">
                    <div class="inputmain">
                        <span class="returnBack" @click="returnLoginEvent">返 回</span>请选择一个登陆角色
                    </div>
                    <ul class="roles-list clearfix">
                        <li v-for="item in role_list" @click="getroleID(item)" data-roleID="{{item.roleId}}">
                            <a href="#">{{item.roleName}}</a>
                        </li>
                    </ul>
                </div>
                <!-- 登录账户-用户名-密码 -->
                <div class="account-val" v-show="isLoginSuccess">
                    <div class="inputmain">家庭医生账户登录</div>
                    <ul class="inputbox">
                        <li>
                            <input class="logininput user" type="text" placeholder="请输入您的账户" v-model="user.UserName" @keydown.enter.stop.prevent="loginAction" />
                        </li>
                        <li>
                            <input class="logininput password" placeholder="密码" v-model="user.PassWord" type="password" autocomplete="off" @keydown.enter.stop.prevent="loginAction" />
                        </li>
                    </ul>
                    <div :class="['psdTag','rememberPsd',{'remPsd':remPsd}]" @click="rememberPassword($event)">记住密码</div>
                    <button @click="loginAction" class="btn_login">授权并登陆</button>
                </div>
            </div>
            <div class="login_foot">版权所有：创业软件股份有限公司 Copyright © 2008-2017 BSOFT<span></span></div>
        </div>
    </div>
</template>
<script>
    var md5 = require("md5");
    var websiteIcon = require('assets/icon.png');
    
    import 'assets/reset.css';
    import 'assets/lib/bootstrap/css/bootstrap.min.css';
    import 'assets/lib/bootstrap/js/bootstrap.min.js';
    import Public from 'assets/public.js'

    export default {
        data() {
            return {
                user: {
                    UserName: "",
                    PassWord: ""
                },
                //屏幕高度
                loginTop: '6.5rem',
                role_list: [],
                //默认记住密码
                cancelPsd: true,
                remPsd: false,
                //保存用户信息
                saveUserInfo: {
                    userAccountName: '',
                    userAccountPwd: '',
                    userStatus: false
                },
                //是否登陆成功
                isLoginSuccess: true,
                //是否获取到人员登录类型
                isGetLoginType: false,
                //角色信息
                roleMsg: {
                    roleId: '',
                    roleName: '',
                    userName: '',
                    tenantId: '',
                    userId: ''
                },
                //记住密码条件
                isRemPsd: false,
                // 记住密码标识
                psdTag: false
            }
        },
        ready () {
          this.windowSizeEvent();
          $(window).resize(()=>{
            this.windowSizeEvent();
          });
          //获取用户名密码
          var userInfors = JSON.parse(localStorage.getItem('saveUserInfo')) || '{}';
          this.user.UserName = userInfors.userAccountName || '';
          this.user.PassWord = Public.aesDecrypt(userInfors.userAccountPwd,'Password!') || '';
          this.remPsd = userInfors.userStatus || false;
          $('head').append('<link rel="shortcut icon" type="image/x-icon" href="'+websiteIcon+'" media="screen" />');
        },
        methods: {
            //window.resize
            windowSizeEvent () {
              this.loginTop = window.innerHeight + 'px';
              var currentDevWidth = $(window).width();
              var ratio = parseInt(currentDevWidth/1376*100);
              var ratio = 100;
              var html = $('html');
                  html.css('font-size',ratio+'px');
            },

            //记住密码
            rememberPassword (event) {
                this.remPsd = !this.remPsd;
            },

            //登录操作
            loginAction () {
                var that = this;
                if (this.user.UserName == "" || this.user.PassWord == "") {
                    Public.ajaxPrompt("账号或密码不能为空")
                } else {
                    // 获取账号角色
                    $.ajax({
                        url: Public.ROLES_URL(),
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify({
                            uid: that.user.UserName,
                            pwd: md5(that.user.PassWord),
                            forAccessToken: true
                        }),
                        success: function (res) {
                            if (res.code == 200) {
                                var data = res.body;
                                that.role_list = data.filter(function(item) {  
                                    return item.roleId != "patient";
                                    return item;
                                });
                                //登录成功可以记住密码
                                if(that.remPsd == true){
                                    that.saveUserInfo.userAccountName = that.user.UserName;
                                    that.saveUserInfo.userAccountPwd = Public.aesEncrypt(that.user.PassWord,'Password!');
                                    that.saveUserInfo.userStatus = true;
                                    localStorage.setItem('saveUserInfo',JSON.stringify(that.saveUserInfo));
                                }else{
                                    localStorage.removeItem('saveUserInfo');
                                };
                                //人员类型选择可见
                                that.isLoginSuccess = false;
                                that.isGetLoginType = true;
                                //存储当前租户信息
                                let currentTenantId = res.body[0].tenantId || '';
                                    sessionStorage.setItem('currentTenantId',JSON.stringify(currentTenantId));
                                //单个角色直接登录
                                if (that.role_list.length == 1) {
                                    $.ajax({
                                        url: Public.LOGIN_URL(),
                                        type: "POST",
                                        dataType: "json",
                                        data: JSON.stringify({
                                            tenantId: currentTenantId,
                                            loginName: that.user.UserName,
                                            rid: res.body[0].roleId,
                                            pwd: md5(that.user.PassWord),
                                            forAccessToken: true
                                        }),
                                        success: function (ress) {
                                            if(ress.code == 200){
                                                sessionStorage.setItem('accessToken', ress.properties.accessToken);
                                                sessionStorage.setItem('roleId', ress.body.roleId);
                                                sessionStorage.setItem('manageUnit', ress.body.manageUnit);
                                                var roleMsg = ress.body;
                                                sessionStorage.setItem('roleMsg', JSON.stringify(roleMsg));
                                                var rd = ress.body.roleId;
                                                that.rolesLimitEvent(rd);
                                            }else{
                                                Public.ajaxPrompt("该角色异常，无法登录！");
                                            };
                                        },
                                        error: function(err) {
                                            that.loginerror = "请输入正确的账号密码";
                                        }
                                    });
                                } else {
                                    $(".selectrole").show(); //显示选择角色
                                }
                            } else {
                                Public.ajaxPrompt("账号或密码错误，请联系管理员");
                            }
                        }
                    })
                }
            },

            //角色获取
            getroleID (item) {
                var that = this;
                $.ajax({
                    url: Public.LOGIN_URL(),
                    type: "POST",
                    dataType: "json",
                    data: JSON.stringify({
                        tenantId: item.tenantId,
                        loginName: that.user.UserName,
                        rid: item.roleId,
                        pwd: md5(that.user.PassWord),
                        forAccessToken: true
                    }),
                    success: function(res) {
                       if(res.code == 200){
                        sessionStorage.setItem('accessToken', res.properties.accessToken);
                        sessionStorage.setItem('roleId', res.body.roleId);
                        sessionStorage.setItem('manageUnit', res.body.manageUnit);

                        that.roleMsg.roleId = item.roleId;
                        that.roleMsg.roleName = item.roleName;
                        that.roleMsg.tenantId = item.tenantId;
                        that.roleMsg.userId = item.userId;
                        that.roleMsg.userName = item.userName;
                        //设置用户信息
                        sessionStorage.setItem('roleMsg', JSON.stringify(that.roleMsg));
                        var rdt = item.roleId;
                        that.rolesLimitEvent(rdt);
                       }else{
                         Public.ajaxPrompt("该角色异常，无法登录！");
                       };
                    },
                    error: function(err) {
                        Public.ajaxPrompt("该角色异常，无法登录！");
                    }
                });
            },

            //返回登陆主界面
            returnLoginEvent () {
                this.isLoginSuccess = true;
                this.isGetLoginType = false;
            },

            //角色权限判断
            rolesLimitEvent (rd) {
                $.when(Public.commonajax("pcn.moduleService","queryModulesByGroupType","['1',"+"'"+rd+"'"+"]")).done(res=>{
                    if(res.body.childModules == undefined){
                        Public.ajaxPrompt("该角色无登录权限！");
                        return false;
                    }
                    if(res.body.childModules.length < 1){
                        Public.ajaxPrompt("该角色无登录权限！");
                        return false;
                    }else{
                        window.location.replace("welcome.html");
                    }
                });
            }
        }//Methods
    }
</script>

