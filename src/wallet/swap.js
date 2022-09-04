import {  fromWei , toWei } from '@/utils/tools'
import erc20ABI from './abis/erc20ABI.json'
import swapABI from './abis/swapABI.json'
import swapRouterABI from './abis/swapRouterABI.json'
import configAddress from './swap_pools'
import { splitSignature } from '@ethersproject/bytes';
const publicAddress = configAddress.publicAddress;
/**
 * 批准操作
 * @param {*} tokenAddress 
 * @returns 
 */
export const clickApprove = function (tokenAddress){
  // const tokenAddress = __ownInstance__.$store.state.base.tokenAddress
  const address = __ownInstance__.$store.state.base.address;
  const contractAddress = tokenAddress;
  const contract = new web3.eth.Contract(erc20ABI, contractAddress);
  const value = "10000000000000000000000000000000000000000000000000000000";
  let encodedABI = contract.methods.approve(publicAddress.CONTRACT_ADDRESS_V2, value).encodeABI();

  let timestamp = new Date().getTime().toString()
  __ownInstance__.$store.dispatch('createOrderForm' , {val:0 ,id:timestamp })
  return new Promise((resolve, reject) => {
    let hashInfo
    web3.eth.getTransactionCount(address).then(async transactionNonce => {
      let gasPrice = await web3.eth.getGasPrice();
      let estimateGas = await web3.eth.estimateGas({
        from: address,
        to: contractAddress, // 池地址
        data: encodedABI, // Required
      })
      console.log('estimateGas' ,estimateGas)
      const params = [{
        from: address,
        to: contractAddress, // 池地址
        data: encodedABI, // Required
        gasPrice: web3.utils.toHex(gasPrice), // Optional
        gas: web3.utils.toHex(estimateGas), // Optional
        // gas: web3.utils.toHex(400000), // Optional
      }];
      web3.eth.sendTransaction(params[0])
        .on('transactionHash', function (hash) {
          console.log('hash', hash);
          if (hash) {
            hashInfo = hash
          }
        })
        .on('receipt', function (receipt) {
          // 交易成功
          __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:1 , hash:hashInfo})
          resolve(hashInfo)
        })
        .on('confirmation', function (confirmationNumber, receipt) {
        })
        .on('error', function (err) {
          let isUserDeny = err.code === 4001 
          __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:2 , isUserDeny, hash:hashInfo})
          console.log('err' , err)
          reject(err)
        })
    })
    .catch(err=>{
      console.log('receiveAirdrop_err',err)
      __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:2, hash:hashInfo})
      reject(err)
    })
  })
}

/**
 * 兑换操作 Guru or BNB
 * @param {*} input input 输入值
 * @param {*} output output 输入值 最小
 * @param {*} TK1_CONTRACT_ADDR tk0
 * @param {*} TK2_CONTRACT_ADDR tk1
 */
