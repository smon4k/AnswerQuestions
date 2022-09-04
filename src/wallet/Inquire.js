
import {  fromWei , toWei , toolNumber , toFixed, byDecimals, keepDecimalNotRounding, scientificNotationToString} from '@/utils/tools'
import airdropABIs from './abis/airdrop.json'
import  tokenABI from './abis/token.json'
import  bankABI from './abis/bank.json'
import fairLaunchABI from './abis/fairLaunch.json'
import Address from './address.json'
import cakeRouterABI from './abis/cakeRouter.json'
import goblinABI from './abis/goblinPS.json'
import goblinMDEXABI from './abis/goblinMDEX.json'
import LptokenABI from './abis/iptoken.json'
import configABI from './abis/config.json'
import goblinPoolsABI from './abis/goblinPools.json'
import TIMELOCKABI from './abis/timeLock.json'
import erc20ABI from './abis/erc20ABI.json'
import oracleABI from './abis/oracleABI.json'
import mdexABI from './abis/mdexABI.json'
import IUniswapV2PairABI from './abis/IUniswapV2PairABI.json'
import H2OPoolsABI from './abis/H2OPoolsABI.json'
import H2OPoolsWOWABI from './abis/H2OPoolsWOWABI.json'
import masterChefABI from './abis/masterChefABI.json'
import gameFillingABI from './abis/gameFillingABI.json'
import stratABI from './abis/stratABI.json'
import configAddress from './swap_pools'
import { $get } from '@/utils/request'
import { calcDailyDefault0 } from '@/utils/tools'
const publicAddress = configAddress.publicAddress;
// export async function airdrop_add_whitelist (user , recommand){
//     if(!user || !recommand) return 
//     const address = __ownInstance__.$store.state.base.airdropAddress
//     const contract = new web3.eth.Contract(airdropABIs , address)
//     let res = false
//     console.log('user' ,user);
//     console.log('recommand' ,recommand);
//     await contract.methods.addWhiteList( user , recommand ).call(function (error, result) {
//       if (!error) {
//         console.log('addWhiteList' ,result);
//         res = result
//       }else   {
//         console.log('addWhiteList_err',error)
//       }
//     });
//     return res;
// }
// 质押获取详细奖励
export async function getPledgeRewardInfo(){
  const address = __ownInstance__.$store.state.base.address
  if(!address || address == undefined || address == '') {
    return 0;
  }
  const timeLockAddress = __ownInstance__.$store.state.base.timeLockAddress
  const contract = new web3.eth.Contract(TIMELOCKABI , timeLockAddress)
  let result
  await contract.methods.VestingAmount(address).call(function(err,res){
    if(!err){
      result = fromWei(res , 18)
    }else {
      console.log('getPledgeRewardInfo_err',err)
    }
  })
  return result
}

export async function getPledgeRewardInfo1(){
  const address = __ownInstance__.$store.state.base.address
  if(!address || address == undefined || address == '') {
    return 0;
  }
  // const address = '0xd070Fd7eD2776a867c9D029ca662382e350F8388'
  const timeLockAddress = __ownInstance__.$store.state.base.timeLockAddress
  const contract = new web3.eth.Contract(TIMELOCKABI , timeLockAddress)
  let result
  await contract.methods.CanWithdrawAmount(address).call(function(err,res){
    if(!err){
      result = fromWei(res , 18)
      // console.log('CanWithdrawAmount' , res);
    }else {
      console.log('getPledgeRewardInfo1_err',err)
    }
  })
  return result
}


export async function getPledgeRewardUnlock(){
  // const address = '0xd070Fd7eD2776a867c9D029ca662382e350F8388'
  const address = __ownInstance__.$store.state.base.address
  if(!address || address == undefined || address == '') {
    return 0;
  }
  const timeLockAddress = __ownInstance__.$store.state.base.timeLockAddress
  const contract = new web3.eth.Contract(TIMELOCKABI , timeLockAddress)
  let result
  await contract.methods.WaitingAmount(address).call(function(err,res){
    if(!err){
      // result = res  
      result = fromWei(res , 18)
      // console.log('WaitingAmount' , result);
    }else {
      console.log('getPledgeRewardInfo1_err',err)
    }
  })
  return result
}



//  邀请详情 一级代理
export async function  getOneLevelLists(){
  __ownInstance__.$store.commit('setInviteListLoading' , true)
  const address = __ownInstance__.$store.state.base.address
  if(!address || address == undefined || address == '') {
    return '';
  }
  const airdropAddress = __ownInstance__.$store.state.base.airdropAddress
  const contract = new web3.eth.Contract(airdropABIs , airdropAddress)
  let result
  await contract.methods.getOneLevelLists(address).call(function(err,res){
    if(!err){
      result = res
    }else {
      console.log('getOneLevelLists_err',err)
    }
  })
  return result
}


// 获取空投挖矿奖励

export async function  getAirdropMintReward(){
  const address = __ownInstance__.$store.state.base.address
  if(!address || address == undefined || address == '') {
    return 0;
  }
  const airdropAddress = __ownInstance__.$store.state.base.airdropAddress
  const contract = new web3.eth.Contract(airdropABIs , airdropAddress)
  let result
  await contract.methods.recommendReward(address).call(function(err,res){
    if(!err){
      result = fromWei(res , 18)
    }else {
      console.log('getAirdropMintReward_err',err)
    }
  })
  return result
}



// 空投奖励余额
export async function  getAirdropValue(){
  const address = __ownInstance__.$store.state.base.address
  if(!address || address == undefined || address == '') {
    return 0;
  }
  const decimals = __ownInstance__.$store.state.base.tokenDecimals
  const airdropAddress = __ownInstance__.$store.state.base.airdropAddress
  const contract = new web3.eth.Contract(airdropABIs , airdropAddress)
  let result
  await contract.methods.airDropValue(address).call(function(err,res){
    if(!err){
      result = fromWei(res , decimals)
    }else {
      console.log('getOneLevelLists_err',err)
    }
  })
  return result
}

// 获取Decimals
export async function  getDecimals(){
  const airdropAddress = __ownInstance__.$store.state.base.airdropAddress
  const contract = new web3.eth.Contract(airdropABIs , airdropAddress)
  let result
  await contract.methods.tokenDecimals().call(function(err,res){
    if(!err){
      // console.log('Decimals' , res);
      result = res
    }else {
      console.log('getOneLevelLists_err',err)
    }
  })
  return result
}

