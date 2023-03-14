type Tab = 'wallet' | 'settings'
type Web3NetWorks = 'default' | 'ethereum' | 'bsc'
interface NetWorkOptions {
    openPopOver?: boolean
}
interface WalletToken {
    contractAddress: string,
    symbol: string,
    decimal: number
}
interface WalletNetwork {
    name: string,
    symbol: string,
    tokens: WalletToken[]
}
interface Wallet {
    privateKey: string,
    address: string,
    created: number,
    networks: WalletNetwork[]
}