import type { CoinFullInfo } from 'coingecko-api-v3'
const coin = {
    get: (id?: string) => {
        return new Promise<CoinFullInfo>(async (resolve, reject) => {
            try {
                const req = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
                if (req?.ok) {
                    const coinData: CoinFullInfo = await req.json()
                    coinData ? resolve(coinData) : reject("Error")
                } else {
                    reject(`${req.status} ${req.statusText}`)
                }
            } catch (e) {
                reject(e)
            }
        })
    }
}
export default coin