export const swapExactTokensForTokens = function (input, output, TK1_CONTRACT_ADDR, TK2_CONTRACT_ADDR, minimumReceived=0){
  const address = __ownInstance__.$store.state.base.address;
  // const contractAddress = publicAddress.CONTRACT_ADDRESS;
  const contractAddress = publicAddress.CONTRACT_ADDRESS_V2;
  // const contract = new web3.eth.Contract(swapABI, contractAddress);
  const contract = new web3.eth.Contract(swapRouterABI, contractAddress);
  const now =  Math.round(Date.now()/1000) + 1800;
  const amountIn = web3.utils.toWei(input, "ether");
  const amountOutMinNum = (output * (1 - publicAddress.SLIPOINT)).toFixed(9);
  // const amountOutMin = 0;
  const minimumReceivedValue = minimumReceived * (1 - publicAddress.SLIPOINT);
  const amountOutMin = web3.utils.toWei(minimumReceivedValue.toString(), "ether");
  const path = [TK1_CONTRACT_ADDR, TK2_CONTRACT_ADDR];
  // console.log(publicAddress);
  let encodedABI = contract.methods.swapExactTokensForTokens(amountIn, amountOutMin, path, address, now).encodeABI();
  // let encodedABI = contract.methods.swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn, amountOutMin, path, address, now).encodeABI();
  let timestamp = new Date().getTime().toString()
  __ownInstance__.$store.dispatch('createOrderForm' , {val:0 ,id:timestamp })
  return new Promise((resolve, reject) => {
    let hashInfo
    web3.eth.getTransactionCount(address).then(async transactionNonce => {
      let gasPrice = await web3.eth.getGasPrice();
      let estimateGas = await web3.eth.estimateGas({
        from: address,
        to: contractAddress, // 池地址
        data: encodedABI, // Required
      })
      console.log('estimateGas' ,estimateGas)
      const params = [{
        from: address,
        to: contractAddress, // 池地址
        data: encodedABI, // Required
        gasPrice: web3.utils.toHex(gasPrice), // Optional
        gas: web3.utils.toHex(estimateGas), // Optional
        // gas: web3.utils.toHex(400000), // Optional
      }];
      web3.eth.sendTransaction(params[0])
        .on('transactionHash', function (hash) {
          console.log('hash', hash);
          if (hash) {
            hashInfo = hash
          }
        })
        .on('receipt', function (receipt) {
          // 交易成功
          __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:1 , hash:hashInfo})
          resolve(hashInfo)
        })
        .on('confirmation', function (confirmationNumber, receipt) {
        })
        .on('error', function (err) {
          let isUserDeny = err.code === 4001 
          __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:2 , isUserDeny, hash:hashInfo})
          console.log('err' , err)
          reject(err)
        })
    })
    .catch(err=>{
      console.log('receiveAirdrop_err',err)
      __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:2, hash:hashInfo})
      reject(err)
    })
  })
}

/**
 * 兑换操作 BNB or Guru
 * @param {*} input input 输入值
 * @param {*} output output 输入值 最小
 * @param {*} TK1_CONTRACT_ADDR tk0
 * @param {*} TK2_CONTRACT_ADDR tk1
 */
export const swapExactETHForTokens = function (input, output, TK1_CONTRACT_ADDR, TK2_CONTRACT_ADDR, minimumReceived=0){
  const address = __ownInstance__.$store.state.base.address;
  const contractAddress = publicAddress.CONTRACT_ADDRESS;
  const contract = new web3.eth.Contract(swapABI, contractAddress);
  const now =  Math.round(Date.now()/1000) + 1800;
  const amountIn = web3.utils.toWei(input, "ether");
  const amountOutMinNum = (output * (1 - publicAddress.SLIPOINT)).toFixed(9);
  // const amountOutMin = 0;
  const minimumReceivedValue = minimumReceived * (1 - publicAddress.SLIPOINT);
  const amountOutMin = web3.utils.toWei(minimumReceivedValue.toString(), "ether");
  const path = [TK1_CONTRACT_ADDR, TK2_CONTRACT_ADDR];
  // console.log(publicAddress);
  let encodedABI = contract.methods.swapExactETHForTokens(amountOutMin, path, address, now).encodeABI();
  let timestamp = new Date().getTime().toString()
  __ownInstance__.$store.dispatch('createOrderForm' , {val:0 ,id:timestamp })
  return new Promise((resolve, reject) => {
    let hashInfo
    web3.eth.getTransactionCount(address).then(async transactionNonce => {
      let gasPrice = await web3.eth.getGasPrice();
      let estimateGas = await web3.eth.estimateGas({
        from: address,
        to: contractAddress, // 池地址
        data: encodedABI, // Required
        value: amountIn,
      })
      console.log('estimateGas' ,estimateGas)
      let params = [{
        from: address,
        to: contractAddress, // 池地址
        data: encodedABI, // Required
        gasPrice: web3.utils.toHex(gasPrice), // Optional
        gas: web3.utils.toHex(estimateGas), // Optional
        // gas: web3.utils.toHex(400000), // Optional
      }];
      params[0].value = amountIn;
      web3.eth.sendTransaction(params[0])
        .on('transactionHash', function (hash) {
          console.log('hash', hash);
          if (hash) {
            hashInfo = hash
          }
        })
        .on('receipt', function (receipt) {
          // 交易成功
          __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:1 , hash:hashInfo})
          resolve(hashInfo)
        })
        .on('confirmation', function (confirmationNumber, receipt) {
        })
        .on('error', function (err) {
          let isUserDeny = err.code === 4001 
          __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:2 , isUserDeny, hash:hashInfo})
          console.log('err' , err)
          reject(err)
        })
    })
    .catch(err=>{
      console.log('receiveAirdrop_err',err)
      __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:2, hash:hashInfo})
      reject(err)
    })
  })
}

