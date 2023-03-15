type Tab = 'wallet' | 'settings'
type Web3NetWorks = 'default' | 'ethereum' | 'bsc'
interface NetWorkOptions {
    openPopOver?: boolean
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