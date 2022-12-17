import React from "react";
import { NavLink } from "react-router-dom";
import Navlist from "./NavList";
import NavbarStyle from "./NavbarStyle";

export default function Navbar() {
  let listItems = Navlist.map((element, key) => {
    return (
      <NavLink to={element.url} key={key}>
        <li style={NavbarStyle.li}>{element.name}</li>
      </NavLink>
    );
  });

  return (
    <>
      <div style={NavbarStyle.divbox}>
        <NavLink to="/">
          <h1 style={NavbarStyle.h1}>Crypto Dashboard</h1>
        </NavLink>
        <ul style={NavbarStyle.ul}>{listItems}</ul>
      </div>
    </>
  );
}