/**
 * 添加流动性
 * @param {*} input input 输入值
 * @param {*} output output 输入值 最小
 * @param {*} TK1_CONTRACT_ADDR tk0
 * @param {*} TK2_CONTRACT_ADDR tk1
 */
 export const addLiquidity = function (input, output, TK1_CONTRACT_ADDR, TK2_CONTRACT_ADDR, start){
  //  console.log(TK1_CONTRACT_ADDR, TK2_CONTRACT_ADDR, publicAddress.BNB_ADDR);
  const address = __ownInstance__.$store.state.base.address;
  const contractAddress = publicAddress.CONTRACT_ADDRESS;
  const contract = new web3.eth.Contract(swapABI, contractAddress);
  let isContainETH = false; //是否包含ETH
  if(TK1_CONTRACT_ADDR.toUpperCase() === publicAddress.BNB_ADDR.toUpperCase() || TK2_CONTRACT_ADDR.toUpperCase() === publicAddress.BNB_ADDR.toUpperCase()) {
    isContainETH = true;
  }
  const now =  Math.round(Date.now()/1000) + 1800;
  const amountIn = web3.utils.toWei(input.toString(), "ether");
  const amountOut = web3.utils.toWei(output.toString(), "ether");
  // let amountInMin = keepDecimalNotRounding(input * (1 - publicAddress.SLIPOINT), 18);
  // let amountOutMin = keepDecimalNotRounding(output * (1 - publicAddress.SLIPOINT), 18);
  const amountTokenMin = 0;
  const amountETHMin = 0;
  let args = [];
  let value = '';
  // console.log(isContainETH);
  if(isContainETH) { //如果是ETH参与的话
    if(TK1_CONTRACT_ADDR == publicAddress.BNB_ADDR) {
      args = [
        TK2_CONTRACT_ADDR,
        amountOut,
        amountETHMin,
        amountTokenMin,
        address,
        now
      ];
      value = amountIn;
    } else {
      args = [
        TK1_CONTRACT_ADDR,
        amountIn,
        amountTokenMin,
        amountETHMin,
        address,
        now
      ];
      value = amountOut;
    }
  } else {
    args = [
      TK1_CONTRACT_ADDR,
      TK2_CONTRACT_ADDR,
      amountIn,
      amountOut,
      0,
      0,
      address,
      now
    ];
    value = '';
  }
  // console.log(publicAddress);
  let encodedABI;
  if(isContainETH) {
    encodedABI = contract.methods.addLiquidityETH(...args).encodeABI();
  } else {
    encodedABI = contract.methods.addLiquidity(...args).encodeABI();
  }
  let timestamp = new Date().getTime().toString()
  __ownInstance__.$store.dispatch('createOrderForm' , {val:0 ,id:timestamp })
  return new Promise((resolve, reject) => {
    let hashInfo
    web3.eth.getTransactionCount(address).then(async transactionNonce => {
      let gasPrice = await web3.eth.getGasPrice();
      let estimateGas = await web3.eth.estimateGas({
        from: address,
        to: contractAddress, // 池地址
        data: encodedABI, // Required
        value: value,
      })
      console.log('estimateGas' ,estimateGas)
      let params = [{
        from: address,
        to: contractAddress, // 池地址
        data: encodedABI, // Required
        gasPrice: web3.utils.toHex(gasPrice), // Optional
        gas: web3.utils.toHex(estimateGas), // Optional
        // gas: web3.utils.toHex(400000), // Optional
      }];
      params[0].value = value;
      web3.eth.sendTransaction(params[0])
        .on('transactionHash', function (hash) {
          console.log('hash', hash);
          if (hash) {
            hashInfo = hash
          }
        })
        .on('receipt', function (receipt) {
          // 交易成功
          __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:1 , hash:hashInfo})
          resolve(hashInfo)
        })
        .on('confirmation', function (confirmationNumber, receipt) {
        })
        .on('error', function (err) {
          let isUserDeny = err.code === 4001 
          __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:2 , isUserDeny, hash:hashInfo})
          console.log('err' , err)
          reject(err)
        })
    })
    .catch(err=>{
      console.log('addLiquidity_err',err)
      __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:2, hash:hashInfo})
      reject(err)
    })
  })
}

