<template>
    <div class="container">
        <div class="bg"  :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
        <van-nav-bar
            :title="$t('question:SetUp')"
            left-text=""
            right-text=""
            left-arrow
            @click-left="onClickSave"
        />
        <div class="box">
            <div class="item">
                <div class="item-index">
                    <van-cell is-link :title="$t('question:LoginUsername')" @click="isNameShow = true">
                        <div>{{username ? username : $t('question:pleaseEnterUsername')}}</div>
                    </van-cell>
                    <van-action-sheet v-model="isNameShow" title="" close-on-click-action class="van-sheet">
                        <van-nav-bar
                            :title="$t('question:setUsername')"
                            :left-text="$t('question:Cancel')"
                            :right-text="isUsername ? '' : $t('question:Save')"
                            @click-left="isNameShow = false"
                            @click-right="onClickSaveUserInfo('username', username)"
                        />
                            <span class="hint" v-if="!isUsername || isUsername == ''">{{ $t('question:AccountSetOnce') }}</span>
                            <span class="hint" v-else>{{ $t('question:ModificationLimitReached') }}</span>
                            <van-cell-group>
                                <van-form>
                                    <van-field 
                                        v-model="username" 
                                        label="" 
                                        :placeholder="$t('question:pleaseEnterUsername')" 
                                        :disabled="isUsername && isUsername !== '' ? true : false" 
                                        :rules="[{ validator: usernameValidator, message: $t('question:UsernameRegistration-01') }]"
                                    />
                                </van-form>
                            </van-cell-group>
                            <span class="hint">{{ $t('question:UsernameRegistration-02') }}</span>
                    </van-action-sheet>
                </div>
                <div class="item-index">
                    <van-cell is-link :title="$t('question:LoginPassword')" @click="isPasswordShow = true">
                        <!-- <div>{{password ? password : '请输入登录密码'}}</div> -->
                    </van-cell>
                    <van-action-sheet v-model="isPasswordShow" title="" close-on-click-action class="van-sheet">
                        <van-nav-bar
                            :title="$t('question:setPassword')"
                            :left-text="$t('question:Cancel')"
                            right-text="$t('question:Save')"
                            @click-left="isPasswordShow = false"
                            @click-right="onClickSaveUserInfo('password', password)"
                        />
                            <van-cell-group>
                                <van-form>
                                    <van-field 
                                        type="password"
                                        v-model="password" 
                                        label="" 
                                        :placeholder="$t('question:EnterNewPassword')" 
                                        :rules="[{ validator: passwordValidator, message: $t('question:PleaseEnterCorrectPassword') }]"
                                    />
                                    <van-field
                                        type="password" 
                                        v-model="qr_password" 
                                        label="" 
                                        :placeholder="$t('question:EnterNewPasswordAgain')" 
                                        :rules="[{ validator: qrPasswordValidator, message: $t('question:TheTwoEnteredPasswordsDoNotMatch') }]"
                                    />
                                </van-form>
                            </van-cell-group>
                            <span class="hint">{{ $t('question:PasswordRegistration-01') }}</span>
                    </van-action-sheet>
                </div>
                <div class="item-index">
                    <van-cell is-link :title="$t('question:walletAddress')" click="connectWalletClick()">
                        <div>{{ addressStr() }}</div>
                    </van-cell>
                </div>
                <div class="item-index">
                    <van-cell is-link :title="$t('question:signOut')" @click="LoginOut">
                        <!-- <div>{{password ? password : '请输入登录密码'}}</div> -->
                    </van-cell>
                </div>
            </div>
        </div>
        <van-dialog v-model="usernameShow" :title="$t('question:UsernameMerge')" show-cancel-button :before-close="onBeforeClose" @confirm="margintSubmit">
            <div class="merge-box">
                <van-field
                    v-model="username"
                    :name="$t('question:username')"
                    :label="$t('question:username')"
                    :placeholder="$t('question:username')"
                    readonly
                />
                <van-field
                    v-model="m_password"
                    type="password"
                    :name="$t('question:password')"
                    :label="$t('question:password')"
                    :placeholder="$t('question:password')"
                />
            </div>
        </van-dialog>

        <van-overlay :show="loadingShow" @click="loadingShow = false">
            <div style="display: flex;align-items: center;justify-content: center;height: 100%;">
                <van-loading size="24px" vertical color="#0094ff">{{ $t('question:TheAnswerIsBeingCalculated') }}...</van-loading>
            </div>
        </van-overlay>
    </div>
