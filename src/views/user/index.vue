<template>
    <div class="container">
        <div class="bg"  :style="{backgroundSize:isMobel ? '100% 100%' : ''}">
        </div>
        <van-nav-bar
            :title="$t('question:setUp')"
            left-text=""
            right-text=""
            left-arrow
            @click-left="onClickSave"
        />
        <div class="box">
            <div class="avator">
                <van-uploader ref="avatarRef" class="uploader" v-model="fileList" accept="image/*" :deletable="true" max-count="1" :after-read="afterReadUpload" :preview-full-image="false" />
                <!-- <van-uploader class="uploader" accept="image/*" :deletable="false" :preview-full-image="false" max-count="1" :after-read="afterReadUpload" >
                    <img class="preview" :src="avatar" width="50" alt="" v-if="avatar">
                    <van-icon class="upload-icon" name="photograph" v-else />
                </van-uploader> -->
                <!-- <img src="@/assets/my-bg.jpeg" alt="" width="100"> -->
                <!-- <van-uploader ref="avatarRef" class="van-uploader__input" :after-read="afterReadUpload"> -->
                    <!-- <div class="photograph">
                        <img src="@/assets/camera-white.png" alt="">
                    </div> -->
                <!-- </van-uploader> -->
            </div>
            <div class="item">
                <div class="item-index">
                    <van-cell is-link :title="$t('question:walletAddress')" @click="connectWalletClick()">
                        <div v-if="window.ethereum">{{ addressStr() }}</div>
                        <div v-else-if="!window.ethereum && !userId" @click="loginEvent()">{{ $t('question:logInRegister') }}</div>
                        <div v-else>{{address ? subAddress(address) : 'Connect Wallet'}}</div>
                    </van-cell>
                </div>
                <div class="item-index">
                    <van-cell is-link :title="$t('question:nickname')" @click="isNameShow = true">
                        <div>{{nickname ? nickname : $t('question:enterName')}}</div>
                    </van-cell>
                    <van-action-sheet v-model="isNameShow" title="" close-on-click-action class="van-sheet">
                        <van-nav-bar
                            :title="$t('question:editName')"
                            :left-text="$t('question:Cancel')"
                            :right-text="$t('question:Save')"
                            @click-left="isNameShow = false"
                            @click-right="onClickSaveUserInfo('nickname', nickname)"
                        />
                        <van-cell-group>
                            <van-field v-model="nickname" label="" :placeholder="$t('question:addName')" />
                        </van-cell-group>
                        <span class="hint">{{ $t('question:editNamePlease') }}</span>
                    </van-action-sheet>
                </div>
                <div class="item-index">
                    <van-cell is-link :title="$t('question:username')" @click="setUpInfo()">
                        <div>{{username ? username : 'Unnamed'}}</div>
                    </van-cell>
                </div>
                <!-- <div class="item-index">
                    <van-cell is-link :title="$t('question:accountBinding')" @click="setUpInfo()"></van-cell>
                </div> -->
                <!-- <div class="item-index">
                    <van-cell is-link :title="'USDT' + $t('question:Balance')" @click="getUsdtDepositWithdraw()">
                        <div>{{ toFixed(usdt_balance, 4) }} USDT</div>
                    </van-cell>
                </div>
                <div class="item-index">
                    <van-cell is-link :title="'SCT' + $t('question:Balance')" @click="getSCTDepositWithdraw()">
                        <div>{{ toFixed(sct_balance, 4) }} SCT</div>
                    </van-cell>
                </div> -->
                <div class="item-index">
                    <van-cell is-link :title="$t('question:language')" @click="isLanguageShow = true">
                        <div v-if="language === 'zh'">??????</div>
                        <div v-else>English</div>
                    </van-cell>
                    <van-action-sheet
                        v-model="isLanguageShow"
                        :actions="LanguageActions"
                        @select="languageClick"
                        :cancel-text="$t('question:Cancel')"
                        close-on-click-action
                        class="van-language-sheet"
                    />
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
import { transformFile } from '@/utils/tools'
import { mapState } from 'vuex'
import { fetchAccountData, disconnectWallet } from '@/wallet/connect/metaMask'
export default {
    name: '',
    data() {
        return {
            window: window,
            active: 2,
            avatarFileObj: "", //??????????????????????????????
            isNameShow: false, //?????? ??????
            isNumberShow: false, //???????????? ??????
            isIntroduceShow: false, //????????????
            isSexShow: false, //????????????
            isBirthdayShow: false, //????????????
            isProfessionShow: false, //????????????
            isAreaShow: false, //????????????
            isLanguageShow: false, //????????????
            fileList: [], //????????????????????????
            fileBackgroundList: [
                // {
                //     url: 'https://h2o-finance-images.s3.amazonaws.com/h2oMedia/picture/background-image/115128_4221756453_0x295920EFC1261BC51604ad9F2a46F05F4F4F68FD.jpg',
                //     status: 'uploading',
                //     message: '?????????',
                // }
            ],
            minDate: new Date(100, 0, 1),
            maxDate: new Date(3000, 10, 1),
            currentDate: new Date(2022, 0, 1),
            avatar: '',
            nickname: '',
            username: '',
            showBirthdayPicker: false,
            LanguageActions: [{ name: '??????', label: 'zh' }, { name: 'English', label: 'en' }],
            isconfirm: true,
            language: 'zh',
            usdt_balance: 0, //usdt??????
            sct_balance: 0, //sct??????
        }
    },
    created() {
        // this.getUserInfo();
        let language = "en";
        language = localStorage.getItem('i18nextLng');
        if(language && language !== undefined) {
            this.language = language;
        }
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
            const {address,apiUrl, userId} = this
            return {
                address, apiUrl, userId
            };
        },
    },
    watch: {
        changeData: {
            immediate: true,
            handler(val){
                if(val.userId > 0) {
                    // this.getCommentList(true);
                    this.getUserInfo();
                }
            }
        },
    },
    components: {
    },
    mounted() {
    },
    methods: {
        async getUserInfo() { //??????????????????
            await axios.get(this.apiUrl + '/Api/User/getUserInfo', {
                params: {
                    userId: this.userId
                }
            }).then(async (json) => {
                if (json && json.code == 10000) {
                    console.log(json.data);
                    this.username = json.data.username;
                    this.nickname = json.data.nickname;
                    this.avatar = json.data.avatar;
                    // this.usdt_balance = Number(json.data.local_balance) + Number(json.data.wallet_balance);
                    // this.h2o_balance = Number(json.data.h2o_local_balance) + Number(json.data.h2o_wallet_balance);
                    if(json.data.avatar && json.data.avatar !== '') {
                        this.fileList[0] = {url: json.data.avatar};
                        this.$forceUpdate();
                    }
                } else {
                    this.$message({ type: 'warning', message: 'Error' });
                }
                return;
            }).catch((error) => {
                this.$message({ type: 'warning', message: error });
            });
        },
        async afterReadUpload(file) { //??????????????????????????????
            if(file) {
                file.status = 'uploading';
                file.message = '?????????...';
                const newFile = await this.ImageCompressionProcessing(file.file); //????????????????????????
                if(newFile) {
                    // this.avatarFileObj = newFile;
                    let uploadData = new FormData();
                    uploadData.append('file', newFile);
                    uploadData.append('images_key', "avatar");
                    uploadData.append('userId', this.userId);
                    await axios.post(this.apiUrl + '/Api/User/saveUserInfo', uploadData).then(async (json) => {
                        if (json && json.code == 10000) {
                            file.status = 'done';
                            file.message = '????????????';
                            await this.getUserInfo();
                        }
                    }).catch((error) => {
                        file.status = 'failed';
                        file.message = '????????????';
                        this.$message({ type: 'warning', message: error });
                    });
                }
            }
        },
        async ImageCompressionProcessing(file) { //??????????????????
            return new Promise( async (resolve, reject) => {
                const newFile = await transformFile(file); //????????????
                var reader = new FileReader();//new??????FileReader??????
                if(newFile) {
                    //??????????????????????????????
                    reader.readAsDataURL(newFile);
                    // var files = file.files[0];
                    reader.onerror = (e) => {
                        this.$message({ type: 'warning', message: '??????????????????????????????....' });
                        console.log("??????????????????????????????....", e);
                        resolve(false);
                    }
                    reader.onload = (e) => {
                        //????????????base64??????????????????img??????
                        // setImageUrl(e.target.result);
                        resolve(newFile);
                    }
                }
            })
        },
        saveAvator() { //????????????]
            this.$refs.avatarRef.chooseFile();
        },
        onClickSure() {
            this.isNameShow = false;
        },
        onClickSave() { //????????????
            this.$router.go(-1);
        },
        async onClickSaveUserInfo(name, value) { //??????????????????
            // if(!this.userId || this.userId <= 0) {
            //     this.$message({ type: 'warning', message: "????????????" });
            //     return false;
            // }
            const params = {
                userId: this.userId,
                [name]: value,
            };
            await axios.post(this.apiUrl + '/Api/User/saveUserInfo', params).then(async (json) => {
                if (json && json.code == 10000) {
                    this.isNameShow = false;
                    this.isIntroduceShow = false;
                    this.isSexShow = false;
                    this.isBirthdayShow = false;
                } else {
                    this.$message({ type: 'warning', message: 'Error' });
                }
                return;
            }).catch((error) => {
                this.$message({ type: 'warning', message: error });
            });
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
        subAddress(address) {
            return address.substring(0, 4) + "***" + address.substring(address.length - 3)
        },
        async connectWalletClick() { //????????????
            if(window.ethereum == undefined) {
                this.$message({ type: 'warning', message: 'You do not have metamask installed' });
                return false;
            }
            if(!this.address || this.address == undefined || this.address == '') {
                await fetchAccountData();
            } 
            else {
                await disconnectWallet();
            }
        },
        languageClick(item) { //????????????
            // console.log(item);
            this.language = item.label;
            // ??????????????????
            // let curLng = this.$i18n.i18next.language
            // ????????????
            this.$i18n.i18next.changeLanguage(item.label);
        },
        getUsdtDepositWithdraw() {
            // this.$router.push("/usdt");
        },
        getSCTDepositWithdraw() {
            // this.$router.push("/sct");
        },
        loginEvent() { //????????????
            this.$router.push('/login');
        },
        setUpInfo() { //??????
            console.log(this.userId);
            if(!this.userId || this.userId <= 0) {
                this.$message({ type: 'warning', message: 'Error' });
                return false;
            } else {
                this.$router.push('/user/setup');
            }
        },
    },
}
</script>
<style lang="scss" scoped>
    .container {
        /deep/ {
            .bg {
                background-image: url("../../assets/answer/home-bg.png");
                background-repeat: no-repeat;
                background-attachment: fixed;  /*??????*/
                background-position: center;
                top:0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -10;
                position: fixed;
                // filter: blur(2px);
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
                background: linear-gradient(#00C3E9, #2D50D2); /* ????????????*/
                // background-color: #fff;
                margin-top: 30px;
                border-radius: 30px;
                border: 2px solid #fff;
                .content {
                    padding: 16px 16px 160px;
                }
                .van-popup--bottom.van-popup--round {
                    height: 100vh;
                    // border-radius: 0;
                }
                .van-uploader__preview-delete {
                    // right: 10px;
                }
                .van-action-sheet {
                    max-height: 100%;
                }
                .avator {
                    padding: 20px;
                    text-align: center;
                    .preview {
                        width: 100px;
                        height: 100px;
                        border-radius: 50px;
                    } 
                    .upload-icon {
                        color: #dcdee0;
                        font-size: 24px;
                        top: 50%;
                        left: 50%;
                        margin-top: -12px;
                        margin-left: -12px;
                        position: absolute;
                    }
                    .uploader {
                        display: flex;
                        width: 100px;
                        height: 100px;
                        border-radius: 100%;
                        margin: 0 auto;
                        background-color: #f7f8fa;
                        .van-uploader__upload {
                            width: 100px;
                            height: 100px;
                            border-radius: 50%;
                        }
                        .van-uploader__preview-image {
                            width: 100px;
                            height: 100px;
                            border-radius: 50%;
                        }
                        .van-uploader__input-wrapper {
                            position: unset;
                        }
                    }
                    .photograph {
                        position: relative;
                        margin: 0 auto;
                        // display: flex;
                        width: 20px;
                        height: 20px;
                        background-color: black;
                        border-radius: 100%;
                        left: 35px;
                        font-size: 20px;
                        bottom: 20px;
                        // padding: 3px;
                        img {
                            width: 15px;
                            height: 15px;
                            margin-bottom: 2px;
                        }
                    }
                }
                .item {
                    .item-index {
                        border-bottom: 1px solid #fff;
                        .van-cell {
                            background-color: transparent;
                            color: #fff;
                            .van-cell__value {
                                color: #fff;;
                            }
                        }
                        .van-cell--clickable {
                            height: 50px;
                            line-height: 30px;
                            vertical-align: middle;
                        }
                        .van-popup {
                            background: linear-gradient(#00C3E9, #2D50D2); /* ????????????*/
                            .van-nav-bar__text {
                                color: #fff;
                            }
                        }
                        .hint {
                            color: #fff;
                            padding-left: 15px;
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
                                    background-color: #fff;
                                    border-radius: 15px;
                                }
                            }
                            .van-hairline--top-bottom::after{
                                border-width: inherit !important;
                            }
                        }
                        .van-language-sheet {
                            height: auto !important;  
                        }
                        .background-classname {
                            height: 100px;
                            line-height: 80px;
                            .van-cell__right-icon {
                                line-height: 80px;
                            }
                            .van-uploader__mask-message {
                                margin-top: 0 !important;
                                line-height: unset !important;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
