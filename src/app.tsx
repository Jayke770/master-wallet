import { Page, Tabbar, TabbarLink } from "konsta/react"
import { IoWallet } from 'react-icons/io5'
import { FaCog } from 'react-icons/fa'
import { useState } from "react"
import {
    Settings,
    Wallet,
    WalletConnect
} from "./components"
import WalletConnectLogo from './assets/images/logos/walletconnect.png'
import Helmet from 'react-helmet'
export default function Home() {
    const [tab, setTab] = useState<Tab>('wallet')
    const onChangeTab = (value: Tab) => setTab(value)
    return (
        <Page className="overflow-auto w-full h-full">
            <Helmet>
                <title>Master Wallet | Home</title>
            </Helmet>
            <main className="flex h-full w-full">
                {/* wallet */}
                <Wallet show={tab === 'wallet'} />
                {/* settings */}
                <Settings show={tab === 'settings'} />
                {/* Wallet Connect */}
                <WalletConnect show={tab === 'wallet-connect'} />
            </main>
            <Tabbar
                icons
                className="fixed bottom-0 z-0">
                <TabbarLink
                    onClick={() => onChangeTab('wallet')}
                    active={tab === 'wallet'}
                    label={"Wallet"}
                    icon={<IoWallet className="w-6 h-6" />} />
                <TabbarLink
                    onClick={() => onChangeTab('wallet-connect')}
                    active={tab === 'wallet-connect'}
                    label={"Wallet Connect"}
                    icon={<img alt="wallet-connect" src={WalletConnectLogo} className="w-8 h-8 object-contain" />} />
                <TabbarLink
                    onClick={() => onChangeTab('settings')}
                    active={tab === 'settings'}
                    label={"Settings"}
                    icon={<FaCog className="w-6 h-6" />} />
            </Tabbar>
        </Page>
    )
}