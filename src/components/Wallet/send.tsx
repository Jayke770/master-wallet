import { Button } from "konsta/react"
import { AiOutlineArrowUp } from "react-icons/ai"
export default function Send() {
    return (
        <div className="flex flex-col gap-3 items-center">
            <Button
                rounded
                className="!w-auto">
                <AiOutlineArrowUp className="text-xl font-black" />
            </Button>
            <span className="font-thin text-xs dark:text-md-dark-primary">Send</span>
        </div>
    )
}