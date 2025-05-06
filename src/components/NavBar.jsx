import React from "react";
import { NavLink } from "react-router-dom";
import { ConfigProvider, Switch } from "antd";
import { Outlet } from "react-router";
import useGeneralContext from "../hooks/useGeneralContext";

export default function NavBar() {
   const { toggleDarkMode } = useGeneralContext();
   const onChange = (checked) => {
      console.log(`switch to ${checked}`);
      toggleDarkMode();
   };

   return (
      <div>
         <div className=" h-[4rem] px-[3rem] bg-gradient-to-r from-blue-500  to-blue-600 flex justify-between items-center shadow-xl dark:text-red-900">
            {/* Titlle  */}
            <div className=" text-white text-[1.2rem] border- z-[100] font-medium">
               Loan Calculator
            </div>
            <div className=" flex gap-[1.5rem] text-white border- text-[0.9rem] font-medium justify-center items-center">
               <NavLink
                  className={({ isActive }) =>
                     (isActive ? " bg-blue-500 " : "") +
                     " px-[1.3rem] py-[4px] flex justify-center items-center rounded-[6px] hover:bg-[#434b5b39]"
                  }
                  to={"/"}
               >
                  HOME
               </NavLink>
               <NavLink
                  className={({ isActive }) =>
                     (isActive ? " bg-blue-500 " : "") +
                     " px-[1.3rem] py-[4px]  flex justify-center items-center rounded-[6px] hover:bg-[#434b5b39]  flex-shrink-0"
                  }
                  to={"/exchange_rates_live"}
               >
                  EXCHANGE RATES (LIVE)
               </NavLink>{" "}
               <NavLink
                  className={({ isActive }) =>
                     (isActive ? " bg-blue-500 " : "") +
                     " px-[1.3rem] py-[4px] flex justify-center items-center rounded-[6px] hover:bg-[#434b5b39]"
                  }
                  to={"/about"}
               >
                  ABOUT
               </NavLink>{" "}
               <NavLink
                  className={({ isActive }) =>
                     (isActive ? " bg-blue-500 " : "") +
                     " px-[1.3rem] py-[4px] flex justify-center items-center rounded-[6px] hover:bg-[#434b5b39]"
                  }
                  to={"/error_page"}
               >
                  ERROR PAGE
               </NavLink>
               {/* Toggle Switch  */}
               <ConfigProvider
                  theme={{
                     components: {
                        Switch: {
                           handleSize: 20,
                           trackHeight: 25,
                        },
                     },
                  }}
               >
                  <Switch onChange={onChange} />
               </ConfigProvider>
            </div>
         </div>
         <Outlet />
      </div>
   );
}
