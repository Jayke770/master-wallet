import { Card, Button, Actions, List, ListItem, Checkbox } from "konsta/react"
import { WalletSend, WalletReceive, WalletBuy, WalletTokens } from ".."
import { BsChevronDown } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { Config, useNetwork, Wallet, useWallet } from '../../lib'
export default function WalletInfo({ show }: { show?: boolean, wallet?: Wallet }) {
    const { wallet } = useWallet()
    const { currentnetwork, setNetwork } = useNetwork()
    const [selectedNetwork, setSelectedNetwork] = useState<SelectedNetwork>()
    const onToggleNetworkActions = () => setSelectedNetwork({ ...selectedNetwork, openActions: !selectedNetwork?.openActions })
    const onChangeNetwork = async (value: string) => {
        if (selectedNetwork?.networkId !== value) {
            const networkData = Config.networks?.find(x => x.id === value)
            if (networkData) {
                const isNetworkAdded = await Wallet.isNetworkAdded(networkData?.id as any)
                if (!isNetworkAdded?.status) {
                    await Wallet.addNetworkToWallet({
                        id: networkData?.id as any,
                        name: networkData?.name,
                        symbol: networkData?.symbol,
                        tokens: [
                            {
                                coinid: networkData?.id,
                                decimal: 18,
                                symbol: networkData?.symbol,
                                contractAddress: ''
                            }
                        ]
                    })
                }
                setNetwork(networkData?.id as any)
                setSelectedNetwork({ ...selectedNetwork, openActions: false })
            }
        }
    }
    useEffect(() => {
        const networkData = Config.networks.find(x => x.id === currentnetwork)
        setSelectedNetwork({ ...selectedNetwork, network: networkData?.name, networkId: networkData?.id })
    }, [currentnetwork])
    return (
        <>
            <div className={`${show ? 'animate__fadeInLeft flex' : 'hidden'} animate__animated ms-300 w-full flex-col gap-2 p-2`}>
                <Card
                    margin="m-0">
                    <div className="flex flex-col gap-8">
                        {/* Networks */}
                        <div className="flex justify-end">
                            <Button
                                onClick={onToggleNetworkActions}
                                className="!w-auto flex justify-center gap-2"
                                rounded
                                outline>
                                {selectedNetwork?.network}
                                <BsChevronDown />
                            </Button>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-3xl text-center">$999999999</div>
                        </div>
                        <div className="flex justify-center w-full gap-5">
                            <WalletSend />
                            <WalletReceive />
                            <WalletBuy />
                        </div>
                    </div>
                </Card>
                <WalletTokens wallet={wallet} network={currentnetwork} />
            </div>
            <Actions
                opened={selectedNetwork?.openActions}
                onBackdropClick={onToggleNetworkActions}>
                <Card>
                    <div className="text-2xl px-3.5 py-3">Networks</div>
                    <List margin="m-0">
                        {Config?.networks?.map(x => (
                            <ListItem
                                key={x?.id}
                                title={x?.name}
                                link
                                chevron={false}
                                onClick={() => onChangeNetwork(x?.id)}
                                after={
                                    <Checkbox
                                        onChange={() => onChangeNetwork(x?.id)}
                                        checked={x?.id === selectedNetwork?.networkId} />
                                } />
                        ))}
                        <div className="px-4 mt-3">
                            <Button
                                disabled>Add Network</Button>
                        </div>
                    </List>
                </Card>
            </Actions>
        </>
    )
}