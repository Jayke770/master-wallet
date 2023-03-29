import { Button, Card, Page } from "konsta/react"
import Helmet from 'react-helmet'
import { BsShieldFillCheck } from 'react-icons/bs'
import { Constants } from '../lib'
import { Link } from 'react-router-dom'
export default function Onboard() {
    return (
        <Page className="flex justify-center items-center">
            <Helmet>
                <title>Master Wallet | Onboarding</title>
            </Helmet>
            <div className="flex flex-col mt-10">
                <div className="flex justify-center">
                    <BsShieldFillCheck className="text-9xl text-primary" />
                </div>
                <div className="flex flex-col justify-center gap-1 items-center mt-5">
                    <div className="text-3xl font-bold">{Constants.ONBOARD.WELCOME_MESSAGE}</div>
                    <div className="text-base font-light dark:text-zinc-300">{Constants.ONBOARD.WELCOME_MESSAGE_SUBTITLE}</div>
                </div>
                <div className="flex flex-col gap-2 mt-10">
                    <Link to={"/wallet/create"}>
                        <Button
                            rounded>Create new wallet</Button>
                    </Link>
                    <Button
                        outline
                        disabled
                        rounded>Import wallet</Button>
                </div>
            </div>
        </Page>
    )
}