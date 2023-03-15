const config = {
    defaultWallet: 'ethereum',
    //first index will be the default network
    //for coin id please refer to coingecko coin list "https://api.coingecko.com/api/v3/coins/list"
    networks: [
        {
            id: 'ethereum',
            name: 'Ethereum',
            symbol: 'ETH',
            rpc: 'https://eth.llamarpc.com'
        },
        {
            id: 'binancecoin',
            name: 'Binance Smart Chain',
            symbol: 'BNB',
            rpc: 'https://bsc-dataseed.binance.org'
        },
        {
            id: 'klay-token',
            name: 'Klaytn',
            symbol: 'KLAY',
            rpc: 'https://public-node-api.klaytnapi.com/v1/cypress'
        },
        {
            id: 'matic-network',
            name: 'Polygon',
            symbol: 'MATIC',
            rpc: 'https://rpc-mainnet.maticvigil.com'
        }
    ],
    checkCoinInteval: 10000,
    disableSend: true
}
export default config