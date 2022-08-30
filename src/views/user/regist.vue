<template>
<div class="container">
    <div class="bg"  :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
    <div class="regist">
        <div class="bg-radius"></div>
        <div class="title">用户名注册</div>
        <!-- <div class="subtitle">未注册的手机号验证后将自动注册</div> -->
        <van-form @submit="onSubmit" class="form">
            <div class="box">
                <!-- <div class="li">
                    <van-field
                        class="phone"
                        v-model="phone"
                        name="手机号"
                        placeholder="请输入手机号"
                        clearable
                        maxlength="11"
                        :rules="[{ required: true, message: '' }]"
                    />
                </div>
                <div class="li">
                    <van-field
                    class="code"
                    v-model="code"
                    clearable
                    center
                    type="code"
                    name="验证码"
                    placeholder="请输入验证码"
                    :rules="[{ required: true, message: '' }]"
                />
                    <div class="codeText" @click="sendVerify" :style='{"pointer-events": !is_send&&!phone?"none":"auto","background": (!phone?"#C0C0C0":"#5394FF")}'>{{verify_title}}</div>
                </div> -->
                <div class="hint" style="margin-top:44px;margin-bottom:10px;">用户名只能设置一次，不能进行修改</div>
                <div class="li">
                    <van-field
                        class="phone"
                        v-model="username"
                        name="用户名"
                        placeholder="请输入用户名"
                        clearable
                        :rules="[{ validator: usernameValidator, message: '请输入正确的用户名' }]"
                    />
                </div>
                <div class="hint">6-15个字符，仅可使用英文（必须）、数字、下划线</div>
                <br>
                <div class="li">
                    <van-field
                    class="code"
                    v-model="password"
                    clearable
                    center
                    type="password"
                    name="密码"
                    placeholder="请输入密码"
                    :rules="[{ validator: passwordValidator, message: '请输入正确的密码' }]"
                />
                </div>
                <div class="hint">6-16位密码，同时包含字母和数字</div>
                <div class="li">
                    <van-field
                    class="code"
                    v-model="qr_password"
                    clearable
                    center
                    type="password"
                    name="密码"
                    placeholder="请确认密码"
                    :rules="[{ validator: qrPasswordValidator, message: '两次输入的密码不一致' }]"
                />
                </div>
                <div v-if="re_address && re_address !== ''" class="hint">邀请地址：{{re_address}}</div>
            </div>
            <div style="padding: 20px;">
                <van-button class="regist-button" round block type="info" native-type="submit">注册</van-button>
                <van-row class="link" style="margin-top: 10px;">
                    <van-col span="24" align="center"><router-link to="/login">用户登录</router-link></van-col>
                </van-row>
            </div>
        </van-form>
        <!-- <div class="otherLogin">其他登录方式</div>
        <div class="thirdLogin">
            <img src="../assets/qq.png" alt="" srcset="">
            <img src="../assets/wechat.png" alt="" srcset="">
        </div> -->  
    </div>
</div>
</template>