// 已领取空投奖励
export async function  getAirDropDrawed(){
  const address = __ownInstance__.$store.state.base.address
  if(!address || address == undefined || address == '') {
    return 0;
  }
  const decimals = __ownInstance__.$store.state.base.tokenDecimals
  const airdropAddress = __ownInstance__.$store.state.base.airdropAddress
  const contract = new web3.eth.Contract(airdropABIs , airdropAddress)
  let result
  await contract.methods.airDropDrawed(address).call(function(err,res){
    if(!err){
      result = fromWei(res , decimals)
    }else {
      console.log('getOneLevelLists_err',err)
    }
  })
  return result
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

// 获取Decimals
export async function getTokenDecimals(tokenAddress) {
  if(tokenAddress === '0x0000000000000000000000000000000000000000' ) return 18
  const contract = new web3.eth.Contract(tokenABI, tokenAddress);
  let decimals = 18;
  await contract.methods.decimals().call(function (error, result) {
    if (!error) {
      decimals = result;
      // console.log('decimals' , result);
    }else {
      console.log('getTokenDecimals_err',error);
    }
  });
  return decimals;
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



// 获取存款列表addressList
export async function getDepositTokenList() {
  const contractAddress = __ownInstance__.$store.state.base.bankAddress;
  const contract = new web3.eth.Contract(bankABI, contractAddress);
  let list = [];
  await contract.methods.getAllToken().call(function (error, result) {
    if (!error) {
      list = result;
      // console.log('存款列表',result);
    }
  });
  return list;
}

// 获取存款列表addressList
export async function getMintMaxAndMin(id) {
  const contractAddress = __ownInstance__.$store.state.base.bankAddress;
  const contract = new web3.eth.Contract(bankABI, contractAddress);
  let list = [];
  await contract.methods.productions(id).call(function (error, result) {
    if (!error) {
      list = result;
    }else {
      console.log('getMintMaxAndMin' , error);
    }
  });
  return list;
}

// 获取token对应Htoken address
export async function getHTokenAddress(tokenAddress) {
  // if(tokenAddress ==='0x5CF8493151B86FF753c3B76450B5F55B52904a75') return '0x2Ae3ddFc9439bDb50B89F323b79D3426A5F83799'
  // if(tokenAddress ==='0x0000000000000000000000000000000000000000') return '0xBA4a613EB695414C9E25CE60af259784F29e1BCA'
  const contractAddress = __ownInstance__.$store.state.base.bankAddress;
  const contract = new web3.eth.Contract(bankABI, contractAddress);
  let add = '';
  await contract.methods.iTokens(tokenAddress).call(function (error, result) {
    if (!error) {
      add = result;
      // console.log('HtokenAddress',tokenAddress ,result);
    }
  });
  return add;
}

// 获取token 和htoken的余额
export async function getTokenHtokenBalance( t, h){
  let bool = t === '0x0000000000000000000000000000000000000000'
  
  let decimals = bool ? 18 : await getTokenDecimals(t)
  let decimals_h = await getTokenDecimals(h)
  let balance = await getBalance(t , decimals)
  let balance_h = await getBalance(h , decimals_h)
  // console.log('balance',balance);
  // console.log('balance_h',balance_h);
  let total = await getDepositTotal(t)
  let Debt = await getDepositTotalDebt(t , total)
  const { totalDebt ,  ratePerSec} = Debt
  let depositYear = totalDebt ==='0' ? 0: Number(ratePerSec) * (Number(totalDebt)/Number(total))*0.32*100
  // console.log('ratePerSec',ratePerSec);
  // console.log('depositYear' ,depositYear ,ratePerSec , total , totalDebt );
  let pledgeYear = await getPledgeYear(t , total , decimals)
  // console.log('pledgeYear',pledgeYear);


  return {
    decimals,
    decimals_h,
    balance,
    balance_h,
    total:fromWei(total , decimals),
    depositYear:toolNumber(depositYear),
    pledgeYear,
    totalDebt:fromWei(totalDebt , decimals)
    // pledge:pledgeYear.pledge
    // YearPerMin:pledgeYear.YearPerMin,
    // YearPerMax:pledgeYear.YearPerMin
  }
}



async function getPledgeYear(token ,total ,decimals){
  // console.log('token-----------------' ,token);
  // let bool = token === '0xcEc714fF47288937fd0F3386F172Bc0CfCF2E50f'
  const { fixed  , demand} = PLEDGE
  let pids = []
  let YearPerMin = 0 , YearPerMax = 0 ,YearPer90=0,YearPer180=0,YearPer365=0 , YearPerFixed=0
  let bool = token === '0x0000000000000000000000000000000000000000';
  let price = 1;
  if(fixed.length){
    let index = fixed.findIndex(item=>item.originToken === token)
    if(index !== -1){
      let amount = await H2OYearIncome(fixed[index].pId)
      pids.push(amount)
      // let total = await getPoolTotal(fixed[index].pId)
      // console.log('后来total',total);
      // YearPerFixed = await getDemandYearARP(fixed[index].pId , fromWei(total ,18)  , token)
      // total =  await getDepositTotal(t)
      // let H2OYear = await H2OYearIncome(type)
      if(fixed[index].pId > 1) {
        if(bool) {
          price = await getToken2TokenPrice("0x0000000000000000000000000000000000000000", Address.BUSDT )
        }
        price = await getToken2TokenPrice(token, Address.BUSDT)
      }
      let total =  await getPoolTotal(fixed[index].pId) * price
      YearPerFixed = await getDemandYearARP(fixed[index].pId , total , token)
    }
  }
  if(demand.length){
    let index = demand.findIndex(item=>item.originToken === token)
    if(index !== -1){
      let amount = await H2OYearIncome(demand[index].D90)
      let amount1 = await H2OYearIncome(demand[index].D180)
      let amount2 = await H2OYearIncome(demand[index].D365)
      pids.push(amount)
      pids.push(amount1)
      pids.push(amount2)
      let total90 = await getPoolTotal(demand[index].D90)
      let total180 = await getPoolTotal(demand[index].D180)
      let total365 = await getPoolTotal(demand[index].D365)

      // bool && console.log('total90',total90);
      // bool && console.log('total180',total180);
      // bool && console.log('total365',total365);
      
      YearPer90 = await getDemandYearARP(demand[index].D90 , total90 , token)
      YearPer180 = await getDemandYearARP(demand[index].D180 , total180  , token)
      YearPer365 = await getDemandYearARP(demand[index].D365 ,  total365 , token )
      
    }
  }
  // bool && console.log('total--',total);
  // bool && console.log('YearPerFixed',YearPerFixed);
  // bool && console.log('YearPer90',YearPer90);
  // bool && console.log('YearPer180',YearPer180);
  // bool && console.log('YearPer365',YearPer365);
  

  // YearPerMin = Math.min(YearPer90,YearPer180,YearPer365 , YearPerFixed)
  // YearPerMax = Math.max(YearPer90,YearPer180,YearPer365 , YearPerFixed)
  YearPerMin = YearPerFixed
  YearPerMax = YearPerFixed
  // console.log('YearPerMin',YearPerMin);
  // console.log('YearPerMax',YearPerMax);
  let totalH2OYearIncome = 0
  if(pids.length){
    pids.forEach(async item=>{
      totalH2OYearIncome += Number(item)
    })
  }else{
    return 0
  }
  // console.log('totalH2OYearIncome',totalH2OYearIncome);
  // console.log('total',total);

  // let H2OPrice = await getToken2TokenPrice( Address.H2O ,"USDT" )
  let H2OPrice = await getSwapPoolsAmountsOut(publicAddress.routerContractAddress, Address.H2O ,Address.BUSDT )
  let token2TokenPrice = await getToken2TokenPrice( token ,"USDT" )
  return {
    pledge:totalH2OYearIncome*H2OPrice/(total/Math.pow(10,decimals)*token2TokenPrice) * 100,
    YearPerMin,
    YearPerMax
  }

}

// 获取存款的总存
export async function getDepositTotal(token){
  const contractAddress = __ownInstance__.$store.state.base.bankAddress;
  const contract = new web3.eth.Contract(bankABI, contractAddress);
  let add = '';
  await contract.methods.totalToken(token).call(function (error, result) {
    if (!error) {
      add = result;
    }else {
      console.log('getDepositTotalErr',error);
    }
  });
  return add;
}

// 获取存款的总借
export async function getDepositTotalDebt(token , total){
  // console.log('bank.totalDebt' ,token );
  let bank = await getAllbanks(token)
  // console.log('total' ,total );
  let ratePerSec = await getInterestRate( bank.totalDebt , total)
  return {
    totalDebt:bank.totalDebt,
    // ratePerSec:fromWei(ratePerSec , 16)
    ratePerSec:Number(ratePerSec)*365*24*60*60/Math.pow(10,18) 
  }
}

async function getInterestRate(totalDebt , totalBalance){
  const contractAddress = __ownInstance__.$store.state.base.bankAddress;
  const contract = new web3.eth.Contract(configABI, Address.config);
  let add = '';
  await contract.methods.getInterestRate(totalDebt ,totalBalance ).call(function (error, result) {
    if (!error) {
      add = result;
    }else {
      console.log('getInterestRateERR',err);
    }
  });
  return add;
}

// 获取token和itoken名称
export async function getAllTokenName(t,h){
  let name = t === '0x0000000000000000000000000000000000000000' ? 'BNB'  :await getTokenName(t)
  let name_h = h === '0x0000000000000000000000000000000000000000' ? 'BNB'  : await getTokenName(h)
  return {
    name,
    name_h
  }
}

// 获取名称
export async function getTokenName(tokenAddress) {
  const contract = new web3.eth.Contract(tokenABI, tokenAddress);
  let name = '';
  await contract.methods.symbol().call(function (error, result) {
    if (!error) {
      name = result;
      // console.log('name' , result);
    }else {
      console.log('getTokenName' , error);
    }
  });
  return name;
}



export async function getPledgeTokensBalance( t, h , type , kind){
  let bool = t === '0x0000000000000000000000000000000000000000'
  
  let price = 1;
  let decimals = bool ? 18 : await getTokenDecimals(t)
  let decimals_h = await getTokenDecimals(h)
  let balance = await getBalance(t , decimals)
  let balance_h,
  reward,
  total,
  YearPer,
  Balance90,
  Balance180,
  Balance365,
  total90,
  total180,
  total365,
  YearPer90,
  YearPer180,
  YearPer365

  if(kind === 'fixed'){
    let fixedBalance = await getPledgeBalance(type , decimals_h)
    balance_h = fromWei(fixedBalance['0'] , 18)
    // reward = fromWei(fixedBalance['1'],18)
    reward = await getRewardBalance(type)
    // console.log('奖励',reward);
    if(type > 1) {
      if(bool) {
        price = await getToken2TokenPrice("0x0000000000000000000000000000000000000000", Address.BUSDT )
      }
      price = await getToken2TokenPrice(t, Address.BUSDT )
      // console.log(t, price);
    }
    total =  await getPoolTotal(type ) * price
    // total =  await getDepositTotal(t)
    // let H2OYear = await H2OYearIncome(type)
    YearPer = await getDemandYearARP(type , total , t)
    // YearPer = total=='0' ? 0: toolNumber((H2OYear/total)*100)
    // console.log('pid' , type);
    // console.log('total' , total);
    // console.log('H2OYear' , H2OYear);
    // console.log('YearPer' , YearPer);
  }else if(kind === 'demand'){
    
    const { D90 ,D180 ,D365  } = type
    let defaultObj = {'0':0,'1':0 }
    Balance90 = D90?  await getPledgeBalance(D90 , decimals_h) : {...defaultObj}
    Balance180 = D180?  await getPledgeBalance(D180 , decimals_h) : {...defaultObj}
    Balance365 = D365?  await getPledgeBalance(D365 , decimals_h) : {...defaultObj}
    let reward90 = await getRewardBalance(D90)
    let reward180 = await getRewardBalance(D180)
    let reward365 = await getRewardBalance(D365)
    
    balance_h = Number(fromWei(Balance90['0'],18)) + Number(fromWei(Balance180['0'],18)) + Number(fromWei(Balance365['0'],18))
    // reward = Number(fromWei(Balance90['1'],18)) + Number(fromWei(Balance180['1'],18)) + Number(fromWei(Balance365['1'],18))
    reward = Number(reward90) + Number(reward180) + Number(reward365)
    console.log('奖励',reward);
    total90 = await getPoolTotal(D90)
    total180 = await getPoolTotal(D180)
    total365 = await getPoolTotal(D365)
    total = Number(total90) + Number(total180)+ Number(total365)
    YearPer90 = await getDemandYearARP(D90 , total90 , t )
    YearPer180 = await getDemandYearARP(D180 , total180 , t )
    YearPer365 = await getDemandYearARP(D365 , total365 , t )
  }
  
  let reObj={
    decimals,
    decimals_h,
    balance,
    balance_h,
    total,
    reward,
    price
  }

  if(kind=== 'demand'){
    // reObj.balance90 = balance90
    // reObj.Balance180 = Balance180
    // reObj.Balance365 = Balance365
    reObj.total90 = total90
    reObj.total180 = total180
    reObj.total365 = total365
    reObj.YearPer90 = YearPer90
    reObj.YearPer180 = YearPer180
    reObj.YearPer365 = YearPer365
  }else {
    reObj.YearPer = YearPer
  }
  return reObj
}


// 配置价格
async function getDemandYearARP(pId , total ,token ){
  let price  = 1
  // console.log('token',token);
  // if(token !== Address.H2O){
    price = await getSwapPoolsAmountsOut(publicAddress.routerContractAddress, Address.H2O , Address.BUSDT ); //获取水价格
    // price =  await getToken2TokenPrice( token, Address.H2O , 'TEST')
  // }
  let H2OYear = await H2OYearIncome(pId )
  // console.log('price' , price);
  // console.log('H2OYear' , H2OYear);
  // console.log('total--' , total);
  // console.log('H2OYear/total' , H2OYear/(Number(total)*Number(price))*100);
  // return total=='0' ? 0: toolNumber(H2OYear/(Number(total)*Number(price))*100)
  return total=='0' ? 0: toolNumber(H2OYear*price/(Number(total))*100)
}
// 获取质押年化收益率
// export async function getPledgeYearARP(type ) {
//   const address = __ownInstance__.$store.state.base.address;
//   const contractAddress = __ownInstance__.$store.state.base.fairLaunchAddress;
//   const contract = new web3.eth.Contract(fairLaunchABI, contractAddress);
//   let balance = 0;
//   await contract.methods.userInfo( 7 , address , 0).call(function (error, result) {
//     if (!error) {
//       balance = result;
//     }
//   });
//   return balance;
// }


export async function getPoolTotal(pid ) {
  // const address = __ownInstance__.$store.state.base.address;
  const contractAddress = __ownInstance__.$store.state.base.fairLaunchAddress;
  const contract = new web3.eth.Contract(fairLaunchABI, contractAddress);
  let balance = 0;
  await contract.methods.pidBalance(pid).call(function (error, result) {
    if (!error) {
      balance = fromWei(result , 18);
    }else {
      console.log('getPoolTotalErr' ,error);
    }
  });
  return balance;
}

// 获取质押不同期余额
export async function getPledgeBalance(type ) {
  const address = __ownInstance__.$store.state.base.address;
  if(!address || address == undefined || address == '') {
    return 0;
  }
  const contractAddress = __ownInstance__.$store.state.base.fairLaunchAddress;
  const contract = new web3.eth.Contract(fairLaunchABI, contractAddress);
  let balance = 0;
  await contract.methods.getBalanceByPid(type , address).call(function (error, result) {
    if (!error) {
      balance = result;
    }
  });
  return balance;
}

// 获取定期可领取余额
export async function getPledgeReceiveable(type ,  decimals ) {
  // const contract = new web3.eth.Contract(tokenABI, tokenAddress);
  // const address = poolAddress || __ownInstance__.$store.state.base.address
  // console.log('获取可领取余额type' , type);
  const address = __ownInstance__.$store.state.base.address;
  if(!address || address == undefined || address == '') {
    return 0;
  }
  const contractAddress = __ownInstance__.$store.state.base.fairLaunchAddress;
  const contract = new web3.eth.Contract(fairLaunchABI, contractAddress);
  let balance = 0;
  await contract.methods.withdrawAmount(address , type ).call(function (error, result) {
    if (!error) {
      balance = fromWei(result, decimals);
    }else {
      console.log('withdrawAmount' , error);
    }
  });
  return balance;
}

// 获取奖励余额
export async function getRewardBalance(type ,  decimals = 18 ) {
  // const contract = new web3.eth.Contract(tokenABI, tokenAddress);
  // const address = poolAddress || __ownInstance__.$store.state.base.address
  const address = __ownInstance__.$store.state.base.address;
  if(!address || address == undefined || address == '') {
    return 0;
  }
  const contractAddress = __ownInstance__.$store.state.base.fairLaunchAddress;
  const contract = new web3.eth.Contract(fairLaunchABI, contractAddress);
  let balance = 0;
  await contract.methods.pendingH2O(type , address).call(function (error, result) {
    if (!error) {
      balance = fromWei(result, decimals);
    }else {
      console.log('pendingH2O' ,error);
    }
  });
  return balance;
}

// 获取htoken totalSupply 
export async function getHtokenTotal(tokenAddress , decimals) {
  console.log('tokenAddress' , tokenAddress);
  const contract = new web3.eth.Contract(tokenABI, tokenAddress);
  let balance = 0;
  await contract.methods.totalSupply().call(function (error, result) {
    if (!error) {
      balance = fromWei(result, decimals);
      console.log('htoken总量' , balance);
    }else {
      console.log('getHtokenTotalERR' , error);
    }
  });
  return balance;
}

// 获取htoken totalToken

export async function getTotalToken(tokenAddress , decimals) {
  console.log('tokenAddress' , tokenAddress);
  const contractAddress = __ownInstance__.$store.state.base.bankAddress;
  const contract = new web3.eth.Contract(bankABI, contractAddress);
  let balance = 0;
  await contract.methods.totalToken(tokenAddress).call(function (error, result) {
    if (!error) {
      balance = fromWei(result, decimals);
      console.log('totalToken' , balance);
    }else {
      console.log('getTotalTokenERR' , error);
    }
  });
  return balance;
}

// 获取杠杆价格
export const getToken2TokenPrice = async function (token0 , token1 ,type , amount = 1 ){

  if(type === 'TEST'){
    // console.log('TEST' , token0);
    // if(token0 === Address.BUSDT) return 1
    return 1;
  }


  if(token1 === 'USDT') return 1
  if(token0 === '0x0000000000000000000000000000000000000000') token0 = Address.WBNB
  if(token1 === '0x0000000000000000000000000000000000000000') token1 = Address.WBNB
  // console.log('token0' , token0);
  // console.log('token1' , token1);
  // if(token0 === Address.BUSDT || token1 === Address.BUSDT) return 1
  let contractAddress;
  if(token0 === Address.H2O) {
    contractAddress = publicAddress.routerContractAddress;
  } else {
    contractAddress = type==='MDEX' ? Address.MDEXRouter : Address.cakeRouter
  }  
  // console.log('获取杠杆价格：contractAddress' , contractAddress);
  const contract = new web3.eth.Contract(cakeRouterABI, contractAddress);
  let price = 0
  await contract.methods.getAmountsOut(web3.utils.toHex(toWei(amount,18)) , [token0 , token1]).call(function(error , result){
    if (!error && Array.isArray(result) && result[1] ) {
      price = fromWei(result[1], 18);
    }else   {
      console.log('getToken2TokenPrice_err',error)
    }
  })
  return price
}


export const getToken2TokenPriceByAmount = async function (token0 , token1 ,type , amount  ){

  if(type === 'TEST'){
    if(token0 === Address.BUSDT) return 1
  }


  if(token1 === 'USDT') return 1
  if(token0 === '0x0000000000000000000000000000000000000000') token0 = Address.WBNB
  if(token1 === '0x0000000000000000000000000000000000000000') token1 = Address.WBNB
  // console.log('token0' , token0);
  // console.log('token1' , token1);
  let contractAddress;
  if(token1.toUpperCase() === Address.H2O.toUpperCase()) {
    contractAddress = publicAddress.routerContractAddress;
  } else {
    contractAddress = type==='MDEX' ? Address.MDEXRouter : Address.cakeRouter
  } 
  // console.log('contractAddress' , contractAddress);
  const contract = new web3.eth.Contract(cakeRouterABI, contractAddress);
  let price = 0
  // console.log('toFixed(amount , 16)' , toFixed(amount , 16));
  let g = web3.utils.toHex(toWei(toFixed(amount , 18),18))
  await contract.methods.getAmountsOut( g, [token0 , token1]).call(function(error , result){
    if (!error && Array.isArray(result) && result[1] ) {
      price = fromWei(result[1], 18);
    }else   {
      console.log('getToken2TokenPriceByAmount_err',error)
    }
  })
  return price
}

// userPosition
export const getUserPosition = async function (id = 0){
  const address = __ownInstance__.$store.state.base.address;
  if(!address || address == undefined || address == '') {
    return 0;
  }
  const contractAddress = __ownInstance__.$store.state.base.bankAddress;
  const contract = new web3.eth.Contract(bankABI, contractAddress);
  let position = 0;
  await contract.methods.userPosition(address,id).call(function (error, result) {
    if (!error) {
      // position = fromWei(result, decimals);
      position = result
      console.log('totalToken' , position);
    }
  });
  return position;
}

// userPosition
export const getPosition = async function (posId){
  // const address = __ownInstance__.$store.state.base.address;
  const contractAddress = __ownInstance__.$store.state.base.bankAddress;
  const contract = new web3.eth.Contract(bankABI, contractAddress);
  let position = 0;
  await contract.methods.positions(posId).call(function (error, result) {
    if (!error) {
      // position = fromWei(result, decimals);
      position = result
      // console.log('totalToken' , position);
    }
  });
  return position;
}

// 获取持仓列表
export const getUserPositionList = async function (){
  const address = __ownInstance__.$store.state.base.address;
  if(!address || address == undefined || address == '') {
    return [];
  }
  const contractAddress = __ownInstance__.$store.state.base.bankAddress;
  const contract = new web3.eth.Contract(bankABI, contractAddress);
  let position ;
  await contract.methods.getUserPosition(address).call(function (error, result) {
    if (!error) {
      // position = fromWei(result, decimals);
      position = result
      // console.log('持仓列表' , position);
    }
  });
  return position;
}

// 获取所有币对持仓
export const getAllTokenPosition = async function (){
  // const address = __ownInstance__.$store.state.base.address
  const contractAddress = __ownInstance__.$store.state.base.bankAddress;
  const contract = new web3.eth.Contract(bankABI, contractAddress);
  let position ;
  await contract.methods.getAllPosition().call(function (error, result) {
    if (!error) {
      // position = fromWei(result, decimals);
      position = result
      // console.log('所有币对持仓' , position);
    }
  });
  return position;
}

// 获取shares
export const getRedeemLiquidityShares = async function (contractAddress , posId){
  const address = __ownInstance__.$store.state.base.address;
  const contract = new web3.eth.Contract(goblinABI, contractAddress);
  let shares = 0 ;
  await contract.methods.shares(posId).call(function (error, result) {
    if (!error) {
      // position = fromWei(result, decimals);
      shares = result
      // console.log('shares' , result);
    }
  });
  return shares;
}
// 获取liquidity
export const getRedeemLiquidity = async function (contractAddress , shares ,decimals){
  const address = __ownInstance__.$store.state.base.address;
  const contract = new web3.eth.Contract(goblinABI, contractAddress);
  let liquidity = 0 ;
  await contract.methods.shareToBalance(shares).call(function (error, result) {
    if (!error) {
      liquidity = fromWei(result, decimals);
      // liquidity = result
      // console.log('liquidity' , liquidity);
    }else {
      console.log('getRedeemLiquidity' , error);
    }
  });
  return liquidity;
}

// 获取lptoken

export const getLptoken = async function (contractAddress ){
  // const address = __ownInstance__.$store.state.base.address;
  const contract = new web3.eth.Contract(goblinABI, contractAddress);
  let lptoken = 0 ;
  await contract.methods.lpToken().call(function (error, result) {
    if (!error) {
      lptoken = result
      // console.log('lptoken' , lptoken);
    }else {
      console.log('getLptoken' ,error );
    }
  });
  return lptoken;
}



// 获取lptokenTotalSupply

export const getLptokenTotalSupply = async function (contractAddress, decimals ){
  // const address = __ownInstance__.$store.state.base.address;
  const contract = new web3.eth.Contract(LptokenABI, contractAddress);
  let totalSupply = 0 ;
  await contract.methods.totalSupply().call(function (error, result) {
    if (!error) {
      totalSupply = fromWei(result, decimals)
      // console.log('totalSupply' , totalSupply);
    }else {
      console.log('getLptokenTotalSupply' , error);
    }
  });
  return totalSupply;
}



// 获取lptokenReserves

export const getLptokenReserves= async function (contractAddress, decimals0 , decimals1 ){
  // const address = __ownInstance__.$store.state.base.address;
  const contract = new web3.eth.Contract(LptokenABI, contractAddress);
  let Reserves = 0 ;
  await contract.methods.getReserves().call(function (error, result) {
    if (!error) {
      const { _reserve0 , _reserve1 } = result
      Reserves = {
        amount0:fromWei(_reserve0 , decimals0),
        amount1:fromWei(_reserve1 , decimals1)
      }
      // console.log('Reserves' , Reserves);
    }else {
      console.log('getLptokenReserves' , error);
    }
  });
  return Reserves;
}


// 获取持仓H2O奖励
export async function getPositionRewardBalance(pid  , decimals ) {
  const address = __ownInstance__.$store.state.base.address;
  if(!address || address == undefined || address == '') {
    return 0;
  }
  const contractAddress = __ownInstance__.$store.state.base.fairLaunchAddress;
  const contract = new web3.eth.Contract(fairLaunchABI, contractAddress);
  let balance = 0;
  await contract.methods.pendingH2O(pid , address).call(function (error, result) {
    if (!error) {
      balance = fromWei(result, decimals);
      // console.log('持仓H2O奖励balance' , balance);
    }else {
      console.log('pendingH2O' ,error);
    }
  });
  return balance;
}

export async function getPositionRewardBalanceBNB(contractAddress , decimals) {
  console.log('contractAddress',contractAddress);
  const address = __ownInstance__.$store.state.base.address;
  if(!address || address == undefined || address == '') {
    return 0;
  }
  const contract = new web3.eth.Contract(goblinMDEXABI, contractAddress);
  let balance = 0;
  await contract.methods.earned(address).call(function (error, result) {
    if (!error) {
      balance = fromWei(result, decimals);
    }else {
      console.log('earned' ,error);
    }
  });
  return balance;
}






// 
export async function getTotalAllocPoint( ) {
  const contractAddress = __ownInstance__.$store.state.base.fairLaunchAddress;
  const contract = new web3.eth.Contract(fairLaunchABI, contractAddress);
  let balance = 0;
  await contract.methods.totalAllocPoint().call(function (error, result) {
    if (!error) {
      balance = result;
    }else {
      console.log('totalAllocPoint_error' ,error);
    }
  });
  return balance;
}


export async function getH2OPerBlock( ) {
  const contractAddress = __ownInstance__.$store.state.base.fairLaunchAddress;
  const contract = new web3.eth.Contract(fairLaunchABI, contractAddress);
  let balance = 0;
  await contract.methods.H2OPerBlock().call(function (error, result) {
    if (!error) {
      balance = result;
    }else {
      console.log('H2OPerBlock_error' ,error);
    }
  });
  return balance;
}



export async function getPoolInfo( pId ) {
  // console.log('poolInfo' , pId);
  const contractAddress = __ownInstance__.$store.state.base.fairLaunchAddress;
  const contract = new web3.eth.Contract(fairLaunchABI, contractAddress);
  let balance = 0;
  await contract.methods.poolInfo(pId).call(function (error, result) {
    if (!error) {
      balance = result;
    }else {
      console.log('poolInfo_error' ,error);
    }
  });
  return balance;
}


export const getAllbanks = async function (address){
  const contractAddress = __ownInstance__.$store.state.base.bankAddress;
  const contract = new web3.eth.Contract(bankABI, contractAddress);
  let position ;
  await contract.methods.banks(address).call(function (error, result) {
    if (!error) {
      // position = fromWei(result, decimals);
      position = result
    }
  });
  return position;
}

export async function H2OYearIncome(pId ){
  let totalAllocPoint = await getTotalAllocPoint()
  let H2OPerBlock = await getH2OPerBlock()
  let allocPoint = await getPoolInfo(pId)
  let H2OPutOutYear 
  if(totalAllocPoint == '0') {
      H2OPutOutYear = 0
  }else {
      H2OPutOutYear = (allocPoint.allocPoint || 0)/totalAllocPoint * Number(fromWei(H2OPerBlock , 18))
  }
  H2OPutOutYear = H2OPutOutYear * 10512000 * 0.7
  return H2OPutOutYear
}



export async function H2OYearIncomeFarm(pId , address, totalTvlYear){
  let totalTvl = 0;
  let H2OPutOutYear = await H2OYearIncome(pId)
  if(totalTvlYear && totalTvlYear > 0) {
    totalTvl = totalTvlYear;
  } else {
    let total = await getAllbanks(address)
    totalTvl = fromWei(total.totalVal , 18)
  }
  // let token2TokenPrice = await getToken2TokenPrice( address, Address.BUSDT )
  let token2TokenPrice = await getSwapPoolsAmountsOut(publicAddress.routerContractAddress, address, Address.BUSDT )

  return totalTvl=='0' ? 0: H2OPutOutYear*token2TokenPrice/Number(totalTvl)
}

// 获取交易费率
export const getYearRateFee = async function (contractAddress  , type){
  // const address = __ownInstance__.$store.state.base.address;
  let ABI = type ==='PS' || type === 'HS' ? goblinABI:goblinMDEXABI
  const contract = new web3.eth.Contract(ABI, contractAddress);
  let feeBps = 0 ;
  await contract.methods.feeBps().call(function (error, result) {
    if (!error) {
      feeBps = result
      // console.log('feeBps' , feeBps);
    }
  });
  return feeBps;
}




// 获取positionInfo
export async function getPositionInfo(posId) {
  const contractAddress = __ownInstance__.$store.state.base.bankAddress;
  const contract = new web3.eth.Contract(bankABI, contractAddress);
  let list ;
  await contract.methods.positionInfo(posId).call(function (error, result) {
    if (!error) {
      list = result;
    }else{
      console.log('getPositionInfo' ,error);
    }
  });
  return list;
}


export async function getAmountOut(amountIn , reserveIn , reserveOut , type) {
  const contractAddress = type==='MDEX' ? Address.MDEXRouter  :  Address.cakeRouter
  const contract = new web3.eth.Contract(cakeRouterABI, contractAddress);
  let res ;
  await contract.methods.getAmountOut(toWei(toFixed(amountIn , 6) , 18) , toWei(toFixed(reserveIn,6) , 18) , toWei(toFixed(reserveOut,6) , 18)).call(function (error, result) {
    if (!error) {
      res = fromWei(result , 18);
    }else{
      console.log('getAmountOut' ,error);
    }
  });
  return res;
}


//获取 Pools 池子数据
export async function getPoolsTokensData(goblinAddress, currencyToken, pId, tk0Address, tk1Address){
  const address = __ownInstance__.$store.state.base.address
  const decimals = __ownInstance__.$store.state.base.tokenDecimals
  let totalTvl = await getPoolsTotalShare(goblinAddress, decimals);
  let tokenPrice = 0;
  if(pId == 17) { //Guru池子的话
    tokenPrice = await getSwapPoolsAmountsOut(Address.cakeRouter, currencyToken, Address.BUSDT, Address.WBNB) //获取池子价格
  } else {
    if(currencyToken === Address.WLP) {
      tokenPrice = await getToken2TokenPrice(currencyToken ,"USDT" )
    } else {
      tokenPrice = await getToken2TokenPrice(currencyToken, Address.BUSDT) //获取池子价格
    }
  }
  // let tokenPrice = await getToken2TokenPrice(currencyToken, Address.BUSDT) //获取池子价格
  let userBalance = 0;
  let userBalanceUsd = 0;
  let reward = 0;
  let YearPer = 0;
  let YearPerAPR = 0;
  if(pId && pId > 0) {
    reward = await getPositionRewardBalance(pId, decimals); //获取奖励
    // console.log(pId, reward);
    if(address && address !== undefined && address !== '') {
      userBalance = await getPoolsAddressBalance(goblinAddress, address, Address.BUSDT) //获取我的存款余额
    }
    let totalTvlYear = totalTvl * tokenPrice;
    YearPer = await getDemandYearARP(pId, totalTvlYear, currencyToken);
  } else {
    // console.log("qqqq");
    if(address && address !== undefined && address !== '') {
      userBalance = await getH2OUserInfo(goblinAddress);
    }
    if(currencyToken !== Address.WLP) { //WLP 不计算收益率
      reward = await getH2OPendingBonus(goblinAddress); //获取奖励
      // let nowBlock = 
      let nowBlock = await getBlockNumber(); //当前块编号
      let bonusPerShare = await getH2OAccBonusPerShare(goblinAddress); //累计收益
      let lastEarnBlock = await getH2OLastEarnBlock(goblinAddress); //上次收益块编号数
      let lastAccBonusPerShare = await getH2OLastAccBonusPerShare(goblinAddress); //上次累计收益
      let cakePrice = await getToken2TokenPrice(Address.CakeAddress, Address.BUSDT) //获取Cake价格
      let H2OPrice = await getSwapPoolsAmountsOut(publicAddress.routerContractAddress, Address.H2O , Address.BUSDT ); //获取水价格
      // console.log(cakePrice);
      // 年化收益率 = 秒化收益率   *3600*24*365
      // 秒化收益率 （accBonusPerShare - lastAccBonusPerShare）/ （nowBlock  -lastEarnBlock ）/ 3
      // console.log(bonusPerShare, lastAccBonusPerShare, nowBlock,lastEarnBlock);
      let accBonus = (bonusPerShare - lastAccBonusPerShare) * 12;
      if(accBonus > 0) {
        // let secondRate = accBonus / (nowBlock - lastEarnBlock) / 3; //秒化收益率
        // console.log(accBonus);
        // YearPer = secondRate * 3600 * 24 * 365;
        // YearPer = accBonus * 365 * cakePrice / H2OPrice;
        YearPer =  (Math.pow((accBonus * cakePrice / H2OPrice / Math.pow(10, 12)) + 1, 365) - 1) * 100;
        YearPerAPR =  calcDailyDefault0(YearPer / 100, false); //apy or apr
      }
      // console.log(YearPer);
    } else {
      //  计算TVL
      let amountsOut = await getSwapPoolsAmountsOut(Address.cakeRouter, tk0Address, Address.USDT); //获取估值
      // let amountsOut = await getSwapPoolsAmountsOut(Address.cakeRouter, tk0Address, Address.BUSD, '', 1); //获取估值
      let reserves = await getSwapPoolsReserves(Address.oracleRouter, tk0Address, tk1Address); //获取预言机数据
      let totalSupply = await getSwapPoolsTotalSupply(Address.oracleRouter, tk0Address, tk1Address); //获取总的余额
      let total = await getPoolsTotalShare(goblinAddress);
      // let sharesTotal = getSharesTotal(pool.pairTokenAddress);
      let mdx = reserves[0] * total / totalSupply;
      // console.log(amountsOut, reserves[0], total, totalSupply, mdx);
      // console.log(amountsOut, total, totalSupply, mdx);
      // let wht = reserves[1] * total / totalSupply;
      totalTvl = amountsOut ? amountsOut * Number(mdx) : 0; //总的TVL
      totalTvl *=2 ;

      userBalanceUsd = (amountsOut * (reserves[0] * userBalance / totalSupply)) * 2;
    }
  } 
  let reObj = {
    totalTvl: totalTvl,
    tokenPrice: tokenPrice,
    userBalance: userBalance,
    userBalanceUsd: userBalanceUsd,
    reward: reward,
    yearPer: YearPer,
    yearPerAPR: YearPerAPR,
  };
  return reObj;
}

//获取 Farms 池子数据
export async function getFarmsTokensData(pool){
  console.log(pool);
  const address = __ownInstance__.$store.state.base.address
  const decimals = __ownInstance__.$store.state.base.tokenDecimals
  let totalTvl = 0;
  let tokenPrice = 0;
  let reward = 0;
  let userBalance = 0;
  let userBalanceUsd = 0;
  let YearPer = 0;
  let YearPerAPR = 0;

  //计算TVL
  let amountsOut = await getSwapPoolsAmountsOut(Address.cakeRouter, pool.tk0Address, Address.BUSD, '', 1); //获取估值
  let reserves = await getSwapPoolsReserves(Address.oracleRouter, pool.tk0Address, pool.tk1Address); //获取预言机数据
  let totalSupply = await getSwapPoolsTotalSupply(Address.oracleRouter, pool.tk0Address, pool.tk1Address); //获取总的余额
  let total = await getPoolsTotalShare(pool.goblin);
  // let sharesTotal = getSharesTotal(pool.pairTokenAddress);
  let mdx = reserves[0] * total / totalSupply;
  // console.log(amountsOut, reserves[0], total, totalSupply, mdx);
  // console.log(amountsOut, total, totalSupply, mdx);
  // let wht = reserves[1] * total / totalSupply;
  totalTvl = amountsOut ? amountsOut * Number(mdx) : 0; //总的TVL
  if(pool.tvlDouble){
    totalTvl *=2 ;
  }
  // console.log(totalTvl);

  tokenPrice = await getSwapPoolsAmountsOut(Address.cakeRouter, pool.tk0Address, Address.BUSD ); //获取价格

  reward = await getPositionRewardBalance(pool.pId, decimals); //获取奖励

  //获取我的存款余额及估值
  userBalance = await getFarmsLpBalance(pool.goblin); //获取我的存款余额
  let tk0d = 0;
  let tk1d = 0;
  if(pool.isSingle) { //如果是单池的话
    tk0d = userBalance
  } else {
    tk0d = reserves[0] * userBalance / totalSupply;
    tk1d = reserves[1] * userBalance / totalSupply;
  }
  if(pool.tk0Address == Address.BUSD) {  
    const tmptk = tk0d;
    tk0d = tk1d;
    tk1d = tmptk;
  }
  if(amountsOut > 0) {
    let resultmdxtou = amountsOut * tk0d;
    if(pool.isSingle) { //如果是单池的话
      userBalanceUsd = (resultmdxtou * 1)
    }else{
      userBalanceUsd = (resultmdxtou * 2)
    }
  }

  // let totalTvlYear = totalTvl;
  YearPer = await getDemandYearARP(pool.pId, totalTvl);
  let reObj = {
    totalTvl: totalTvl,
    tokenPrice: tokenPrice,
    userBalance: userBalance,
    userBalanceUsd: userBalanceUsd,
    reward: reward,
    yearPer: YearPer,
    yearPerAPR: YearPerAPR,
  };
  return reObj;
}

//获取 HashPowerPools 池子数据
export async function getHashPowerPoolsTokensData(goblinAddress, currencyToken, pId){
  const address = __ownInstance__.$store.state.base.address
  const decimals = __ownInstance__.$store.state.base.tokenDecimals
  let totalTvl = await getPoolsTotalShare(goblinAddress, decimals);
  let tokenPrice = 50;
  // tokenPrice = await getToken2TokenPrice(currencyToken, Address.BUSDT) //获取池子价格
  let userBalance = 0;
  let reward = 0;
  let btcbReward = 0;
  let h2oReward = 0;
  let YearPer = 0
  let H2OYearPer = 0
  let BTCBYearPer = 0
  let btcbPrice = 0
  if(pId) {
    h2oReward = await getPositionRewardBalance(pId, decimals); //获取H2O奖励
    btcbReward = await getH2OPendingBonus(goblinAddress, 8); //获取BTCB奖励
    if(address && address !== undefined && address !== '') {
      userBalance = await getH2OUserInfo(goblinAddress);
    }
    // console.log(pId, h2oReward, btcbReward);
    // console.log(pId, totalTvl, tokenPrice, userBalance)
    // let bonusPerShare = await getH2OAccBonusPerShare(goblinAddress); //累计收益
    // let lastAccBonusPerShare = await getH2OLastAccBonusPerShare(goblinAddress); //上次累计收益
    // let cakePrice = await getToken2TokenPrice("0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", Address.BUSDT) //获取Cake价格
    // let H2OPrice = await getSwapPoolsAmountsOut(publicAddress.routerContractAddress, Address.H2O , Address.BUSDT ); //获取水价格
    btcbPrice = await getToken2TokenPrice(Address.BTCB, Address.BUSDT) //获取btcb价格
    // let accBonus = (bonusPerShare - lastAccBonusPerShare) * 12;

    let h2oTotalTvlYear = totalTvl * tokenPrice; //H2O挖矿收益
    H2OYearPer = await getDemandYearARP(pId, h2oTotalTvlYear, currencyToken);
    // if(accBonus > 0) {
    //   // 累计收益 - 上次累计收益） * BTCB价格 / S19价格  +  H2O收益 / S19 TVL
    //   YearPer =  ((accBonus * btcbPrice / tokenPrice) + (h2oYearPer / (totalTvl * tokenPrice))) * 100;
    //   H2OYearPer = h2oYearPer / (totalTvl * tokenPrice) * 100;
    //   BTCBYearPer = accBonus * btcbPrice / tokenPrice * 100;
    // }
  } 
  let reObj = {
    totalTvl: totalTvl,
    tokenPrice: tokenPrice,
    userBalance: userBalance,
    reward: reward,
    btcbReward: btcbReward,
    h2oReward: h2oReward,
    yearPer: YearPer,
    h2oYearPer: H2OYearPer,
    btcbYearPer: BTCBYearPer,
    btcbPrice: btcbPrice,
  };
  return reObj;
}

//获取 Pools 总的TVL
export const getPoolsTotalShare = async function (goblinAddress, decimals) {
  const contract = new web3.eth.Contract(goblinPoolsABI, goblinAddress);
  let total = 0;
  await contract.methods.totalShare().call(function (error, result) {
    if (!error) {
      // console.log(result);
      total = fromWei(result, decimals);
    }else {
      console.log('totalShareErr' , error);
    }
  });
  return total;
}

// Farms LP 获取池子 我的存款余额
export const getFarmsLpBalance = async function (goblinAddress, address=__ownInstance__.$store.state.base.address, decimals=__ownInstance__.$store.state.base.tokenDecimals) {
  const contract = new web3.eth.Contract(goblinPoolsABI, goblinAddress);
  let balance = 0;
  await contract.methods.lpwantshares(address).call(function (error, result) {
    if (!error) {
      // console.log(result);
      balance = fromWei(result, decimals);
    }else {
      console.log('lpwantsharesErr' , error);
    }
  });
  return balance;
}

// Pools 获取池子 我的存款余额
export const getPoolsAddressBalance = async function (goblinAddress, address=__ownInstance__.$store.state.base.address, decimals=__ownInstance__.$store.state.base.tokenDecimals) {
  const contract = new web3.eth.Contract(goblinPoolsABI, goblinAddress);
  let balance = 0;
  await contract.methods.cakeshares(address).call(function (error, result) {
    if (!error) {
      // console.log(result);
      balance = fromWei(result, decimals);
    }else {
      console.log('cakesharesErr' , error);
    }
  });
  return balance;
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
  const allowanceRes = await getSwapPoolsAllowance(address, pool.tokenAddress, publicAddress.CONTRACT_ADDRESS_V2);
  if(pool.tokenAddress.toUpperCase() === publicAddress.BNB_ADDR.toUpperCase()) { //如果是BNB的话 不需要批准
    allowance = 1;
    tokenBalance = await getBalance("0x0000000000000000000000000000000000000000", pool.tokenDecimals);
  } else {
    allowance = web3.utils.fromWei(allowanceRes, 'ether');
    tokenBalance = await getBalance(pool.tokenAddress, pool.tokenDecimals);
  }
  // const guruBalance = await getBalance('0xF1932eC9784B695520258F968b9575724af6eFa8', 18);
  // console.log(guruBalance);
  reserves = await getSwapPoolsReserves(publicAddress.oracleContractAddress, pool.tk0Address, pool.tk1Address);
  totalSupply = await getSwapPoolsTotalSupply(publicAddress.oracleContractAddress, pool.tk0Address, pool.tk1Address);
  const tokenBalanceUsdRes = await getSwapPoolsAmountsOut(publicAddress.routerContractAddress, pool.tk0Address, pool.tk1Address);
  if(tokenBalanceUsdRes > 0) {
    tokenBalanceUsd = tokenBalanceUsdRes;
  }
  // console.log(tokenBalanceUsd);
  let reObj = {
    allowance: allowance,
    tokenBalance: tokenBalance,
    reserves: reserves,
    totalSupply: totalSupply,
    tokenBalanceUsd: tokenBalanceUsd,
  };
  return reObj;
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
  const allowanceRes = await getSwapPoolsAllowance(address, pool.tokenAddress, publicAddress.routerContractAddress);
  allowance = web3.utils.fromWei(allowanceRes, 'ether');
  tokenBalance = await getBalance(pool.tokenAddress, pool.tokenDecimals);
  // const guruBalance = await getBalance('0xF1932eC9784B695520258F968b9575724af6eFa8', 18);
  // console.log(guruBalance);
  reserves = await getSwapPoolsReserves(publicAddress.oracleContractAddress, pool.tk0Address, pool.tk1Address);
  totalSupply = await getSwapPoolsTotalSupply(publicAddress.oracleContractAddress, pool.tk0Address, pool.tk1Address);
  const tokenOneBalanceUsdRes = await getSwapPoolsAmountsOut(publicAddress.routerContractAddress, pool.tk0Address, pool.tk1Address);
  if(tokenOneBalanceUsdRes > 0) {
    tokenOneBalanceUsd = tokenOneBalanceUsdRes;
  }
  const tokenTwoBalanceUsdRes = await getSwapPoolsAmountsOut(publicAddress.routerContractAddress, pool.tk1Address, pool.tk0Address);
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

//Farms LP 
export const getWantLockedTotal = async function (pairTokenAddress) {
  // console.log(oracleContractAddress, tk0Address, tk1Address);
  const contract = new web3.eth.Contract(stratABI, pairTokenAddress);
  let shareTresult = 0;
  await contract.methods.wantLockedTotal().call(function (error, result) {
    if (!error) {
      // console.log(result);
      shareTresult = result;
    }else {
      console.log('wantLockedTotalErr' , error);
    }
  });
  return shareTresult;
}

//Farms LP 
export const getSharesTotal = async function (pairTokenAddress) {
  // console.log(oracleContractAddress, tk0Address, tk1Address);
  const contract = new web3.eth.Contract(stratABI, pairTokenAddress);
  let sharesTotal = 0;
  await contract.methods.sharesTotal().call(function (error, result) {
    if (!error) {
      // console.log(result);
      sharesTotal = result;
    }else {
      console.log('sharesTotalErr' , error);
    }
  });
  return sharesTotal;
}

//获取Farms LP 已存入余额
export const stakedWantTokens = async function (poolId, chefAddress) {
  // console.log(oracleContractAddress, tk0Address, tk1Address);
  const address = __ownInstance__.$store.state.base.address
  const contract = new web3.eth.Contract(masterChefABI, chefAddress);
  let stakedWantTokens = 0;
  await contract.methods.stakedWantTokens(poolId, address).call(function (error, result) {
    if (!error) {
      // console.log(result);
      stakedWantTokens = result;
    }else {
      console.log('stakedWantTokensErr' , error);
    }
  });
  return stakedWantTokens;
}


//获取估值
export const getSwapPoolsAmountsOut = async function (routerContractAddress, tk0Address, tk1Address, bnbAddress) {
  // console.log(oracleContractAddress, tk0Address, tk1Address);
  const contract = new web3.eth.Contract(mdexABI, routerContractAddress);
  let amountsOut = 0;
  let path = [];
  if(bnbAddress && bnbAddress !== '') {
    path = [tk0Address, bnbAddress, tk1Address];
  } else {
    path = [tk0Address, tk1Address];
  }
  const Gwei1 = 1000000000;
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
  const contract = new web3.eth.Contract(mdexABI, publicAddress.routerContractAddress);
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
  const contract = new web3.eth.Contract(mdexABI, publicAddress.routerContractAddress);
  let path = [tk0Address, tk1Address];
  // console.log(path);
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

// 获取交易费率
export const getWithdrawData = async function ( posId ,  borrowAddress , debt , backType , contractAddress  , type){
  // console.log('posId',posId);
  // console.log('borrowToken',borrowAddress);
  // console.log('debt',debt);
  // console.log('backType',backType);
  // console.log('contractAddress',contractAddress);
  // console.log('type',type);
  // const address = __ownInstance__.$store.state.base.address;
  let ABI = type ==='PS' || type === 'HS' ? goblinABI:goblinMDEXABI
  const contract = new web3.eth.Contract(ABI, contractAddress);
  let res = 0 ;
  await contract.methods.getWithdrawData(posId ,  borrowAddress , debt , backType ).call(function (error, result) {
    if (!error) {
      res = result
      // console.log('交易金额返回' , res);
    }
  });
  return res;
}

/**
 * 获取各平台年利率数据
 * @param {*} type 
 * @returns 
 */
 export const getYieldFarmAPRv2 = async function(){
  const apiUrl = __ownInstance__.$store.state.base.apiUrl;
  let result = [];
  let data = await $get(apiUrl + '/api/apy/getReptileH2OData')
  if(data && data.code == 10000) {
    result = data.data;
  }
  return result;
}

// 用户是否已经接受推荐关系
export async function  getUpperAcceptRecommendation() {
  const address = __ownInstance__.$store.state.base.address;
  if(!address || address == undefined || address == '') {
    return '';
  }
  const airdropAddress = __ownInstance__.$store.state.base.airdropAddress
  const contract = new web3.eth.Contract(airdropABIs , airdropAddress)
  let result = '';
  await contract.methods.getUppers(address).call(function(err,res) {
    if(!err){
      if(res && res[0] !== '0x0000000000000000000000000000000000000000') {
        result = res[0]; //这里只展示一级
      } else {
        result = null;
      }
    } else {
      console.log('getUppers_err',err)
    }
  })
  return result;
}

// 获取H2O池子我的存款余额
export async function getH2OUserInfo(contractAddr, userAddress) {
  const address = userAddress || __ownInstance__.$store.state.base.address;
  const contractAddress = contractAddr || __ownInstance__.$store.state.base.h2oPoolAddress
  const contract = new web3.eth.Contract(H2OPoolsABI, contractAddress);
  let balance = 0;
  const Gwei1 = 1000000000;
  await contract.methods.userInfo(address).call(function (error, result) {
    if (!error) {
      if(result && result['shares']) {
        balance = keepDecimalNotRounding(byDecimals(result['shares'], 18), 6, true)
      }
    }else{
      console.log('userInfo' ,error);
    }
  });
  return balance;
}

//获取当前块编号
export async function getBlockNumber() {
  let number = 0;
  await web3.eth.getBlockNumber().then((res) => {
    number = res;
  });
  return number;
}

// 获取H2O池子累计收益
export async function getH2OAccBonusPerShare(goblinAddress) {
  const contractAddress = goblinAddress || __ownInstance__.$store.state.base.h2oPoolAddress
  const contract = new web3.eth.Contract(H2OPoolsABI, contractAddress);
  let num = 0;
  await contract.methods.accBonusPerShare().call((error, result) => {
    if (!error) {
      num = result;
    }else{
      console.log('accBonusPerShare' ,error);
    }
  });
  return num;
}

// 获取H2O池子上次收益块编号数
export async function getH2OLastEarnBlock(goblinAddress) {
  const contractAddress = goblinAddress || __ownInstance__.$store.state.base.h2oPoolAddress
  const contract = new web3.eth.Contract(H2OPoolsABI, contractAddress);
  let num = 0;
  await contract.methods.lastEarnBlock().call((error, result) => {
    if (!error) {
      num = result
    }else{
      console.log('accBonusPerShare' ,error);
    }
  });
  return num;
}

// 获取H2O池子上次收益块编号数
export async function getH2OLastAccBonusPerShare(goblinAddress) {
  const contractAddress = goblinAddress || __ownInstance__.$store.state.base.h2oPoolAddress
  const contract = new web3.eth.Contract(H2OPoolsABI, contractAddress);
  let num = 0;
  await contract.methods.lastAccBonusPerShare().call((error, result) => {
    if (!error) {
      num = result
    }else{
      console.log('lastAccBonusPerShare' ,error);
    }
  });
  return num;
}

// 获取H2O池子奖励
export async function getH2OPendingBonus(goblinAddress, number=6) {
  const address = __ownInstance__.$store.state.base.address;
  const contractAddress = goblinAddress || __ownInstance__.$store.state.base.h2oPoolAddress
  const contract = new web3.eth.Contract(H2OPoolsABI, contractAddress);
  let num = 0;
  await contract.methods.pendingBonus(address).call((error, result) => {
    if (!error) {
      // console.log(result);
      // num = keepDecimalNotRounding(fromWei(result, 18), number, true)
      num = fromWei(result, 18);
    }else{
      console.log('pendingBonus' ,error);
    }
  });
  return num;
}

// 获取Farms池子amount数量的LP
export async function getH2OFarmsNumberLp(poolId, goblin) {
  const address = __ownInstance__.$store.state.base.address;
  const contractAddress = poolId == 1 ? "0xEC7fD838B12356577fcFDa333b707fbf44308185" : "0x73feaa1eE314F8c655E354234017bE2193C9E24E";
  const contract = new web3.eth.Contract(masterChefABI, contractAddress);
  let num = 0;
  await contract.methods.userInfo(poolId, goblin).call((error, result) => {
    if (!error) {
      // console.log(result);
      num = result.amount;
    }else{
      console.log('userInfo' ,error);
    }
  });
  return num;
}

//获取游戏-充提系统-充提余额
export async function getGameFillingBalance(decimals=18) {
  const address = __ownInstance__.$store.state.base.address;
  const contractAddress = __ownInstance__.$store.state.base.gamesFillingAddress;
  const contract = new web3.eth.Contract(gameFillingABI, contractAddress);
  let num = 0;
  await contract.methods.userInfo(address).call((error, result) => {
    if (!error) {
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
export const saveNotifyStatus = async function(status, type=true){
  const apiUrl = __ownInstance__.$store.state.base.apiUrl;
  const address = __ownInstance__.$store.state.base.address;
  await $get(apiUrl + '/h2omarketplace/Reward/saveNotifyStatus?address='+address+'&status='+status+'&type='+type);
}

//获取游戏-充提系统-修改充提记录日志状态
export const setDepWithdrawStatus = async function(deWithId, status, type=true){
  const apiUrl = __ownInstance__.$store.state.base.apiUrl;
  const address = __ownInstance__.$store.state.base.address;
  await $get(apiUrl + '/h2omarketplace/Reward/setDepWithdrawStatus?address='+address+'&deWithId='+deWithId+'&status='+status+'&type='+type);
}

//获取游戏-充提系统-监听充提状态是否执行完成
export const getGameFillingWithdrawStatus = async function(withdrawId){
  const apiUrl = __ownInstance__.$store.state.base.apiUrl;
  const address = __ownInstance__.$store.state.base.address;
  let data = await $get(apiUrl + '/h2omarketplace/Reward/getGameFillingWithdrawStatus?address='+address+'&withdrawId='+withdrawId);
  let status = 0;
  if(data && data.code == 10000) {
    status = data.data;
  }
  return status;
}

//记录充提记录到数据库 修改充提状态为充提中
export const setH2ODepositWithdraw = async (params={}) => {
  const apiUrl = __ownInstance__.$store.state.base.apiUrl;
  if(params && params.hash !== '') {
    await axios.post(apiUrl + '/h2omarketplace/Reward/depositWithdraw', params).then((json) => {
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

//用户地址写入数据库
export const setUserAddressData = async function(status){
  const apiUrl = __ownInstance__.$store.state.base.apiUrl;
  const address = __ownInstance__.$store.state.base.address;
  if(address && address !== '') {
    await $get(apiUrl + '/h2o/H2o/setUserInfo?address='+address);
  }
}

/**
 * 获取用户空投信息
 * @param {*} type 
 * @returns 
 */
 export const getUserAirDropInfo = async function(){
  const apiUrl = __ownInstance__.$store.state.base.apiUrl
  const address = __ownInstance__.$store.state.base.address;
  let result = [];
  if(address && address !== '') {
    let data = await $get(apiUrl + '/h2o/H2o/getUserInfo?address='+address)
    if(data && data.code == 10000) {
      result = data.data;
    }
  }
  return result;
}

/**
 * 获取用户空投邀请人列表
 * @param {*} type 
 * @returns 
 */
 export const getMyInvitationList = async function(){
  const apiUrl = __ownInstance__.$store.state.base.apiUrl
  const address = __ownInstance__.$store.state.base.address;
  let result = [];
  if(address && address !== '') {
    let data = await $get(apiUrl + '/h2o/H2o/getMyInvitationList?address='+address)
    if(data && data.code == 10000) {
      result = data.data;
    }
  }
  return result;
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
  if(address && address !== '') {
    if(apiUrl === 'http://www.api.com') {
      let data = await $get('https://www.h2ofinance.pro/getPoolBtc')
      if(data) {
        result = data;
      }
    } else {
      let data = await $get('/getPoolBtc')
      if(data) {
        result = data;
      }
    }
  }
  return result;
}

// 获取WOW池子价格
export async function getWOWUserInfo(contractAddress, userAddress) {
  const address = userAddress || __ownInstance__.$store.state.base.address;
  // const contractAddress = contractAddr || __ownInstance__.$store.state.base.h2oPoolAddress
  const contract = new web3.eth.Contract(H2OPoolsWOWABI, contractAddress);
  let price = 0;
  const Gwei1 = 1000000000;
  await contract.methods.userInfo(address).call(function (error, result) {
    if (!error) {
      // console.log(result);
      if(result && result['depoitedPrice']) {
        price = keepDecimalNotRounding(Number(result['depoitedPrice']) / 1000, 6, true)
      }
    }else{
      console.log('userInfo' ,error);
    }
  });
  return price;
}
