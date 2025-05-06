import React from "react";
import { NavLink } from "react-router";

export default function ErrorHandler() {
   return (
      <div className=" h-[90vh] w-full flex flex-col justify-center items-center text-gray-900 ">
         <div className=" text-[2rem] ">Something went wrong in the application.</div>
         <NavLink
            to="/"
            className={
               " px-[1rem] py-[10px] border-[1px] border-blue-500 rounded-[6px] cursor-pointer text-blue-400 mt-[1rem]"
            }
         >
            Go Home
         </NavLink>
      </div>
   );
}
