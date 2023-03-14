import { web3networks } from '../'
import { fs, path } from '@tauri-apps/api'
import moment from 'moment'
import Web3js from 'web3'
const wallet = {
    create: (options: { network?: Web3NetWorks }) => {
        return new Promise<Wallet>(async (resolve, reject) => {
            try {
                //if default the fist index of web3networks will be selected
                if (options?.network === 'default') {
                    const network = web3networks[0]
                    const web3 = new Web3js(network?.rpc)
                    const account = web3.eth.accounts.create()
                    const wallet: Wallet = {
                        address: account?.address,
                        privateKey: account?.privateKey,
                        created: parseInt(moment().format('x')),
                        networks: [
                            {
                                name: network?.name,
                                symbol: network?.symbol,
                                tokens: []
                            }
                        ]
                    }
                    const walletDir = await path.join("data", "wallet.json")
                    await fs.createDir("data", { dir: fs.BaseDirectory.AppConfig, recursive: true })
                    await fs.writeFile(walletDir, JSON.stringify(wallet), { dir: fs.BaseDirectory.AppConfig })
                    resolve(wallet)
                }
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
    }
}
export default wallet