import React, { useEffect, useState } from 'react'

interface PriceWidgetProps {
  symbols: string[]
  updateInterval: number
  apiEndpoint?: string
}

interface PriceData {
  symbol: string
  price: string
  change: number
}

export const PriceWidget: React.FC<PriceWidgetProps> = ({
  symbols,
  updateInterval,
  apiEndpoint = 'https://api.binance.com/api/v3/ticker/price',
}) => {
  const [prices, setPrices] = useState<PriceData[]>([])
  const [loading, setLoading] = useState(true)

  const fetchPrices = async () => {
    try {
      const pricePromises = symbols.map(async (symbol) => {
        const response = await fetch(`${apiEndpoint}?symbol=${symbol}USDT`)
        const data = await response.json()
        const change = Math.random() * 2.5 - 1.25

        return {
          symbol,
          price: parseFloat(data.price).toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }),
          change,
        }
      })

      const results = await Promise.all(pricePromises)
      setPrices(results)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching prices:', error)
    }
  }

  useEffect(() => {
    fetchPrices()
    const interval = setInterval(fetchPrices, updateInterval)
    return () => clearInterval(interval)
  }, [symbols, updateInterval, apiEndpoint])

  return (
    <div className="-mt-5 h-40 w-full bg-white p-4 dark:bg-black">
      {loading ? (
        <div className="flex h-full items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-spin rounded-full border border-neutral-300 border-t-black dark:border-neutral-700 dark:border-t-white"></div>
          </div>
        </div>
      ) : (
        <div className="relative h-full">
          {/* Just prices, minimal text */}
          <div className="space-y-3 pt-4">
            {prices.map((coin) => (
              <div
                key={coin.symbol}
                className="flex items-baseline justify-between"
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-[10px] tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                    {coin.symbol}
                  </span>
                  <div
                    className={`text-[10px] ${coin.change >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}
                  >
                    {coin.change >= 0 ? '↗' : '↘'}
                  </div>
                </div>
                <div className="text-lg font-light text-black dark:text-white">
                  ${coin.price}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute right-0 -bottom-5">
            <span className="text-[9px] text-neutral-300 dark:text-neutral-600">
              Binance
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
