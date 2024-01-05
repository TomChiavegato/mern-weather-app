import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul className="nav_links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/map">Map</a>
        </li>
        <li>
          <a href="/">Locations</a>
        </li>
      </ul>
    </nav>
  );
}
