import React from "react";
import FooterStyle from "./FooterStyle";

function Footer() {
  return (
    <div style={FooterStyle.box}>
      <h3>Resources Used :</h3>
      <ul>
        <li>
          <strong>Data</strong>:
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.coinranking1.p.rapidapi.com"
          >
            rapidapi
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
