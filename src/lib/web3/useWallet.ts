import { useEffect, useState } from "react"
import { fs, path } from '@tauri-apps/api'
import { Wallet, Config } from '../'
export default function useWallet() {
    const [walletData, setWalletData] = useState<Wallet | undefined>()
    const onCheckWallet = async () => {
        try {
            const walletDir = await path.join("data", "wallet.json")
            const isWalletExist = await fs.exists(walletDir, { dir: fs.BaseDirectory.AppConfig })
            if (!isWalletExist) {
                //create new wallet.json 
                const WalletData = await Wallet.create({ network: Config.defaultWallet as any })
                setWalletData(WalletData)
            } else {
                const walletData = await Wallet.get()
                setWalletData(walletData)
            }
        } catch (e) {
            setWalletData(undefined)
        }
    }
    useEffect(() => {
        onCheckWallet()
    }, [])
    return { wallet: walletData }
}