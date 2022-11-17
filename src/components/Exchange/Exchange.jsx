import React from "react";

function Exchange() {
  const style = {
    mainDiv: {
      minHeight: "90vh",
      textAlign: "center",
      paddingTop: "20px",
      transition:"all .2s"
    },
  };
  return (
    <div style={style.mainDiv} className="glass">
      <h1>Exchange</h1>
    </div>
  );
}

export default Exchange;
