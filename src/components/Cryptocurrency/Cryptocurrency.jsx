import React, { useEffect } from "react";
import axios from "axios";
import CryptoStyle from "./CryptoStyle";

const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history",
  params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
  headers: {
    "X-RapidAPI-Key": "38ae4a066dmsh3cb1c14ed33d50bp1db328jsn5927802ec888",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

const Cryptocurrency = () => {
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        const rate = response.data.data.history.map((item) => {
          return +item.price;
        });
        console.log(rate);
        const timeStamp = response.data.data.history.map((item) => {
          return item.timestamp;
        });
        console.log(timeStamp);
        // here
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div style={CryptoStyle.mainBox}>
      <h1>Cryptocurrency</h1>
    </div>
  );
};

export default Cryptocurrency;
