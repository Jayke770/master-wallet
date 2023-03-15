import { fs, path } from '@tauri-apps/api'
import moment from 'moment'
import { ethers } from 'ethers'
import { Config } from '../'
const wallet = {
    create: (options: { network?: Web3NetWorks }) => {
        return new Promise<Wallet>(async (resolve, reject) => {
            try {
                //if default the fist index of web3networks will be selected
                const network = Config.networks[0]
                const account = ethers.Wallet.createRandom()
                const wallet: Wallet = {
                    address: account?.address,
                    privateKey: account?.privateKey,
                    mnemonic: account?.mnemonic?.phrase,
                    created: parseInt(moment().format('x')),
                    networks: [
                        {
                            id: options?.network as any,
                            name: network?.name,
                            symbol: network?.symbol,
                            tokens: [
                                {
                                    coinid: 'ethereum',
                                    symbol: 'eth',
                                    decimal: 18
                                }
                            ]
                        }
                    ]
                }
                const walletDir = await path.join("data", "wallet.json")
                await fs.createDir("data", { dir: fs.BaseDirectory.AppConfig, recursive: true })
                await fs.writeFile(walletDir, JSON.stringify(wallet), { dir: fs.BaseDirectory.AppConfig })
                resolve(wallet)
            } catch (e) {
                console.log('create', e)
                reject(e)
            }
        })
    },
    get: () => {
        return new Promise<Wallet>(async (resolve, reject) => {
            try {
                const walletDir = await path.join("data", "wallet.json")
                const walletData = await fs.readTextFile(walletDir, { dir: fs.BaseDirectory.AppConfig })
                walletData ? resolve(JSON.parse(walletData)) : reject("Invalid Wallet")
            } catch (e) {
                reject(e)
            }
        })
    },
    addNetworkToWallet: (data: WalletNetwork) => {
        return new Promise<{ status: boolean }>(async (resolve, reject) => {
            try {
                const walletDir = await path.join("data", "wallet.json")
                let walletData: Wallet = JSON.parse(await fs.readTextFile(walletDir, { dir: fs.BaseDirectory.AppConfig }))
                walletData.networks.push(data)
                await fs.writeFile(walletDir, JSON.stringify(walletData), { dir: fs.BaseDirectory.AppConfig })
                resolve({ status: true })
            } catch (e) {
                reject(e)
            }
        })
    },
    isNetworkAdded: (id: Web3NetWorks) => {
        return new Promise<{ status: boolean }>(async (resolve, reject) => {
            try {
                const walletDir = await path.join("data", "wallet.json")
                const walletData: Wallet = JSON.parse(await fs.readTextFile(walletDir, { dir: fs.BaseDirectory.AppConfig }))
                resolve({ status: !!walletData?.networks?.find(x => x.id === id) })
            } catch (e) {
                reject(e)
            }
        })
    }
}
export default wallet