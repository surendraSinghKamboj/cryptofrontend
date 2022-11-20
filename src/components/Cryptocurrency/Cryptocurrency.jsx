import React, { useState } from "react";
import axios from "axios";
import CryptoStyle from "./CryptoStyle";

const Cryptocurrency = () => {
  const [search, setSearch] = useState();
  const [coins, setCoins] = useState();
  function handleChange(event) {
    setSearch(event.target.value);
  }

  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/search-suggestions",
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", query: search },
    headers: {
      "X-RapidAPI-Key": "38ae4a066dmsh3cb1c14ed33d50bp1db328jsn5927802ec888",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setCoins(response.data.data.coins);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div style={CryptoStyle.mainBox}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search Here......"
        onChange={handleChange}
      />
      <div className="searchData">
        <ul>
          {coins &&
            coins.map((item) => {
              return <li>{item.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default Cryptocurrency;
