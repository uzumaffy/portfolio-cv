import React from "react";

export default function HomeCardSectionProgresscircular({
  titlecardsectionprogress,
  pourcentagecard,
}) {
  return (
    <div className ="pr-9">
      <div class="circle-wrap">
        <div class="inside-circle ">
          {pourcentagecard}
          <h3 className="uppercase text-sm py-8">{titlecardsectionprogress}</h3>{" "}
        </div>
      </div>
    </div>
  );
}
