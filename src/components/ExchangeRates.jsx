import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function ExchangeRates() {
   const [ExchangeData, setExchangeData] = useState({});
   const FetchAPI = async () => {
      const API =
         "https://v6.exchangerate-api.com/v6/" + import.meta.env.VITE_API_KEY + "/latest/USD";
      try {
         const response = await axios.get(API);
         setExchangeData(response?.data?.conversion_rates);
         console.log(response);
      } catch (error) {
         alert("Something went wrong");
         console.log(error);
      }
   };

   useEffect(() => {
      FetchAPI();
   }, []);

   const pageNumber = useRef(1);
   return (
      <div className=" max-w-[78rem] mx-auto py-[2rem]  ">
         <div className=" text-[1.8rem] text-gray-800 ">Live Exchange Rates</div>
         <div className=" mt-[1rem] font-medium text-gray-600 text-[1.3rem]">
            Base Currency: USD
         </div>
         <div className=" flex flex-col">
            {Object.keys(ExchangeData)
               .slice((pageNumber.current - 1) * 10, pageNumber.current * 10)
               .map((currency) => (
                  <EachRow key={currency} currency={currency} value={ExchangeData[currency]} />
               ))}
         </div>
         <div className=" w-full flex justify-end items-center">
            <div className=" flex gap-4 ">
               <div className=" w-[30px] h-[30px] rounded-[10px] bg-gray-100 text-gray-800">
                  <FaAngleLeft size={25} />
               </div>
               <div className="">{pageNumber.current}</div>
               <div className=" w-[30px] h-[30px] rounded-[10px] bg-gray-100 text-gray-800">
                  <FaAngleRight size={25} />
               </div>
            </div>
         </div>
      </div>
   );
}

const EachRow = ({ currency, value }) => {
   return (
      <div className=" px-[10px] w-full h-[4rem] flex justify-between items-center text-[1.1rem] text-gray-800 font-medium border-b-[1px] border-gray-400 ">
         <div>{currency}</div>
         <div>{value}</div>
      </div>
   );
};