</template>
<script>
import axios from 'axios'
import { transformFile } from '@/utils/tools'
import { mapState } from 'vuex'
import { Dialog } from 'vant';
import { connectInfo , fetchAccountData, disconnectWallet } from '@/wallet/connect/metaMask'
export default {
    name: 'userSetup',
    data() {
        return {
            active: 2,
            avatarFileObj: "", //压缩后的头像文件对象
            isNameShow: false, //名字 弹框
            isPasswordShow: false, //小红书号 弹框
            username: '',
            isUsername: false, //默认没有设置
            password: '',
            qr_password: '',
            m_password: '',
            showBirthdayPicker: false,
            showAreaPicker: false,
            isconfirm: true,
            pattern: /\d{6}/,
            // usernameValidator: /[a-zA-Z]([-_a-zA-Z0-9_]{6,20})/,
            usernameShow: false,
            loadingShow: false,
        }
    },
    created() {
        // this.getUserInfo();
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
            const {userId, apiUrl, address} = this
            return {
                userId, apiUrl, address
            };
        },
    },
    watch: {
        changeData: {
            immediate: true,
            handler(val){
                console.log(val);
                if(val.userId > 0) {
                    // this.getCommentList(true);
                    this.getUserInfo();
                }
            }
        },
    },
    components: {
        [Dialog.Component.name]: Dialog.Component,
    },
    mounted() {
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
        async getUserInfo() { //获取用户信息
            await axios.get(this.apiUrl + '/Api/User/getUserInfo', {
                params: {
                    userId: this.userId
                }
            }).then(async (json) => {
                if (json && json.code == 10000) {
                    console.log(json.data);
                    if(json.data.username && json.data.username !== '') {
                        this.isUsername = true;
                    }
                    this.username = json.data.username;
                } else {
                    this.$notify({ type: 'danger', message: 'Error' });
                }
                return;
            }).catch((error) => {
                this.$notify({ type: 'danger', message: error });
            });
        },
        onClickSure() {
            this.isNameShow = false;
        },
        onClickSave() { //编辑资料
            this.$router.go(-1);
        },
        async onClickSaveUserInfo(name, value) { //修改用户信息
            if(name === 'username') {
                if(!this.usernameValidator(this.username)) {
                    return false;
                }
            }
            if(name === 'password') {
                if(!this.passwordValidator(this.password) || !this.passwordValidator(this.qr_password)) {
                    return false;
                }
            }
            const params = {
                userId: this.userId,
                [name]: value,
            };
            await axios.post(this.apiUrl + '/Api/User/saveUserInfo', params).then(async (json) => {
                if (json && json.code == 10000) {
                    this.isNameShow = false;
                    this.isPasswordShow = false;
                    this.getUserInfo();
                    this.$notify({ type: 'success', message: 'Success' });
                } else if (json && json.code == 10001) {
                    this.usernameShow = true;
                    this.$notify({ type: 'warning', message: json.msg });
                } else {
                    this.$notify({ type: 'warning', message: json.msg });
                }
                return;
            }).catch((error) => {
                this.$notify({ type: 'danger', message: error });
            });
            
        },
        onBeforeClose(action, done) {
            if(action === 'confirm') {
                return done(false);
            } else {
                return done();
            }
        },
        async margintSubmit() { //合并账号 确认事件
            if(this.m_password && this.m_password !== '') {
                let params = {
                    userId: this.userId,
                    username: this.username,
                    password: this.m_password,
                };
                // const loading = this.$loading({
                //     lock: true,
                //     text: '账号合并中...',
                //     spinner: 'el-icon-loading',
                //     background: 'rgba(0, 0, 0, 0.7)'
                // });
                this.loadingShow = true;
                await axios.post(this.apiUrl + '/Api/User/marginUsername', params).then(async (json) => {
                    // loading.close();
                    this.loadingShow = false;
                    if (json && json.code == 10000) {
                        this.getUserInfo();
                        this.usernameShow = false;
                        this.isNameShow = false;
                        this.$notify({ type: 'success', message: 'Success' });
                    } else {
                        this.$notify({ type: 'warning', message: json.msg });
                        return false;
                    }
                    return;
                }).catch((error) => {
                    this.$notify({ type: 'danger', message: error });
                });
            } else {
                this.$notify({ type: 'danger', message: '请输入密码' });
            }
            return false;
        },
        onConfirm(date) {
            this.birthday = this.timeFormat(date);
            this.showBirthdayPicker = false;
        },
        addressStr(){
            // console.log(this.address);
            if(!this.address || this.address == undefined || this.address == '') {
                return "Connect Wallet";
            } else {
                return this.address.substring(0, 4) + "***" + this.address.substring(this.address.length - 3)
            }
        },
        async connectWalletClick() { //连接钱包
            if(window.ethereum == undefined) {
                this.$notify({ type: 'warning', message: 'You do not have metamask installed' });
                return false;
            }
            if(!this.address || this.address == undefined || this.address == '') {
                await fetchAccountData();
            } 
            else {
                await disconnectWallet();
            }
        },
        async LoginOut() { //用户退出登录
            await disconnectWallet();
            this.$notify({ type: 'success', message: '退出成功' });
            setTimeout(() => {
                this.$router.push('/login');
            }, 1000)

        }

    },
}
</script>
<style lang="scss" scoped>
    .container {
        /deep/ {
            .bg {
                background-image: url("../../assets/answer/home-bg.png");
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
            .box {
                width: 90%;
                height: 80vh;
                margin: 0 auto;
                background-color: #05D2FA;
                margin-top: 30px;
                border-radius: 20px;
                .content {
                    padding: 16px 16px 160px;
                }
                .van-popup--bottom.van-popup--round {
                    height: 100vh;
                    border-radius: 0;
                }
                .van-uploader__preview-delete {
                    // right: 10px;
                }
                .van-action-sheet {
                    max-height: 100%;
                }
                .item {
                    .item-index {
                        .van-cell {
                            border-radius: 20px;
                            // background-color: #05D2FA;
                            // color: #fff;
                            .van-cell__value {
                                color: #fff;;
                            }
                        }
                        .van-cell--clickable {
                            height: 50px;
                            line-height: 30px;
                            vertical-align: middle;
                            background-color: #05D2FA;
                            color: #fff;
                        }
                        .van-popup {
                            background-color: #05D2FA;
                            .van-nav-bar__text {
                                color: #fff;
                            }
                        }
                        .hint {
                            color: #fff;
                            padding-left: 15px;
                            font-size: 15px;
                        }
                        .van-cell__left-icon, .van-cell__right-icon {
                            line-height: 30px;
                            color: #fff;
                        }
                        .van-sheet {
                            .van-cell, .van-picker {
                                width: 95%;
                                border-radius: 15px;
                                margin: 0 auto;
                            }
                            .van-cell-group {
                                margin: 10px;
                                border-radius: 15px;
                                .van-cell {
                                    border-radius: 15px;
                                }
                            }
                            .van-hairline--top-bottom::after{
                                border-width: inherit !important;
                            }
                        }
                        .merge-box {
                            padding: 20px;
                            .van-field__label {
                                width: 50px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
