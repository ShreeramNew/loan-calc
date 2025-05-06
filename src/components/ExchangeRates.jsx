import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Loading from "react-loading";
import { ClipLoader } from "react-spinners";
import useExchangeRate from "../hooks/useExchangeRate";
import useGeneralContext from "../hooks/useGeneralContext";

export default function ExchangeRates() {
   const [pageNumber, setPageNumber] = useState(1);
   const ExchangeData = useExchangeRate();

   const { dataLoading } = useGeneralContext();

   //-------------------Handle Click on Left-------------------------
   const handleLeft = () => {
      if (pageNumber > 1) {
         setPageNumber((prev) => prev - 1);
      }
   };

   //-------------------Handle Click on right-------------------------
   const handleRight = () => {
      if (pageNumber < Object.keys(ExchangeData).length / 10) {
         setPageNumber((prev) => prev + 1);
      }
   };

   return (
      <div className=" w-full min-h-[50vh] flex justify-center items-center">
         {dataLoading ? (
            <ClipLoader size={50} color="gray" />
         ) : (
            <div className=" w-full max-w-[78rem] mx-auto py-[2rem]  ">
               <div className=" text-[1.8rem] text-gray-800 ">Live Exchange Rates</div>
               <div className=" mt-[1rem] font-medium text-gray-600 text-[1.3rem]">
                  Base Currency: USD
               </div>
               <div className=" flex flex-col max-h-[80vh] mt-[1rem]">
                  {Object.keys(ExchangeData)
                     .slice((pageNumber - 1) * 10, pageNumber * 10)
                     .map((currency) => (
                        <EachRow
                           key={currency}
                           currency={currency}
                           value={ExchangeData[currency]}
                        />
                     ))}
               </div>
               <div className=" w-full flex justify-end items-center  mt-[1rem] gap-[1rem]">
                  <div className=" flex gap-4 justify-center items-center ">
                     <div
                        onClick={handleLeft}
                        className=" w-[40px] h-[40px] flex justify-center items-center rounded-[10px] bg-gray-200 text-gray-600 cursor-pointer"
                     >
                        <FaAngleLeft size={25} />
                     </div>
                     <div className="">{pageNumber}</div>
                     <div
                        onClick={handleRight}
                        className=" w-[40px] h-[40px] flex justify-center items-center rounded-[10px] bg-gray-200 text-gray-600 cursor-pointer"
                     >
                        <FaAngleRight size={25} />
                     </div>
                  </div>
                  <div>
                     {(pageNumber - 1) * 10} to {pageNumber * 10}/{" "}
                     <span className=" font-medium">{Object.keys(ExchangeData).length}</span>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

const EachRow = ({ currency, value }) => {
   return (
      <div className=" px-[10px] w-full h-[4rem] flex justify-between items-center text-[1.1rem] text-gray-800 font-medium border-b-[1px] border-gray-400 ">
         <div>{currency}</div>
         <div className=" w-[5rem]">{value}</div>
      </div>
   );
};
