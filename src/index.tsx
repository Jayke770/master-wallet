import { Button, Card, Icon, List, ListItem, Page, Tabbar, TabbarLink } from "konsta/react"
import { IoWallet } from 'react-icons/io5'
import { FaCog } from 'react-icons/fa'
import { AiOutlineArrowDown, AiOutlineArrowUp, AiFillCreditCard } from 'react-icons/ai'
import { useState } from "react"
import { BsCoin, BsChevronDown } from 'react-icons/bs'
import { Networks } from "./components"
import { useWallet } from './lib'
import { AiFillPlusCircle } from 'react-icons/ai'
export default function Home() {
    const [tab, setTab] = useState<Tab>('wallet')
    const onChangeTab = (value: Tab) => setTab(value)
    const { wallet } = useWallet()
    console.log('fassfa', wallet)
    return (
        <Page className="overflow-auto w-full h-full">
            <title>Home</title>
            <main className="flex p-2 h-full w-full">
                {/* wallet */}
                <div className={`${tab === 'wallet' ? 'animate__fadeInLeft flex' : 'hidden'} animate__animated ms-300 w-full flex-col gap-2`}>
                    <Card
                        margin="m-0">
                        <div className="flex flex-col gap-8">
                            <Networks />
                            <div className="text-3xl text-center">$1000.00</div>
                            <div className="flex justify-center w-full gap-5">
                                <div className="flex flex-col gap-3 items-center">
                                    <Button
                                        rounded
                                        className="!w-auto">
                                        <AiOutlineArrowUp className="text-xl font-black" />
                                    </Button>
                                    <span className="font-thin text-xs dark:text-md-dark-primary">Send</span>
                                </div>
                                <div className="flex flex-col gap-3 items-center">
                                    <Button
                                        rounded
                                        className="!w-auto">
                                        <AiOutlineArrowDown className="text-xl font-black" />
                                    </Button>
                                    <span className="font-thin text-xs dark:text-md-dark-primary ">Receive</span>
                                </div>
                                <div className="flex flex-col gap-3 items-center">
                                    <Button
                                        rounded
                                        className="!w-auto">
                                        <AiFillCreditCard className="text-xl font-black" />
                                    </Button>
                                    <span className="font-thin text-xs dark:text-md-dark-primary">Buy</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card
                        margin="m-0"
                        contentWrapPadding="p-2">
                        <List
                            margin="m-0">
                            <ListItem
                                media={<BsCoin className="w-6 h-6" />}
                                title="ETH"
                                subtitle="$9000"
                                after="0"
                                chevron={false}
                                link />
                        </List>
                        <div className="flex justify-start px-4 mt-4 py-2">
                            <Button
                                outline
                                rounded
                                small
                                className="!w-auto flex gap-2">
                                <AiFillPlusCircle className="w-4 h-4" />
                                Add Token
                            </Button>
                        </div>
                        <div className="w-full break-words">
                            {JSON.stringify(wallet)}
                        </div>
                    </Card>
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