<script>
import axios from 'axios'
import { Toast,Dialog } from 'vant';
import { mapState } from 'vuex'
import { getQueryString } from "@/utils/tools.js";
var that;
export default {
    name: 'login',
    props: {
        msg: String
    },
    data(){
        return{
            username: '',
            phone: '',
            code: '',
            password: '',
            qr_password: '',
            verify_title: '获取验证码',
            is_send: false,
            ifClick: true,
            time:60,
            re_address: '',
        }
        
    },
    created() {
        // this.getUserInfo();
        this.re_address = getQueryString('re');
    },
    computed: {
        ...mapState({
            address:state=>state.base.address,
            userId:state=>state.base.userId,
            isConnected:state=>state.base.isConnected,
            apiUrl:state=>state.base.apiUrl,
            isMobel:state=>state.comps.isMobel,
        }),
        changeData() {
            const {userId} = this
            return {
                userId
            };
        },
    },
    watch: {
        'phone': function(newVal){
            console.log(newVal);
        },
        'code': function(newVal){
            console.log(newVal);
        },
        changeData: {
            immediate: true,
            handler(val){
                console.log(val);
                if(val.userId > 0) {
                    setTimeout(() => {
                        this.$router.push("/home/index");
                    }, 1000)
                }
            }
        },
    },
    components: {
    },
    methods: {
        usernameValidator(val) { //用户名校验
            const reg = /^[a-zA-Z]([-_a-zA-Z0-9_]{5,14})$/;
            if(!reg.test(val)){   
                return false
            }  else {
                return true;
            }
        },
        passwordValidator(pass) { //密码校验
            const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
            if(!reg.test(pass)){   
                return false
            }  else {
                return true;
            }
        },
        qrPasswordValidator(pass) {
            if(pass !== this.password) {
                return false;
            } else {
                return true;
            }
        },
        onSubmit(values) {
            // console.log('submit', values);
            if(this.username == "") {
                Toast('请输入用户名');
                return;
            } 
            if(this.password == "") {
                Toast('请输入密码');
                return;
            }
            if(this.qr_password == "") {
                Toast('请再次输入密码');
                return;
            }
            if(this.password !== this.qr_password) {
                Toast('两次密码输入不一致');
                return;
            }
            this.save();
        },
        async save() {
            // localStorage.setItem('mobile', this.mobile)
            // let re_address = getQueryString('re');
            let paramData = {
                username: this.username.trim(),
                password: this.password.trim(),
                qr_password: this.qr_password.trim(),
                invite_address: this.re_address && this.re_address !== '' ? this.re_address : ''
            }
             await axios.post(this.apiUrl + '/Api/User/createAccount', paramData).then(async (json) => {
                console.log(json)
                if (json && json.code == 10000) {
                    this.$notify({ type: 'success', message: '注册成功' });
                    setTimeout(() => {
                        this.$router.push('/login');
                    },2000);
                } else if (json && json.code == 10001   ) {
                    this.$notify({ type: 'warning', message: json.msg });
                    return false;
                } else {
                    this.$notify({ type: 'warning', message: '注册失败' });
                    return false;
                }
            }).catch((error) => {
                this.$notify({ type: 'danger', message: error });
            });

        },
        isMobile: function(mobile) {
            var regex = /^1[3|4|5|6|7|8][0-9]\d{8}$/;
            if (regex.test(mobile)) {
                return true;
            } else {
                return false;
            }
        },
        // 获取验证码倒计时
        verifyTime() {
            if (this.time > 0) {
                this.time--
                this.is_send = true
                this.verify_title = this.time + 's'
                this.timer = setTimeout(() => {
                    this.verifyTime()
                },1000)
            } else {
                setTimeout(() => {
                    this.ifClick = true;
                },1000)
                this.is_send = false
                this.time = 60
                this.verify_title = '再次发送'
                clearTimeout(this.timer)
            }
        },
        // 发送验证码
        sendVerify() {
            if(!this.ifClick){
                return;
            }
            var phone = this.phone.trim()
            if (phone == '') {
                Toast('请输入手机号');
                
                return false;
            } else if (!this.isMobile(phone)) {
                Toast('请输入有效的11位手机号码');
                return false
            }
            this.ifClick = false;
            var paramData = {
                mobile :phone,
                type:1
            }
            this.$post('/user/mobile/captcha', paramData).then((res) => {
                // console.log(res)
                if(res.code == 0) {
                    this.verifyTime();
                } else {
                    setTimeout(() => {
                        this.ifClick = true;
                    },1000)
                    this.is_send = false
                    this.time = 60;
                    this.verify_title = '再次发送'
                    clearTimeout(this.timer)
                    Toast(res.msg);
                }
            })
        },
        agreement(){
            Dialog.alert({
            messageAlign:'left',
            message: '欢迎您使用小a阅读。'+
                '为保障您在使用小a阅读各项服务时的利益，请您仔细阅读以下条款，当您注册成功，即意味着您完全接受本协议项下的全部条款。<br>'+
                '<span style="font-weight:bold;">一、您的权力与义务</span><br>'+
                '1.您在申请本服务过程中，需要填写一些必要的信息，请保持这些信息的真实、准确、合法、有效并注意及时更新，以便小a阅读向您提供及时有效的帮助，或更好地为您提供服务。根据相关法律法规和政策，请您填写真实的身份信息。若您填写的信息不完整或不准确，则可能无法使用本服务或在使用过程中受到限制。<br>'+
                '2.您同意遵守本协议，您了解本协议的内容可能会不时变更。如您不同意小a阅读对本协议所做的修改，您有权停止使用本系统，并要求小a阅读与您进行服务费结算（如有），此种情况，您需要自行备份业务数据。如您继续使用本系统，则视为您接受小a阅读对本协议做的修改。<br>'+
                '3.您在使用本服务前需要注册一个帐号，您对自己使用本过程产生的账号、密码、数据等的完整性和保密性负责。因您维护不当或保密不当致使上述账号、密码、数据等丢失或泄漏所引起的一切损失和后果均由您自行承担。<br>'+
                '4.您不得利用本平台制作、复制、发布，传播法律、法规和政策禁止的内容，不得利用本平台制作、复制、发布、传播干扰本平台正常运营，以及侵犯其他用户或第三方合法权益的内容。<br>'+
                '5.因您违反本协议或相关的服务条款的规定，导致或产生的任何第三方向小a阅读、合作公司或关联公司主张任何索赔或要求，包括合理的律师费，若小a阅读与合作公司、关联公司赔偿后，有权向您追偿，您有义务赔偿小a阅读与合作公司、关联公司的所有损失。<br>'+
                '6.小a阅读有权依合理判断对违反有关法律法规或本协议规定行为进行处罚，对违法违规的任何人士采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应独自承担由此产生的一切法律责任。<br>',
            }).then(() => {
            // on close
            });
        },
        privacy(){
            Dialog.alert({
            messageAlign:'left',
            message: '隐私协议<br>如您有关于网络信息安全的投诉和举报，或您对本《隐私政策》、您的信息的相关事宜有任何问题、意见或建议',
            }).then(() => {
            // on close
            });
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
    /deep/ {
        .bg {
            background-image: url("../../assets/answer/2.jpg");
            background-repeat: no-repeat;
            background-attachment: fixed;  /*关键*/
            background-position: center;
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -10;
            position: fixed;
            filter: blur(2px);
        }
        .van-nav-bar {
            background-color: transparent;
            .van-nav-bar__left {
                i {
                    color: #fff;
                    font-size: 20px;
                }
            }
            .van-nav-bar__title {
                color: #fff;;
            }
        }
        .regist{
            // text-align: left;
            margin-top: 20px;
            // margin: 0 auto;
            .form {
                width: 90%;
                background-color: #AE8BF5;
                margin: 0 auto;
                border-radius: 20px;
                .box {
                    padding-top: 5px;
                }
            }
            .van-form {
                font-size: 16px;
            }
            .title{
                margin-left: 30px;
                color:#fff;
                font-size: 28px;
            }
            .subtitle{
                font-size: 12px;
                color:#999;
                margin-left: 30px;
                margin-top: 5px;
            }
            .li{
                margin-left:30px;
                margin-right: 30px;
                position: relative;
            }
            .hint {
                color: #fff;
                padding-left: 40px;
                margin-top: 10px;
                font-size: 13px;
            }
            .phone{
                padding-left:15px;
                padding-right:15px;
                background: #F9F9F9;
                border-radius: 25px;
                // margin-top: 44px;
                width:315px;
            }
            .code{
                padding-left:15px;
                padding-right:15px;
                background: #F9F9F9;
                border-radius: 25px;
                margin-top: 14px;
                width:315px;  
            }
            
            .van-cell::after{
                left: 30px;
                right:30px;
            }
            .codeText{
                position: absolute;
                top:50%;
                right:10px;
                margin-top: -15px;
                font-size: 13px;
                width:90px;
                text-align: center;
                color:#fff;
                background: #C0C0C0;
                border-radius: 25px;
                height:30px;
                line-height: 30px;
            }
            .thirdLogin{
                text-align: center;
            img{
                width: 44px;
                margin: 20px;
            }
            }
            .otherLogin{
                font-size: 12px;
                color:#999;
                margin-top: 5px;
                text-align: center;
            }
            .loginButton{
                margin: 30px auto;
                display: block;
                width:315px;
                height:44px;
                border-radius: 25px;
                background: #C0C0C0;
                color:#fff;
                text-align: center;
                pointer-events: none;
            }
            .loginButton.disableds{
                background: #5394FF;
                pointer-events: auto;
            }
            .tips{
                position: absolute;
                bottom: 30px;
                text-align: center;
                width:100%;
                color: #666;
                span{
                    color: #5394FF;
                }
            }
            .regist-button {
                background-color: #8C1AF5;
                border: 0;
            }
        }
    }
}
</style>
