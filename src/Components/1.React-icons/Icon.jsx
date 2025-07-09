import React from "react";

export default function Icon({ icon }) {
  return (
    <li>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>{icon}</span>
      </a>
    </li>
  );
}
