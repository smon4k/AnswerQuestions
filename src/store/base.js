import router from '@/router'
import { getUserAddressInfo, saveUserInfo } from '@/wallet/serve'
import {
    deepCopy,
    fromWei,
    toolNumber,
    numberFormat,
    accordingToAprSeekApy,
    calcDaily
} from '@/utils/tools'
import Address from '@/wallet/address.json'
import Web3 from 'web3'
import Vue from 'vue'
let copyBaseState 







export default {
    state :{
        address:'',
        isConnected:false,
        accounts:'',
        userId: 0, //用户ID
        userInfo: {}, //用户ID
        isAdmin: false, //是否管理员
        chainId:'',
        tradeStatus:{
            current:"",
            list:[],
            SuccessHash:'',
            FailedHash:'',
            userDenyId:''
        },
        domainHostAddress:'https://bscscan.com/tx/',
        // apiUrl: window.location.host === 'localhost:8008' ? '' : 'https://www.swanlake.club',
        apiUrl: window.location.host === 'localhost:8008' ? '' : 'http://8.219.55.168:82',
        // apiUrl: '',
        nftUrl: window.location.host === 'localhost:8008' || window.location.host === '192.168.1.3:8008' ? 'http://www.api.com' : 'https://api.h2o.live',
        // swanlakeUrl: window.location.host === 'localhost:8008' || window.location.host === '192.168.1.5:8008' ? 'http://www.swan.com' : 'https://www.swanlake.club',
        // Env: window.location.host === 'localhost:8001' || window.location.host === '192.168.1.6:8001' ? 'dev' : 'prod',
        Env: 'dev',
        // gamesFillingAddress: '0xdA9A81cf2000fc4df10362bA58EF4607d82E57BE', //游戏系统-充提清算系统-合约地址
        usdtFillingAddress: '0x079bDC8845D0C6878716A3f5219f1D0DcdF15308', //游戏系统-USDT-充提清算系统-合约地址
        h2oFillingAddress: '0xdA9A81cf2000fc4df10362bA58EF4607d82E57BE', //游戏系统-H2O-充提清算系统-合约地址
    },
    mutations: {
        isConnected(state , val ){
            state.isConnected = val
        },
        disconnect(state){
          for(let key in state){
            if(key === 'accounts'){
              state[key] = ''
            }else [
              state[key] = copyBaseState[key]
            ]
          }
          console.log('state',state)
          
        },
        copyDefaultState(state){
            copyBaseState = deepCopy(state)
        },
        getChainId(state , value) {
            state.chainId = value;
        },
        async getAddress(state, value) { //设置钱包地址
            state.address = value;
            let userInfo = await getUserAddressInfo(value);
            if(userInfo && userInfo.id > 0) {
                state.userId = userInfo.id;
                state.userInfo = userInfo;
                state.isAdmin = userInfo.is_admin;
            } else {
                state.userId = 0;
            }
        },  
        async removeAddress(state) {
            state.address = '';
            state.userId = 0;
        },
        getAccounts(state, value) {
            state.accounts = value;
        },
        setUserInfo(state, value) {
            state.userInfo = value;
            state.userId = value.uid;
            if(value.address && value.address !== '') {
                state.address = value.address;
            }
            console.log(value);
        },
        createOrder(state , {id , val}){
            state.tradeStatus.list.push({id , val })
            state.tradeStatus.current = id
        },
        change_TradeStatus(state , {id , val , isUserDeny , hash , errMessage}){
            if(!id) return 
            let index = state.tradeStatus.list.findIndex(item=>{
                return item.id === id
            })
            console.log(id, errMessage);
            if(errMessage){
                state.errMessage = errMessage
            }
            if(index !== -1){
                state.tradeStatus.list[index].val = val 
                state.tradeStatus.list[index].hash = hash // 1成功 2失败

                if(val === 1){
                    state.tradeStatus.SuccessHash = hash
                }else {
                    state.tradeStatus.list[index].isUserDeny = isUserDeny
                    if(isUserDeny){
                        state.tradeStatus.userDenyId = id
                        console.log('userDenyId' , state.tradeStatus.userDenyId);
                    }
                    state.tradeStatus.FailedHash = hash || id
                }
            }
        },
    },
    getters:{
        pendingOrderAmount: state=>{
            let filter = state.tradeStatus.list.filter(ele=> ele.val === 0)
            return filter.length
        },
        successOrderAmount: state=>{
            let filter = state.tradeStatus.list.filter(ele=> ele.val === 1)
            return filter.length
        },
        failedOrderAmount: state=>{
            let filter = state.tradeStatus.list.filter(ele=> ele.val === 2)
            return filter.length
        },
        MDEXMintingList:state=>{
            return state.totalMint.list.filter(item=>item.type === 'MDEX')
        },
        PSMintingList:state=>{
            return state.totalMint.list.filter(item=>item.type === 'PS' || item.type === 'HS')
        },
        MDEXPositionList:state=>{
            return state.userPosition.list.filter(item=>item.type === 'MDEX')
        },
        PSPositionList:state=>{
            return state.userPosition.list.filter(item=>item.type === 'PS' || item.type === 'HS')
        }
    },
    actions:{
        async disconnectMetaMask({commit}){
            commit('disconnect')
        },
        async getInviteList({commit}){
            let res = await getOneLevelLists()
            commit('setInviteList'  ,res)
        },
        async getAirdropValue({commit}){
            let res = await getAirdropValue()
            commit('getAirdropBalance'  ,res)
        },
        async getTokenDecimals({commit}){
            let res = await getDecimals()
            if(res){
                commit('setTokenDecimals' , res)
            }
        },
        async getAirDropDrawed({commit}){
            let res = await getAirDropDrawed()
            commit('setAirDropDrawed' , res)
        },
        createOrderForm({commit } , info){
            commit('createOrder' , info)
        },
        changeTradeStatus({commit} , status){
            commit('change_TradeStatus' , status)
        },
    }
}