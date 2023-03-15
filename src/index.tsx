import { Card, Page, Tabbar, TabbarLink } from "konsta/react"
import { IoWallet } from 'react-icons/io5'
import { FaCog } from 'react-icons/fa'
import { useState } from "react"
import { Networks, WalletBuy, WalletReceive, WalletSend, WalletTokens } from "./components"
import { useWallet, useNetwork } from './lib'
export default function Home() {
    const [tab, setTab] = useState<Tab>('wallet')
    const onChangeTab = (value: Tab) => setTab(value)
    const { wallet } = useWallet()
    const { network } = useNetwork()
    return (
        <Page className="overflow-auto w-full h-full">
            <title>Home</title>
            <main className="flex p-2 h-full w-full">
                {/* wallet */}
                <div className={`${tab === 'wallet' ? 'animate__fadeInLeft flex' : 'hidden'} animate__animated ms-300 w-full flex-col gap-2`}>
                    <Card
                        margin="m-0">
                        <div className="flex flex-col gap-8">
                            {/* Networks */}
                            <Networks />
                            <div className="flex flex-col">
                                <div className="text-3xl text-center">$1000.00</div>
                            </div>
                            <div className="flex justify-center w-full gap-5">
                                <WalletSend />
                                <WalletReceive />
                                <WalletBuy />
                            </div>
                        </div>
                    </Card>
                    <WalletTokens wallet={wallet} network={network} />
                </div>
                {/* settings */}
                <div className={`${tab === 'settings' ? 'animate__fadeInRight flex' : 'animate__fadeOutRight hidden'} animate__animated ms-300 w-full flex-col`}>

                </div>
            </main>
            <Tabbar
                icons
                className="fixed bottom-0">
                <TabbarLink
                    onClick={() => onChangeTab('wallet')}
                    active={tab === 'wallet'}
                    label={"Wallet"}
                    icon={<IoWallet className="w-6 h-6" />} />
                <TabbarLink
                    onClick={() => onChangeTab('settings')}
                    active={tab === 'settings'}
                    label={"Settings"}
                    icon={<FaCog className="w-6 h-6" />} />
            </Tabbar>
        </Page>
    )
}