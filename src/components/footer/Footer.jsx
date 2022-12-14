import React from "react";
import { SocialIcon } from "react-social-icons";
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
      <span>
        <strong> Connect @ </strong>
        <i>
          <SocialIcon
            style={FooterStyle.social}
            url="https://www.facebook.com"
          />
        </i>
        <i>
          <SocialIcon
            style={FooterStyle.social}
            url="https://www.instagram.com"
          />
        </i>
        <i>
          <SocialIcon
            style={FooterStyle.social}
            url="https://www.twitter.com"
          />
        </i>
      </span>
    </div>
  );
}

export default Footer;
