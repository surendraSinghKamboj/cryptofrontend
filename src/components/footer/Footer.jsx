import React from "react";
import { SocialIcon } from "react-social-icons";
import FooterStyle from "./FooterStyle";

function Footer() {
  return (
    <div style={FooterStyle.box}>
      <div>
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
      <div>
        <p>
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
        </p>
      </div>
    </div>
  );
}

export default Footer;
