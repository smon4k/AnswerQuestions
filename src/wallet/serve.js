import {  fromWei , toWei , toolNumber , toFixed, byDecimals, keepDecimalNotRounding, scientificNotationToString} from '@/utils/tools'
// import { $get } from '@/utils/request'
import  tokenABI from './abis/token.json'
import gameFillingABI from './abis/gameFillingABI.json'
import mdexABI from './abis/mdexABI.json'
import erc20ABI from './abis/erc20ABI.json'
import oracleABI from './abis/oracleABI.json'
import IUniswapV2PairABI from './abis/IUniswapV2PairABI.json'


import { get, post } from "@/common/axios.js";
import { $get } from '@/utils/request'
import axios from 'axios'
import { getUrlParams, getQueryString } from '@/utils/tools'
import configAddress from './swap_pools'
const publicAddress = configAddress.publicAddress;


/**
 * 获取用户信息
 * @param {*} type 
 * @returns 
 */
 export const getUserAddressInfo = async function(userAddress){
    const apiUrl = __ownInstance__.$store.state.base.apiUrl
    const address = userAddress || __ownInstance__.$store.state.base.address;
    const re_address = getQueryString('re');
    let result = [];
    if(address && address !== '') {
      let data = await $get(apiUrl + '/Api/User/getUserAddressInfo?address='+address+'&re_address='+re_address);
        if (data && data.code == 10000) {
            result = data.data;
        }
    }
    return result;
  }

  //获取估值
export const getSwapPoolsAmountsOut = async function (routerContractAddress, tk0Address, tk1Address, bnbAddress) {
  // console.log(routerContractAddress, tk0Address, tk1Address);
  const contract = new web3.eth.Contract(mdexABI, routerContractAddress);
  let amountsOut = 0;
  let path = [];
  if(bnbAddress && bnbAddress !== '') {
    path = [tk0Address, bnbAddress, tk1Address];
  } else {
    path = [tk0Address, tk1Address];
  }
  const Gwei1 = 1000000000;
  // console.log(path);
  await contract.methods.getAmountsOut(Gwei1, path).call(function (error, result) {
    if (!error) {
      // console.log(result);
      if(bnbAddress && bnbAddress !== '') {
        amountsOut = result[2] ? result[2] / Gwei1 : 0;
      } else {
        amountsOut = result[1] ? result[1] / Gwei1 : 0;
      }
    }else {
      console.log('getAmountsOutErr' , error);
    }
  });
  return amountsOut;
}

//实时获取swap币的数量估值
export const getTokenAmountsoutPrice = async function (tk0Address, tk1Address, amount=1) {
  const contract = new web3.eth.Contract(mdexABI, publicAddress.routerDeployedAddress);
  let path = [tk0Address, tk1Address];
  // console.log(path);
  const Gwei1 = Math.pow(10, 18);
  let price = 1;
  if(amount > 0) {
    let num = (Number(amount) * Gwei1).toString();
    if ((num.indexOf('E') != -1) || (num.indexOf('e') != -1)) {   //如果为科学计数法
        num = scientificNotationToString(Number(num));
    }
    await contract.methods.getAmountsOut(num, path).call(function (error, result) {
      if (!error) {
        // console.log(result);
        if(result && result[1]) {
          price = result[1] / Gwei1;
        } 
      }else {
        console.log('getAmountsOut' , error);
      }
    });
  }
  return price;
}

//实时获取swap币的数量估值
export const getTokenAmountsIntPrice = async function (tk0Address, tk1Address, amount, isPrice) {
  const contract = new web3.eth.Contract(mdexABI, publicAddress.routerDeployedAddress);
  let path = [tk0Address, tk1Address];
  // console.log(path, amount);
  let Gwei1 = 0;
  if(isPrice) {
    Gwei1 = 1000000000;
  } else {
    Gwei1 = Math.pow(10, 18);
  }
  let price = 1;
  if(amount > 0) {
    let num = (Number(amount) * Gwei1).toString();
    if ((num.indexOf('E') != -1) || (num.indexOf('e') != -1)) {   //如果为科学计数法
        num = scientificNotationToString(Number(num));
    }
    console.log(path, num);
    await contract.methods.getAmountsIn(num, path).call(function (error, result) {
      if (!error) {
        // console.log(num, result);
        if(result && result[0]) {
          price = result[0] / Gwei1;
        } 
      }else {
        console.log('getAmountsIn' , error);
      }
    });
  }
  return price;
}

