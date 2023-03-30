import { Button, Card, List, ListInput, Page } from "konsta/react"
import { Helmet } from "react-helmet"
import { BsShieldFillCheck } from "react-icons/bs"
export default function CreateWallet() {
    const onCreate = () => {

    }
    return (
        <Page className="flex justify-center items-center">
            <Helmet>
                <title>Master Wallet | Create Wallet</title>
            </Helmet>
            <Card
                className="w-full md:w-[400px]">
                <div className="flex flex-col justify-center items-center gap-3 mt-3">
                    <BsShieldFillCheck className="text-8xl text-primary" />
                    <div className="text-2xl px-3.5">Create new wallet</div>
                </div>
                <List
                    className="mt-3"
                    margin="m-0">
                    <ListInput
                        floatingLabel
                        outline
                        label="Password"
                        type="password" />
                    <ListInput
                        outline
                        floatingLabel
                        label="Confirm Password"
                        type="password" />
                    <div className="px-3.5 mt-2">
                        <Button
                            onClick={onCreate}>
                            Create Wallet
                        </Button>
                    </div>
                </List>
            </Card>
        </Page>
    )
}