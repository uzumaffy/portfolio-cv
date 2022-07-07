import React from "react";
export default function CardPortfolio() {
  const itemsporfolio = [
    {
      name: "appel",
      id: 1,
    },
    {
      name: "react",
     
    id: 2,
    },

    {
      name: "amn",
      id: 3,
      
    },
 
  ]
  return (
    <>
      <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium">
        {itemsporfolio.map((itemsporfolio) => (
          <div
            key={itemsporfolio.id}
            className="pl-2 text-center rounded md:bg-transparent md:p-0"
          >
            <li className="border-l-2 leading-10 text-center px-3 bg-[#100f3a] text-[#fff]">
              {itemsporfolio.name}
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}
