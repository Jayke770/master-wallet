import { Card } from "konsta/react"
export default function Settings({ show }: { show?: boolean }) {
    return (
        <div className={`${show ? 'animate__fadeInRight flex' : 'hidden'} animate__animated ms-300 w-full flex-col p-2`}>
            <Card margin="m-0">
                Not Yet Available!
            </Card>
        </div>
    )
}