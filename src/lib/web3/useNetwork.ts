import { useEffect, useState } from "react"
import { Config } from '../'
export default function useNetwork() {
    const [currentNetwork, setCurrentNetwork] = useState<Web3NetWorks | null>(null)
    const onGetNetwork = () => {
        const savedNetwork = localStorage.getItem("network")
        setCurrentNetwork(savedNetwork as any || Config.defaultWallet)
    }
    const onSetNetwork = (network: Web3NetWorks) => {
        setCurrentNetwork(network)
        localStorage.setItem("network", network)
    }
    useEffect(() => {
        onGetNetwork()
    }, [])
    return {
        currentnetwork: currentNetwork,
        setNetwork: onSetNetwork,
        networks: Config.networks
    }
}