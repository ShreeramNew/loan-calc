import axios from "axios";
import React, { useEffect, useState } from "react";
import useGeneralContext from "./useGeneralContext";

export default function useExchangeRate() {
   const [ExchangeData, setExchangeData] = useState({});
   const { setDataLoading } = useGeneralContext();
   const FetchAPI = async () => {
      const API =
         "https://v6.exchangerate-api.com/v6/" + import.meta.env.VITE_API_KEY + "/latest/USD";
      try {
         setDataLoading(true);
         const response = await axios.get(API);
         setExchangeData(response?.data?.conversion_rates);
         console.log(response);
      } catch (error) {
         alert("Something went wrong");
         console.log(error);
      } finally {
         setDataLoading(false);
      }
   };

   useEffect(() => {
      FetchAPI();
   }, []);

   return ExchangeData;
}
