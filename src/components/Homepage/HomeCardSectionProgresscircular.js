import React from "react";

export default function HomeCardSectionProgresscircular({
  titlecardsectionprogress,
  pourcentagecard,
}) {
  return (
    <div>
      <div class="circle-wrap">
        <div class="inside-circle">{pourcentagecard} </div>
      </div>
      <div>
        <h3 className="te">{titlecardsectionprogress}</h3>
      </div>
    </div>
  );
}
