import { useEffect, useState } from "react"
export default function useNetwork() {
    const [currentNetwork, setCurrentNetwork] = useState<Web3NetWorks | null>(null)
    const onGetNetwork = () => {
        const savedNetwork = localStorage.getItem("network")
        setCurrentNetwork(savedNetwork as any || 'default')
    }
    const onSetNetwork = (network: Web3NetWorks) => setCurrentNetwork(network)
    useEffect(() => {
        onGetNetwork()
    }, [])
    return {
        currentnetwork: currentNetwork,
        setNetwork: onSetNetwork
    }
}