/**
 * 授权验证签名
 * @returns 
 */
 export const getEthSignTypedData = function(formTokenBlance, tokenAddress, nonce) {
  const address = __ownInstance__.$store.state.base.address;
  const EIP712Domain = [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'chainId', type: 'uint256' },
      { name: 'verifyingContract', type: 'address' },
  ];
  const domain = {
      name: 'Guru LPs', //很重要
      version: '1',
      chainId: 56,
      verifyingContract: tokenAddress,
  };
  // console.log(domain);
  const Permit = [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
  ];
  const liquidity = web3.utils.toWei(formTokenBlance, "ether");
  // console.log(formTokenBlance, Number(formTokenBlance).toFixed(13));
  const now = Math.round(Date.now() / 1000);
  const message = {
      owner: address,
      // spender: liquidityCoonfig.CONTRACT_ADDRESS,
      spender: publicAddress.CONTRACT_ADDRESS,
      value: liquidity,
      nonce: '0x0' + nonce,
      deadline: now + 1800,
  }
  const msgParams = JSON.stringify({
      types: {
          EIP712Domain,
          Permit,
      },
      domain,
      primaryType: 'Permit',
      message,
  });
  console.log(msgParams);
  const params = [address, msgParams];
  const method = 'eth_signTypedData_v4';
  // let encodedABI = contract.methods.addLiquidityETH(...args).encodeABI();
  let timestamp = new Date().getTime().toString()
  __ownInstance__.$store.dispatch('createOrderForm' , {val:0 ,id:timestamp })
  return new Promise((resolve, reject) => {
    let hashInfo = '';
    web3.currentProvider.sendAsync({ method, params, address }, (err, result) => {
        if (err) {
            let isUserDeny = err.code === 4001 
            __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:2 , isUserDeny, hash:hashInfo})
            console.log('err' , err)
            reject(err)
        }     
        if (result.error) {
          let isUserDeny = err.code === 4001 
            __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:2 , isUserDeny, hash:hashInfo})
            console.log('err' , result.error)
            reject(result.error)
        }
        const signHash = result.result;
        console.log(signHash);
        const signature = splitSignature(signHash); //获取 r s v 值
        // 交易成功
        __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:1 , hash:hashInfo})
        resolve(signature)
    });
  })
};

/**
 * 移除流动性 签名方式
 * 1、 Guru / BNB
 * 2、 BNB / Guru
 * @param {*} input input 输入值
 * @param {*} output output 输入值 最小
 * @param {*} TK1_CONTRACT_ADDR tk0 / tk1
 * @param {*} TK2_CONTRACT_ADDR tk1 / tk0
 */
