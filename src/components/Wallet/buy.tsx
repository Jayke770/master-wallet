import { Button } from "konsta/react"
import { AiFillCreditCard } from "react-icons/ai"
export default function Receive() {
    return (
        <div className="flex flex-col gap-3 items-center">
            <Button
                disabled
                rounded
                className="!w-auto">
                <AiFillCreditCard className="text-xl font-black" />
            </Button>
            <span className="font-thin text-xs dark:text-md-dark-primary">Buy</span>
        </div>
    )
}