import React, { useEffect, useState } from "react";
import axios from "axios";
import HomepageStyle from "./HomepageStyle";


const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "25",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "38ae4a066dmsh3cb1c14ed33d50bp1db328jsn5927802ec888",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

export default function Homepage() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.data.coins);
      })
      .catch(function (error) {
        setData(error);
      });
  }, []);

  return (
    <div style={HomepageStyle.mainDiv}>
      <h2>Welcome to Crypto Dashboard</h2>
      <hr />
      {/* <ChartComponent style={HomepageStyle.chart} /> */}
      <div style={HomepageStyle.table}>
        <table border={0} width="800">
          <thead>
            <tr className="glass">
              <th>Logo</th>
              <th>Symbol</th>
              <th>Name</th>
              <th>Price</th>
              <th>24H change</th>
              <th>MarketCap</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => {
                return (
                  <>
                    <tr className="glass">
                      <td>
                        <img src={item.iconUrl} alt="logo" width={24} />
                      </td>
                      <td>{item.symbol}</td>
                      <td style={{textAlign:"left"}}>{item.name}</td>
                      <td>{`$ ${parseFloat(item.price).toFixed(2)}`}</td>
                      <td>{`${item.change}%`}</td>
                      <td>{item.marketCap}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
