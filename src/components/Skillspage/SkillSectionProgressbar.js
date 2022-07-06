import React from 'react';

export default function SkillSectionProgressbar() {
  const itemsprogress = [
    {
      key:1,
      name:"HTML5",
      pourcentage:"70%",
      id:1,
    },

    { key:2, name:"CSS", pourcentage:"60%", id: 2 },
    { key:3, name:"JavasCript", pourcentage:"75%", id: 3 },
    {
      key:4,
      name:"React",
      pourcentage:"100%",
      id:4,
    },
    {
      key:5,
      name:"Wordpress",
      pourcentage:"90%",
      id: 5,
    },
    {
      key: 6,
      name: "PHP/Laravel",
      pourcentage:"100%",
      id: 6,
    },
  ];

  return (
    <div className="pt-8 ">
      {itemsprogress.map((itemsprogress) => (
        <div className="py-2">
          <div className="flex justify-between">
            <h4 className="font-semibold">{itemsprogress.name}</h4>
            <div>
              <p>{itemsprogress.pourcentage}</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-gradient-to-r from-[#007bff] via-[hsl(200,76%,54%)] to-[purple] 0 h-2.5 rounded-full w-[70%]"
              style={{ width: itemsprogress.pourcentage }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
