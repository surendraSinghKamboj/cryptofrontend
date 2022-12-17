import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Chart } from "react-google-charts";
import axios from "axios";

const ChartComponent = () => {
  const { uuid } = useParams();

  const [url, setUrl] = useState("Qwsogvtv82FCd");
  if (uuid !== url) {
    setUrl(uuid);
  }

  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history",
    params: { referenceCurrencyUuid: url, timePeriod: "3h" },
    headers: {
      "X-RapidAPI-Key": "38ae4a066dmsh3cb1c14ed33d50bp1db328jsn5927802ec888",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const [history, setHistory] = useState();

  const label = ["TimeStamp", "Price"];
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        const process = response.data.data.history.map((i) => {
          return [new Date(i.timestamp), +i.price];
        });
        process.unshift(label);
        setHistory(process);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  const chartOptions = {
    title: "Area Chart",
    curveType: "function",
    legend: { position: "right" },
    series: {
      color: "#e2431e",
    },
    backgroundColor: "white",
    animation: {
      duration: 1000,
      easing: "in",
    },
    crosshair: { orientation: "both", color: "green" },
  };

  return (
    <div style={{ margin: "auto" }}>
      <Chart
        chartType="AreaChart"
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