/**
 * 绑定户钱包地址
 * @param {*} type 
 * @returns 
 */
 export const saveUserInfo = async function(userId=0, address=''){
  const apiUrl = __ownInstance__.$store.state.base.apiUrl
  let result = false;
  if (userId > 0 && address && address !== '') {
    const params = {
      userId: userId,
      address: address,
    };
    await post(apiUrl + '/Api/User/saveUserInfo', params, async (json) => {
      console.log(json);
      if (json && json.code == 10000) {
        result = true;
      } else if (json && json.code == 70001) {
          // Notify({ type: 'warning', message: json.msg });
          result = false;
      } else {
          // Notify({ type: 'warning', message: 'Error' });
          result = false;
      }
    })
  }
  return result;
}

// 获取余额
export async function getBalance(tokenAddress, decimals , poolAddress) {
  const address = poolAddress || __ownInstance__.$store.state.base.address
  if(!address || address == undefined || address == '') {
    return 0;
  }
  let balance = 0;
  if(tokenAddress === '0x0000000000000000000000000000000000000000'){
    balance = await new web3.eth.getBalance(address)
    return fromWei(balance, decimals)
  }


  const contract = new web3.eth.Contract(tokenABI, tokenAddress);
  await contract.methods.balanceOf(address).call(function (error, result) {
    if (!error) {
      balance = fromWei(result, decimals);
    }else {
      console.log('balanceErr' , error);
    }
  });
  return balance;
}

// 是否授权
export const isApproved = async function (tokenAddress, decimals, amount , otherAddress) {
  if(tokenAddress === '0x0000000000000000000000000000000000000000') return true
  const account = __ownInstance__.$store.state.base.address;
  if(!account || account == undefined || account == '') {
    return false;
  }
  const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
  let contract = otherAddress || __ownInstance__.$store.state.base.bankAddress
  let approveAmount = 0;
  await tokenContract.methods.allowance(account, contract).call(function (error, result) {
    if (error) {
      return false;
    }
    approveAmount = result;
    // console.log('检查授权' , approveAmount);

  })
  return Number(toWei(amount.toString(), decimals)) < approveAmount;
}

//获取 swapPools 池子数据
export async function getSwapPoolsTokensData(pool, publicAddress){
  const address = __ownInstance__.$store.state.base.address;
  if(!address || address == undefined || address == '') {
    let reObj = {
      allowance: 0,
      tokenBalance: 0,
      reserves: [],
      totalSupply: 0,
      tokenBalanceUsd: 0,
    };
    return reObj;
  }
  const decimals = __ownInstance__.$store.state.base.tokenDecimals
  let allowance = 0;
  let tokenBalance = 0;
  let reserves = [];
  let totalSupply = 0;
  let tokenBalanceUsd = 0;
  const Gwei1 = 1000000000;
  const allowanceRes = await getSwapPoolsAllowance(address, pool.tokenAddress, publicAddress.routerDeployedAddress);
  // console.log(allowanceRes);
  if(pool.tokenAddress.toUpperCase() === publicAddress.BNB_ADDR.toUpperCase()) { //如果是BNB的话 不需要批准
    allowance = 1;
    tokenBalance = await getBalance("0x0000000000000000000000000000000000000000", pool.tokenDecimals);
  } else {
    allowance = web3.utils.fromWei(allowanceRes, 'ether');
    tokenBalance = await getBalance(pool.tokenAddress, pool.tokenDecimals);
  }
  // const guruBalance = await getBalance('0xF1932eC9784B695520258F968b9575724af6eFa8', 18);
  // console.log(guruBalance);
  // reserves = await getSwapPoolsReserves(publicAddress.oracleContractAddress, pool.tk0Address, pool.tk1Address);
  // totalSupply = await getSwapPoolsTotalSupply(publicAddress.oracleContractAddress, pool.tk0Address, pool.tk1Address);
  const tokenBalanceUsdRes = await getSwapPoolsAmountsOut(publicAddress.routerDeployedAddress, pool.tk0Address, pool.tk1Address);
  if(tokenBalanceUsdRes > 0) {
    tokenBalanceUsd = tokenBalanceUsdRes;
  }
  // console.log(tokenBalanceUsd);
  let reObj = {
    allowance: 1,
    tokenBalance: tokenBalance,
    reserves: reserves,
    totalSupply: totalSupply,
    tokenBalanceUsd: tokenBalanceUsd,
  };
  return reObj;
}

