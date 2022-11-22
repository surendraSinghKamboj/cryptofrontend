import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HomepageStyle from "./HomepageStyle";
import ChartComponent from "../Chart/ChartComponent";

const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
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
      <ChartComponent />
      <div style={HomepageStyle.table}>
        <table border={0} width="800">
          <thead>
            <tr style={HomepageStyle.tableHead}>
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
                      <td>{item.symbol}</td>
                      <td style={{ textAlign: "left" }}>
                        <Link to={`/cryptocurrency/${item.uuid}`}>
                          {item.name}
                        </Link>
                      </td>
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
