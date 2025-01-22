"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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

export default function Converter() {
  const [values, setValues] = useState({ satoshi: "", bitcoin: "", currencyValue: "" });
  const [exchangeRate, setExchangeRate] = useState(0);
  const [currency, setCurrency] = useState(SUPPORTED_CURRENCIES[0]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const fetchExchangeRate = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.code}`
      );
      if (response.ok) {
        const data = await response.json();
        setExchangeRate(data.bitcoin[currency.code]);
        setLastUpdated(new Date().toLocaleString());
      }
    } catch (error) {
      console.error("Failed to fetch exchange rate:", error);
    }
  }, [currency]);

  useEffect(() => {
    fetchExchangeRate();
    const interval = setInterval(fetchExchangeRate, 60000);
    return () => clearInterval(interval);
  }, [fetchExchangeRate]);

  useEffect(() => {
    if (values.satoshi) {
      const btc = parseFloat(values.satoshi) / SATOSHI_PER_BTC;
      setValues((prev) => ({
        ...prev,
        bitcoin: btc.toFixed(8),
        currencyValue: (btc * exchangeRate).toFixed(2),
      }));
    } else if (values.bitcoin) {
      setValues((prev) => ({
        ...prev,
        satoshi: Math.floor(parseFloat(values.bitcoin) * SATOSHI_PER_BTC).toString(),
        currencyValue: (parseFloat(values.bitcoin) * exchangeRate).toFixed(2),
      }));
    }
  }, [exchangeRate]);

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
      <div className="w-full max-w-md backdrop-blur-lg bg-[#AB9FF1] bg-opacity-70 rounded-3xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-[#3C315B] mb-2">Satoshi Converter</h1>
          <p className="text-opacity-80 font-medium mb-6">Convert between Satoshi, Bitcoin, and currencies</p>

          {["satoshi", "bitcoin", "currencyValue"].map((field) => (
            <div key={field} className="mb-6 relative">
              <label htmlFor={field} className="block text-sm font-bold mb-2 text-opacity-50">
                {field === "currencyValue" ? currency.code.toUpperCase() : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                id={field}
                type="number"
                value={values[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                placeholder={`Enter ${field}`}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-200"
              />
              <div className="absolute right-3 top-10 text-white text-opacity-50">
                {field === "currencyValue" ? currency.code.toUpperCase() : field.toUpperCase()}
              </div>
            </div>
          ))}

          <div className="mb-6 relative">
            <button
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-200"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              {currency.code.toUpperCase()} | {currency.name}
              {isDropdownOpen ? <ChevronUp className="ml-2 text-white" /> : <ChevronDown className="ml-2 text-white" />}
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-full bg-[#AB9FF1] bg-opacity-50 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {SUPPORTED_CURRENCIES.map((curr) => (
                  <div
                    key={curr.code}
                    className="px-4 py-2 hover:bg-white hover:bg-opacity-20 cursor-pointer text-white"
                    onClick={() => {
                      setCurrency(curr);
                      setDropdownOpen(false);
                    }}
                  >
                    {curr.code.toUpperCase()} | {curr.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg text-white">
            <p className="text-sm">
              Exchange Rate: 1 BTC = {exchangeRate.toLocaleString()} {currency.code.toUpperCase()}
            </p>
            <p className="text-opacity-70 text-xs mt-1">Last updated: {lastUpdated}</p>
          </div>

          <button
            onClick={fetchExchangeRate}
            className="mt-6 w-full bg-white text-white bg-opacity-20 hover:bg-opacity-30 font-bold py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            Refresh Rate
          </button>
        </div>
      </div>
  );
}