//  export const removeLiquidityPermit = function (formTokenBlance, INPUT, OUTPUT, TK1_CONTRACT_ADDR, TK2_CONTRACT_ADDR, signatureData, start){
//   const address = __ownInstance__.$store.state.base.address;
//   const contractAddress = publicAddress.CONTRACT_ADDRESS;
//   const contract = new web3.eth.Contract(swapABI, contractAddress);
//   const now =  Math.round(Date.now()/1000) + 1800;
//   const liquidity = web3.utils.toWei(formTokenBlance, "ether");
//   const amountTokenMin = web3.utils.toWei((INPUT * (1 - publicAddress.SLIPOINT)).toFixed(9), "ether");
//   const amountETHMin = web3.utils.toWei((OUTPUT * (1 - publicAddress.SLIPOINT)).toFixed(9), "ether");
//   // const amountIn = web3.utils.toWei(exchangeMoney.INPUT, "ether");
//   // const amountOut = web3.utils.toWei(exchangeMoney.OUTPUT, "ether");
//   let args = [];
//   if(start == 1) {
//     args = [
//       TK1_CONTRACT_ADDR,
//       liquidity,
//       amountTokenMin,
//       amountETHMin,
//       address,
//       signatureData.deadline,
//       false,
//       signatureData.v,
//       signatureData.r,
//       signatureData.s
//     ];
//     // args = [
//     //     TK1_CONTRACT_ADDR, 
//     //     liquidity, 
//     //     amountTokenMin,
//     //     amountETHMin, 
//     //     address, 
//     //     1640593305,
//     //     false, 
//     //     28,
//     //     "0x4e73d2083bd700cf085cc0d6808f38b60798726ff0ea47389142ad8e13df36b5",
//     //     "0x5c0a70bd3c4259bbf65b1a7210c28961f64697c0b845f8e8b8d0f58679ddeabf",
//     // ];
//   } else {
//     args = [
//       TK2_CONTRACT_ADDR,
//       liquidity,
//       amountETHMin,
//       amountTokenMin,
//       address,
//       signatureData.deadline,
//       false,
//       signatureData.v,
//       signatureData.r,
//       signatureData.s,
//     ];
//   }
//   console.log(args);
//   let encodedABI = contract.methods.removeLiquidityETHWithPermit(...args).encodeABI();
//   let timestamp = new Date().getTime().toString()
//   __ownInstance__.$store.dispatch('createOrderForm' , {val:0 ,id:timestamp })
//   return new Promise((resolve, reject) => {
//     let hashInfo
//     web3.eth.getTransactionCount(address).then(async transactionNonce => {
//       let gasPrice = await web3.eth.getGasPrice();
//       // let estimateGas = await web3.eth.estimateGas({
//       //   from: address,
//       //   to: contractAddress, // 池地址
//       //   data: encodedABI, // Required
//       // })
//       let estimateGas = 130000;
//       // console.log('estimateGas' ,estimateGas)
//       let params = [{
//         from: address,
//         to: contractAddress, // 池地址
//         data: encodedABI, // Required
//         gasPrice: web3.utils.toHex(gasPrice), // Optional
//         gas: web3.utils.toHex(estimateGas), // Optional
//         // gas: web3.utils.toHex(400000), // Optional
//       }];
//       web3.eth.sendTransaction(params[0])
//         .on('transactionHash', function (hash) {
//           console.log('hash', hash);
//           if (hash) {
//             hashInfo = hash
//           }
//         })
//         .on('receipt', function (receipt) {
//           // 交易成功
//           __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:1 , hash:hashInfo})
//           resolve(hashInfo)
//         })
//         .on('confirmation', function (confirmationNumber, receipt) {
//         })
//         .on('error', function (err) {
//           let isUserDeny = err.code === 4001 
//           __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:2 , isUserDeny, hash:hashInfo})
//           console.log('err' , err)
//           reject(err)
//         })
//     })
//     .catch(err=>{
//       console.log('receiveAirdrop_err',err)
//       __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:2, hash:hashInfo})
//       reject(err)
//     })
//   })
// }

/**
 * 移除流动性
 * @param {*} input input 输入值
 * @param {*} output output 输入值 最小
 * @param {*} TK1_CONTRACT_ADDR tk0 / tk1
 * @param {*} TK2_CONTRACT_ADDR tk1 / tk0
 */
