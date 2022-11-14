import React from "react";
import Navlist from "./NavList";
import NavbarStyle from "./NavbarStyle";

export default function Navbar() {
  let listItems = Navlist.map((element) => {
    return <li style={NavbarStyle.li}>{element.name}</li>;
  });

  return (
    <>
      <h1>Crypto Dashboard</h1>
      <ul style={NavbarStyle.ul}>{listItems}</ul>
    </>
  );
}
