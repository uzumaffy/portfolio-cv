import React from "react";
import { Link } from "react-router-dom";

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
    }
  ];
  return (
    <>
      {items.map((items) => (
        <Link
          to={items.slug}
          key={items.id}
          className="block  py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 "
        >
          <li className="px-3 leading-10 text-[#fff]">{items.name}</li>
        </Link>
      ))}
    </>
  );
}
