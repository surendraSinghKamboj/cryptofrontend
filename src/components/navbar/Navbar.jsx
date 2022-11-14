import React from "react";
import Navlist from "./NavList";

export default function Navbar() {
  let listItems = Navlist.map((element) => {
    return <li>{element.name}</li>;
  });

  return (
    <>
      <h1>Crypto Dashboard</h1>
      <ul>{listItems}</ul>
    </>
  );
}
