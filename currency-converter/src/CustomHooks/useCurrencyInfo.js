import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      // res[currency] is the currency data we want
      // e.g., res["usd"] for USD currency data
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  // Return the currency data
  // This will be an object with currency information
  return data;
}

export default useCurrencyInfo;
