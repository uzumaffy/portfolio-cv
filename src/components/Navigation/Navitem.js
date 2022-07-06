import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navitem() {
  const items = [
    {
      key: 1,
      name: "About",
      slug: "/",
      id: 1,
    },

    { key: 2, name: "Skills", slug: "/Skills", id: 2 },
    { key: 3, name: "Services", slug: "/Services", id: 3 },
    {
      key: 4,
      name: "Portfolio",
      slug: "/Portfolio",
      id: 4,
    },
    {
      key: 5,
      name: "Testimonials",
      slug: "/Testimony",
      id: 5,
    },
    {
      key: 6,
      name: "Contact",
      slug: "/Contact",
      id: 6,
    },
  ];
//   let currentPage = useLocation();
//   let bgColor="";
//  if (currentPage.pathname === "/Services") {
//    bgColor = "#100f3a";

//  } else {
//   bgColor = "#100f3a";
  
//  }

  return (
    <>
      <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium">
        {items.map((items) => (
          <Link
            to={items.slug}
            key={items.id}
            className="pl-2 text-center rounded md:bg-transparent md:p-0"
          >
            <li
              // style={{ backgroundColor: bgColor }}
              className="border-l-2 leading-10 text-center px-3 bg-[#100f3a] text-[#fff]"
            >
              {items.name}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
