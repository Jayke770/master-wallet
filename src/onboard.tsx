import { Button, Card, Page } from "konsta/react"
import Helmet from 'react-helmet'
import { IoWallet } from 'react-icons/io5'
export default function Onboard() {
    return (
        <Page className="flex justify-center items-center">
            <Helmet>
                <title>Master Wallet | Onboarding</title>
            </Helmet>
            <Card className="w-full md:w-[400px]">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="py-3">
                        <IoWallet className="text-8xl" />
                    </div>
                    <div className="text-lg font-semibold">Welcome to Master Wallet</div>
                </div>
                <div className="flex flex-col gap-3 px-5 mt-5">
                    <Button>Create Wallet</Button>
                    <Button
                        clear
                        outline>Import Wallet</Button>
                </div>
            </Card>
        </Page>
    )
}