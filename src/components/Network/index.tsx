import { Button, List, ListItem, Popover } from "konsta/react"
import { useState, useEffect } from "react"
import { BsChevronDown, BsCoin } from "react-icons/bs"
import { useNetwork, Config } from '../../lib'
export default function Networks() {
    const [networkOptions, setNetworkOptions] = useState<NetWorkOptions>()
    const onToggleActions = () => setNetworkOptions({ ...networkOptions, openActions: !networkOptions?.openActions })
    const { currentnetwork } = useNetwork()
    useEffect(() => {
        if (currentnetwork) {
            const networkData = currentnetwork === 'default' ? Config.networks[0] : Config.networks.find(x => x.id === currentnetwork)
            setNetworkOptions({ ...networkOptions, network: networkData?.name, networkId: networkData?.id })
        }
    }, [currentnetwork])
    return (
        <>
            <div className="flex justify-end">
                <Button
                    id="popover"
                    onClick={onToggleActions}
                    className="!w-auto flex justify-center gap-2"
                    rounded
                    outline>
                    {networkOptions?.network || "..."}
                    <BsChevronDown />
                </Button>
            </div>
            <Popover
                target={"#popover"}
                opened={networkOptions?.openActions}
                onBackdropClick={onToggleActions}>
                <List
                    nested>
                    <ListItem
                        link
                        chevron={false}
                        media={<BsCoin className="w-6 h-6" />}
                        title="Binance Smart Chain" />
                </List>
            </Popover>
        </>
    )
}