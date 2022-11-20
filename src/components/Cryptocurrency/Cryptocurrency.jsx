import React from "react";
import CryptoStyle from "./CryptoStyle";
import ChartComponent from "../Chart/ChartComponent";

const Cryptocurrency = () => {

  return (
    <div style={CryptoStyle.mainBox}>
      <div>
        <ChartComponent />
      </div>
    </div>
  );
};

export default Cryptocurrency;
