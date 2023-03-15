import { Card } from "konsta/react"
import { WalletSend, WalletReceive, WalletBuy, Networks, WalletTokens } from ".."
export default function Wallet({ show, wallet, network }: { show?: boolean, wallet?: Wallet, network: Web3NetWorks }) {
    return (
        <div className={`${show ? 'animate__fadeInLeft flex' : 'hidden'} animate__animated ms-300 w-full flex-col gap-2 p-2`}>
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
    )
}