export const removeLiquidityPermit = function (formTokenBlance, INPUT, OUTPUT, TK1_CONTRACT_ADDR, TK2_CONTRACT_ADDR, signatureData, start){
  const address = __ownInstance__.$store.state.base.address;
  const contractAddress = publicAddress.CONTRACT_ADDRESS;
  const contract = new web3.eth.Contract(swapABI, contractAddress);
  let isContainETH = false; //是否包含ETH
  if(TK1_CONTRACT_ADDR.toUpperCase() === publicAddress.BNB_ADDR.toUpperCase() || TK2_CONTRACT_ADDR.toUpperCase() === publicAddress.BNB_ADDR.toUpperCase()) {
    isContainETH = true;
  }
  const now =  Math.round(Date.now()/1000) + 1800;
  const liquidity = web3.utils.toWei(formTokenBlance, "ether");
  console.log(formTokenBlance,liquidity);
  // const amountTokenMin = web3.utils.toWei((INPUT * (1 - publicAddress.SLIPOINT)).toFixed(9), "ether");
  // const amountETHMin = web3.utils.toWei((OUTPUT * (1 - publicAddress.SLIPOINT)).toFixed(9), "ether");
  const amountTokenMin = 0;
  const amountETHMin = 0;
  // const amountIn = web3.utils.toWei(exchangeMoney.INPUT, "ether");
  // const amountOut = web3.utils.toWei(exchangeMoney.OUTPUT, "ether");
  let args = [];
  if(isContainETH) { //如果是ETH参与的话
    if(TK1_CONTRACT_ADDR == publicAddress.BNB_ADDR) {
      args = [
        TK2_CONTRACT_ADDR,
        liquidity,
        amountETHMin,
        amountTokenMin,
        address,
        now
      ];
    } else {
      args = [
        TK1_CONTRACT_ADDR,
        liquidity,
        amountTokenMin,
        amountETHMin,
        address,
        now
      ];
    }
  } else {
    args = [
      TK1_CONTRACT_ADDR,
      TK2_CONTRACT_ADDR,
      liquidity,
      0,
      0,
      address,
      now
    ];
  }
  // console.log(args);
  let encodedABI;
  if(isContainETH) {
    encodedABI = contract.methods.removeLiquidityETH(...args).encodeABI();
  } else {
    encodedABI = contract.methods.removeLiquidity(...args).encodeABI();
  }
  let timestamp = new Date().getTime().toString()
  __ownInstance__.$store.dispatch('createOrderForm' , {val:0 ,id:timestamp })
  return new Promise((resolve, reject) => {
    let hashInfo
    web3.eth.getTransactionCount(address).then(async transactionNonce => {
      let gasPrice = await web3.eth.getGasPrice();
      let estimateGas = await web3.eth.estimateGas({
        from: address,
        to: contractAddress, // 池地址
        data: encodedABI, // Required
      })
      // let estimateGas = 100000;
      console.log('estimateGas' ,estimateGas)
      let params = [{
        from: address,
        to: contractAddress, // 池地址
        data: encodedABI, // Required
        gasPrice: web3.utils.toHex(gasPrice), // Optional
        gas: web3.utils.toHex(estimateGas), // Optional
        // gas: web3.utils.toHex(400000), // Optional
      }];
      web3.eth.sendTransaction(params[0])
        .on('transactionHash', function (hash) {
          console.log('hash', hash);
          if (hash) {
            hashInfo = hash
          }
        })
        .on('receipt', function (receipt) {
          // 交易成功
          __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:1 , hash:hashInfo})
          resolve(hashInfo)
        })
        .on('confirmation', function (confirmationNumber, receipt) {
        })
        .on('error', function (err) {
          let isUserDeny = err.code === 4001 
          __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:2 , isUserDeny, hash:hashInfo})
          console.log('err' , err)
          reject(err)
        })
    })
    .catch(err=>{
      console.log('removeLiquidity_err',err)
      __ownInstance__.$store.dispatch('changeTradeStatus' , {  id:timestamp , val:2, hash:hashInfo})
      reject(err)
    })
  })
}


