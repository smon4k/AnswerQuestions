// Token List
export default {
    tokenList: [
        {
            id: 'SCT',
            poolId: 0,
            logo: 'sct.png',
            name: 'SCT',
            tokenDecimals: 18,
            tokenAddress: '0xb3E1c2780B010b9188183Add05f5b81aB6ee9f0C',
            tk0Address: '0x55d398326f99059fF775485246999027B3197955', // USDT
            tk1Address: '0xb3E1c2780B010b9188183Add05f5b81aB6ee9f0C', // SCT
        },
        // {
        //     id: 'SST',
        //     poolId: 1,
        //     logo: 'sst.png',
        //     name: 'SST',
        //     tokenDecimals: 18,
        //     tokenAddress: '0xC446c2B48328e5D2178092707F8287289ED7e8D6',
        //     tk0Address: '0xC446c2B48328e5D2178092707F8287289ED7e8D6', // H2O
        //     tk1Address: '0x55d398326f99059fF775485246999027B3197955', // USDT
        // },
        {
            id: 'USDT',
            poolId: 1,
            logo: 'usdt.png',
            name: 'USDT',
            tokenDecimals: 18,
            tokenAddress: '0x55d398326f99059fF775485246999027B3197955',
            tk0Address: '0x55d398326f99059fF775485246999027B3197955', // USDT
            tk1Address: '0xb3E1c2780B010b9188183Add05f5b81aB6ee9f0C', // H2O
        }
    ],
    publicAddress: { //公共配置
        routerDeployedAddress: '0x8744F9835e85A95f303Ba0184196aCB8d24ef532', //Router deployed
        // CONTRACT_ADDRESS_V2: '0x8744F9835e85A95f303Ba0184196aCB8d24ef532',
        H2O_ADDRESS: '0xC446c2B48328e5D2178092707F8287289ED7e8D6',
        BNB_ADDR:'0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        SLIPOINT: 0.03,
        DEFANT_CURRENCY: 'SCT',
        // routerContractAddress: '0x96948447D1521260c24fCdE281d09364BdC5A2d0',
        oracleContractAddress: '0x3656f93AD50bF953CCf8768ab7Fb089E6e824C1E',
    }
}