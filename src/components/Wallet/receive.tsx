import { Button } from "konsta/react"
import { AiOutlineArrowDown } from "react-icons/ai"
export default function Receive() {
    return (
        <div className="flex flex-col gap-3 items-center">
            <Button
                rounded
                className="!w-auto">
                <AiOutlineArrowDown className="text-xl font-black" />
            </Button>
            <span className="font-thin text-xs dark:text-md-dark-primary ">Receive</span>
        </div>
    )
}