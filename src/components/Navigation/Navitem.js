import React from "react";
import { Link } from "react-router-dom";

export default function Navitem({ titleItem, linkItem }) {
  return (
    <li className="bg-[#100f3a] text-[#fff]">
      <Link
        to={linkItem}
        className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 "
      >
        {titleItem}
      </Link>
    </li>
  );
}
