import { Button, List, ListItem, Popover } from "konsta/react"
import { useState } from "react"
import { BsChevronDown, BsCoin } from "react-icons/bs"
export default function Networks() {
    const [networkOptions, setNetworkOptions] = useState<NetWorkOptions>()
    const onTogglePopover = () => setNetworkOptions({ ...networkOptions, openPopOver: !networkOptions?.openPopOver })
    return (
        <>
            <div className="flex justify-end">
                <Button
                    id="popover"
                    onClick={onTogglePopover}
                    className="!w-auto flex justify-center gap-2"
                    rounded
                    outline>
                    Ethereum Mainnet
                    <BsChevronDown />
                </Button>
            </div>
            <Popover
                target={"#popover"}
                opened={networkOptions?.openPopOver}
                onBackdropClick={onTogglePopover}>
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