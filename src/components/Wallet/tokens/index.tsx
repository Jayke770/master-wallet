import { Card, List, Button } from "konsta/react"
import { AiFillPlusCircle } from "react-icons/ai"
import { Token } from '../../'
export default function WalletTokens({ wallet, network }: { wallet?: Wallet, network: Web3NetWorks | null }) {
    const networkData = wallet?.networks.find(x => x.id === network)
    return (
        <Card
            margin="m-0"
            contentWrapPadding="p-2">
            <List margin="m-0">
                {networkData?.tokens.map(token => <Token key={token.coinid} token={token} />)}
            </List>
            <div className="flex justify-start px-4 mt-4 py-2">
                <Button
                    disabled
                    outline
                    rounded
                    small
                    className="!w-auto flex gap-2">
                    <AiFillPlusCircle className="w-4 h-4" />
                    Add Token
                </Button>
            </div>
        </Card>
    )
}