//获取 兑换 币 是否批准
export const getSwapPoolsAllowance = async function (address, tokenAddress, routerContractAddress) {
  // console.log(routerContractAddress);
  const contract = new web3.eth.Contract(erc20ABI, tokenAddress);
  let approveAmount = 0;
  await contract.methods.allowance(address, routerContractAddress).call(function (error, result) {
    if (!error) {
      // console.log(result);
      approveAmount = result;
    }else {
      console.log('allowanceErr' , error);
    }
  });
  return approveAmount;
}

//获取预言机数据
export const getSwapPoolsReserves = async function (oracleContractAddress, tk0Address, tk1Address) {
  // console.log(oracleContractAddress, tk0Address, tk1Address);
  const contract = new web3.eth.Contract(oracleABI, oracleContractAddress);
  let reserves = [];
  await contract.methods.getReserves(tk0Address, tk1Address).call(function (error, result) {
    if (!error) {
      const { reserve0 , reserve1 } = result
      // reserves = result;
      reserves = [reserve0, reserve1];
    }else {
      console.log('getReservesErr' , error);
    }
  });
  return reserves;
}

//获取总的余额
export const getSwapPoolsTotalSupply = async function (oracleContractAddress, tk0Address, tk1Address) {
  // console.log(oracleContractAddress, tk0Address, tk1Address);
  const contract = new web3.eth.Contract(oracleABI, oracleContractAddress);
  let totalSupply = 0;
  await contract.methods.totalSupply(tk0Address, tk1Address).call(function (error, result) {
    if (!error) {
      // console.log(result);
      totalSupply = result;
    }else {
      console.log('totalSupplyErr' , error);
    }
  });
  return totalSupply;
}

//获取 LiquidityPools 池子数据
export async function getLiquidityPoolsTokensData(pool, publicAddress){
  const address = __ownInstance__.$store.state.base.address
  if(!address || address == undefined || address == '') {
    let reObj = {
      allowance: 0,
      tokenBalance: 0,
      reserves: [],
      totalSupply: 0,
      tokenOneBalanceUsd: 0,
      tokenTwoBalanceUsd: 0,
      nonce: 0,
    };
    return reObj;
  }
  const decimals = __ownInstance__.$store.state.base.tokenDecimals
  let allowance = 0;
  let tokenBalance = 0;
  let reserves = [];
  let totalSupply = 0;
  let tokenOneBalanceUsd = 0;
  let tokenTwoBalanceUsd = 0;
  let nonce = 0;
  const Gwei1 = 1000000000;
  const allowanceRes = await getSwapPoolsAllowance(address, pool.tokenAddress, publicAddress.routerDeployedAddress);
  allowance = web3.utils.fromWei(allowanceRes, 'ether');
  tokenBalance = await getBalance(pool.tokenAddress, pool.tokenDecimals);
  // const guruBalance = await getBalance('0xF1932eC9784B695520258F968b9575724af6eFa8', 18);
  // console.log(guruBalance);
  // reserves = await getSwapPoolsReserves(publicAddress.oracleContractAddress, pool.tk0Address, pool.tk1Address);
  totalSupply = await getSwapPoolsTotalSupply(publicAddress.oracleContractAddress, pool.tk0Address, pool.tk1Address);
  const tokenOneBalanceUsdRes = await getSwapPoolsAmountsOut(publicAddress.routerDeployedAddress, pool.tk0Address, pool.tk1Address);
  if(tokenOneBalanceUsdRes > 0) {
    tokenOneBalanceUsd = tokenOneBalanceUsdRes;
  }
  const tokenTwoBalanceUsdRes = await getSwapPoolsAmountsOut(publicAddress.routerDeployedAddress, pool.tk1Address, pool.tk0Address);
  if(tokenTwoBalanceUsdRes > 0) {
    tokenTwoBalanceUsd = tokenTwoBalanceUsdRes;
  }
  nonce = await getSwapPoolsNonces(address, pool.tokenAddress);
  // console.log(tokenBalanceUsd);
  // * Math.pow(10, pool.tokenDecimals)
  let reObj = {
    allowance: allowance,
    tokenBalance: tokenBalance,
    reserves: reserves,
    totalSupply: totalSupply,
    tokenOneBalanceUsd: tokenOneBalanceUsd,
    tokenTwoBalanceUsd: tokenTwoBalanceUsd,
    nonce: nonce,
  };
  return reObj;
}

