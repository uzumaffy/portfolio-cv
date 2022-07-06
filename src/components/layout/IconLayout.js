import React from 'react';
import {FaGooglePlusG} from "@react-icons/all-files/fa/FaGooglePlusG";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { RiTwitterFill } from "@react-icons/all-files/ri/RiTwitterFill";
import { ImPinterest2 } from "@react-icons/all-files/im/ImPinterest2";

export default function IconLayout() {
  return (
    <div className='flex w-[100%]  text-[red] justify-around  align-center py-8'>
        <FaGooglePlusG/>
        <ImPinterest2/>
        <FaFacebookF/>
        <RiTwitterFill/>
        
    </div>
  )
}
