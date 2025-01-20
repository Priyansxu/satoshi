"use client"

import React, { useState, useEffect, useCallback } from "react"

const SATOSHI_PER_BTC = 100000000
export default function AdvancedCryptoConverter() {
  const [values, setValues] = useState({ satoshi: "", bitcoin: "", usd: "" })
  const [exchangeRate, setExchangeRate] = useState(0)
  const [lastUpdated, setLastUpdated] = useState(null)

  const fetchExchangeRate = useCallback(async () => {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
      if (response.ok) {
        const data = await response.json()
        setExchangeRate(data.bitcoin.usd)
        setLastUpdated(new Date().toLocaleString())
      }
    } catch (error) {
      console.error("Failed to fetch exchange rate:", error)
    }
  }, [])

  useEffect(() => {
    fetchExchangeRate()
    const interval = setInterval(fetchExchangeRate, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [fetchExchangeRate])

  const handleChange = (currency, value) => {
    const numValue = Number.parseFloat(value)
    const newValues = { ...values, [currency]: value }

    if (!isNaN(numValue)) {
      switch (currency) {
        case "satoshi":
          newValues.bitcoin = (numValue / SATOSHI_PER_BTC).toFixed(8)
          newValues.usd = ((numValue / SATOSHI_PER_BTC) * exchangeRate).toFixed(2)
          break
        case "bitcoin":
          newValues.satoshi = Math.floor(numValue * SATOSHI_PER_BTC).toString()
          newValues.usd = (numValue * exchangeRate).toFixed(2)
          break
        case "usd":
          const btc = numValue / exchangeRate
          newValues.bitcoin = btc.toFixed(8)
          newValues.satoshi = Math.floor(btc * SATOSHI_PER_BTC).toString()
          break
      }
    }

    setValues(newValues)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-md backdrop-blur-lg bg-white bg-opacity-20 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-white mb-2">Crypto Converter</h1>
          <p className="text-white text-opacity-80 mb-6">Convert between Satoshi, Bitcoin, and USD</p>

          {["satoshi", "bitcoin", "usd"].map((currency) => (
            <div key={currency} className="mb-6 relative">
              <label htmlFor={currency} className="block text-sm font-medium text-white mb-2 capitalize">
                {currency}
              </label>
              <input
                id={currency}
                type="number"
                value={values[currency]}
                onChange={(e) => handleChange(currency, e.target.value)}
                placeholder={`Enter ${currency} amount`}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-200"
              />
              <div className="absolute right-3 top-10 text-white text-opacity-50">{currency.toUpperCase()}</div>
            </div>
          ))}

          <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg">
            <p className="text-white text-sm">Exchange Rate: 1 BTC = ${exchangeRate.toLocaleString()} USD</p>
            <p className="text-white text-opacity-70 text-xs mt-1">Last updated: {lastUpdated}</p>
          </div>

          <button
            onClick={fetchExchangeRate}
            className="mt-6 w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            Refresh Rate
          </button>
        </div>
      </div>
    </div>
  )
}