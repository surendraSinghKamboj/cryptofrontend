import axios from "axios";
import React, { useState, useEffect } from "react";

function Searchbar() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const [searchResult, setSearchResult] = useState();

  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/search-suggestions",
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", query: search },
    headers: {
      "X-RapidAPI-Key": "38ae4a066dmsh3cb1c14ed33d50bp1db328jsn5927802ec888",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  // axios
  //   .request(options)
  //   .then(function (response) {
  //     setSearchResult(response.data.data.coins);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  console.log(searchResult);

  return (
    <div className="inputBox">
      <div className="inputFeild">
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          placeholder="Search Crypto"
          onChange={handleChange}
        />
      </div>
      <div className="searchResult"></div>
    </div>
  );
}

export default Searchbar;
