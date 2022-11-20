import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

const ChartComponent = () => {
  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history",
    params: { referenceCurrencyUuid: "razxDUgYGNAdQ", timePeriod: "3h" },
    headers: {
      "X-RapidAPI-Key": "38ae4a066dmsh3cb1c14ed33d50bp1db328jsn5927802ec888",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const [history, setHistory] = useState();

  const label = ["TimeStamp","Price"];
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        const process = response.data.data.history.map((i) => {
          return [new Date(i.timestamp),+i.price];
        });
        process.unshift(label)
        setHistory(process);
      })
      .catch(function (error) {
        console.error(error);
      });


  });

  const chartOptions = {
    title: "Etherium",
    curveType: "function",
    legend: { position: "right" },
    backgroundColor:"white",
  };

  return (
    <div style={{margin:"auto"}}>
    <Chart
      chartType="LineChart"
      data={history}
      width="100%"
      height="500px"
      options={chartOptions}
      legendToggle
    />
    </div>
  );
};

export default ChartComponent;
