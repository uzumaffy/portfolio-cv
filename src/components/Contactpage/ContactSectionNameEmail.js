import React from "react";
import CardFormulaireText from "../Card/CardFormulaireText";

export default function ContactSectionNameEmail() {
  return (
    <div className="flex">
      <div className="pr-5">
        <CardFormulaireText text="name" />
      </div>
      <div>
        <CardFormulaireText text="E mail" />
      </div>
    </div>
  );
}
