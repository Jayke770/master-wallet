import { ListItem } from "konsta/react"
import { useEffect, useState } from 'react'
import { Coin, Config } from '../../../lib'
import type { CoinFullInfo } from "coingecko-api-v3"
export default function Token({ token }: { token: WalletToken }) {
    const [data, setData] = useState<CoinFullInfo>()
    const onGetCoinData = () => Coin.get(token.coinid).then(x => setData(x))
    useEffect(() => {
        onGetCoinData()
        const checkCoinDataInterval = setInterval(() => onGetCoinData(), Config.checkCoinInteval)
        return () => clearInterval(checkCoinDataInterval)
    }, [])
    return (
        <ListItem
            media={
                <img
                    alt={data?.id}
                    src={data?.image?.large}
                    className="h-7 w-7 object-contain" />
            }
            title={data?.name || 'Loading...'}
            subtitle={
                <div className="flex gap-2 items-baseline">
                    {/* @ts-ignore */}
                    <span>{`$${data?.market_data.current_price['usd'].toLocaleString()}`}</span>
                    {/* @ts-ignore */}
                    {data?.market_data?.price_change_percentage_24h > 0 ? <span className="text-teal-400 text-xs">+{data?.market_data?.price_change_percentage_24h?.toFixed(2)}</span> : <span className="text-red-400 text-xs">{data?.market_data?.price_change_percentage_24h?.toFixed(2)}</span>}
                </div>
            }
            after="0"
            chevron={false}
            link />
    )
}