//获取LP地址的nance数量
export const getSwapPoolsNonces = async function (address, tokenAddress) {
  const contract = new web3.eth.Contract(IUniswapV2PairABI, tokenAddress);
  let nonceCount = 0;
  await contract.methods.nonces(address).call(function (error, result) {
    if (!error) {
      // console.log(result);
      nonceCount = result;
    }else {
      console.log('noncesErr' , error);
    }
  });
  return nonceCount;
}





//获取游戏-充提系统-充提余额
export async function getGameFillingBalance(decimals=18, gamesFillingAddress='') {
  const address = __ownInstance__.$store.state.base.address;
  const contractAddress = gamesFillingAddress || __ownInstance__.$store.state.base.gamesFillingAddress;
  const contract = new web3.eth.Contract(gameFillingABI, contractAddress);
  let num = 0;
  await contract.methods.userInfo(address).call((error, result) => {
    if (!error) {
      // console.log(result);
      num = fromWei(result.shares, decimals);
      if(result.minus) {
        num = -num;
      }
    } else {
      console.log('userInfo' ,error);
    }
  });
  return num;
}

//获取游戏-充提系统-修改充提状态
export const saveNotifyStatus = async function(status, type=true, currency='usdt'){
  const apiUrl = __ownInstance__.$store.state.base.apiUrl;
  const address = __ownInstance__.$store.state.base.address;
  await $get(apiUrl + '/Api/Depositwithdrawal/saveNotifyStatus?address='+address+'&status='+status+'&type='+type+'&currency='+currency);
}

//获取游戏-充提系统-修改充提记录日志状态
export const setDepWithdrawStatus = async function(deWithId, status, type=true, currency='usdt'){
  const apiUrl = __ownInstance__.$store.state.base.apiUrl;
  const address = __ownInstance__.$store.state.base.address;
  await $get(apiUrl + '/Api/Depositwithdrawal/setDepWithdrawStatus?address='+address+'&deWithId='+deWithId+'&status='+status+'&type='+type+'&currency='+currency);
}

//获取游戏-充提系统-监听充提状态是否执行完成
export const getGameFillingWithdrawStatus = async function(withdrawId){
  const apiUrl = __ownInstance__.$store.state.base.apiUrl;
  const address = __ownInstance__.$store.state.base.address;
  let status = 0;
  let data = await $get(apiUrl + '/Api/Depositwithdrawal/getGameFillingWithdrawStatus?address='+address+'&withdrawId='+withdrawId);
  if(data && data.code == 10000) {
    status = data.data;
  }
  return status;
}


//记录充提记录到数据库 修改充提状态为充提中
export const setUSDTDepositWithdraw = async (params={}) => {
  const apiUrl = __ownInstance__.$store.state.base.apiUrl;
  if(params && params.hash !== '') {
    await axios.post(apiUrl + '/Api/Depositwithdrawal/depositWithdraw', params).then((json) => {
      if(json && json.code == 10000) {
        return true;
      }
    }).catch((error) => {
        console.log(error);
        return false;
    });
  }
  return false;
};

//获取游戏-充提系统-获取充提下一个自增id
export const getFillingIncreasingId = async function(){
  const apiUrl = __ownInstance__.$store.state.base.apiUrl;
  const address = __ownInstance__.$store.state.base.address;
  let status = 0;
  let data = await $get(apiUrl + '/Api/Depositwithdrawal/getIncreasingId?address='+address);
  if(data && data.code == 10000) {
    status = data.data;
  }
  return status;
}

/**
 * 获取BTC爬虫数据
 * @param {*} type 
 * @returns 
 */
 export const getPoolBtcData = async function(){
  const apiUrl = __ownInstance__.$store.state.base.apiUrl
  const address = __ownInstance__.$store.state.base.address;
  let result = [];
  let data = await $get('https://www.h2ofinance.pro/getPoolBtc')
  if(data) {
    result = data;
  }
  return result;
}