"use client";

import React, { useState, useEffect, useCallback } from "react";

const SATOSHI_PER_BTC = 100000000;
const SUPPORTED_CURRENCIES = [
  { code: "usd", name: "US Dollar" },
  { code: "eur", name: "Euro" },
  { code: "gbp", name: "British Pound" },
  { code: "inr", name: "Indian Rupee" },
  { code: "jpy", name: "Japanese Yen" },
  { code: "cad", name: "Canadian Dollar" },
  { code: "aud", name: "Australian Dollar" },
  { code: "chf", name: "Swiss Franc" },
  { code: "cny", name: "Chinese Yuan" },
  { code: "sgd", name: "Singapore Dollar" },
  { code: "hkd", name: "Hong Kong Dollar" },
  { code: "krw", name: "South Korean Won" },
];

export default function AdvancedCryptoConverter() {
  const [values, setValues] = useState({ satoshi: "", bitcoin: "", currencyValue: "" });
  const [exchangeRate, setExchangeRate] = useState(0);
  const [currency, setCurrency] = useState("usd");
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchExchangeRate = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
      );
      if (response.ok) {
        const data = await response.json();
        setExchangeRate(data.bitcoin[currency]);
        setLastUpdated(new Date().toLocaleString());
      }
    } catch (error) {
      console.error("Failed to fetch exchange rate:", error);
    }
  }, [currency]);

  useEffect(() => {
    fetchExchangeRate();
    const interval = setInterval(fetchExchangeRate, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [fetchExchangeRate]);

  const handleChange = (field, value) => {
    const numValue = parseFloat(value) || 0;
    const updatedValues = { ...values, [field]: value };

    if (field === "satoshi") {
      updatedValues.bitcoin = (numValue / SATOSHI_PER_BTC).toFixed(8);
      updatedValues.currencyValue = ((numValue / SATOSHI_PER_BTC) * exchangeRate).toFixed(2);
    } else if (field === "bitcoin") {
      updatedValues.satoshi = Math.floor(numValue * SATOSHI_PER_BTC).toString();
      updatedValues.currencyValue = (numValue * exchangeRate).toFixed(2);
    } else if (field === "currencyValue") {
      const btc = numValue / exchangeRate;
      updatedValues.bitcoin = btc.toFixed(8);
      updatedValues.satoshi = Math.floor(btc * SATOSHI_PER_BTC).toString();
    }

    setValues(updatedValues);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-md backdrop-blur-lg bg-white bg-opacity-20 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-white mb-2">Crypto Converter</h1>
          <p className="text-white text-opacity-80 mb-6">Convert between Satoshi, Bitcoin, and currencies</p>

          {["satoshi", "bitcoin", "currencyValue"].map((field, index) => (
            <div key={field} className="mb-6 relative">
              <label htmlFor={field} className="block text-sm font-medium text-white mb-2">
                {field === "currencyValue" ? currency.toUpperCase() : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                id={field}
                type="number"
                value={values[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                placeholder={`Enter ${field}`}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-200"
              />
              <div className="absolute right-3 top-10 text-white text-opacity-50">
                {field === "currencyValue" ? currency.toUpperCase() : field.toUpperCase()}
              </div>
            </div>
          ))}

          <div className="mb-4">
            <label htmlFor="currency" className="block text-sm font-medium text-white mb-2">
              Select Currency
            </label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-200"
            >
              {SUPPORTED_CURRENCIES.map(({ code, name }) => (
                <option key={code} value={code}>
                  {code.toUpperCase()} | {name}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg">
            <p className="text-white text-sm">
              Exchange Rate: 1 BTC = {exchangeRate.toLocaleString()} {currency.toUpperCase()}
            </p>
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
  );
}