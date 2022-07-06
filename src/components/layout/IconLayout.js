import React from "react";
import { GrGooglePlus } from "@react-icons/all-files/gr/GrGooglePlus";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { RiTwitterFill } from "@react-icons/all-files/ri/RiTwitterFill";
import { IoLogoPinterest } from "@react-icons/all-files/io/IoLogoPinterest";

export default function IconLayout() {
  return (
    <div className=" flex text-[#a5a55a5a]  justify-evenly  py-10">
      <GrGooglePlus />
      <IoLogoPinterest />
      <FaFacebookF />
      <RiTwitterFill />
    </div>
  );
}
