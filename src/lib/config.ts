const config = {
    //first index will be the default network
    networks: [
        {
            id: 'ethereum',
            name: 'Ethereum Mainnet',
            symbol: 'ETH',
            rpc: 'https://eth.llamarpc.com'
        }
    ],
    checkCoinInteval: 10000,
    disableSend: true
}
export default config