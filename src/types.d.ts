type Tab = 'wallet' | 'settings' | 'wallet-connect'
type Web3NetWorks = 'ethereum' | 'binancecoin' | 'klay-token' | 'matic-network'
interface NetWorkOptions {
    openActions?: boolean,
    network?: string,
    networkId?: string
}
interface SelectedNetwork {
    openActions?: boolean,
    network?: string,
    networkId?: string
}
interface WalletToken {
    coinid: string,
    contractAddress?: string,
    symbol: string,
    decimal: number
}
interface WalletNetwork {
    id: Web3NetWorks,
    name: string,
    symbol: string,
    tokens: WalletToken[]
}
interface Wallet {
    privateKey: string,
    address: string,
    mnemonic?: string,
    created: number,
    networks: WalletNetwork[]
}