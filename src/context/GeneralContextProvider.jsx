import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

export default function GeneralContextProvider({ children }) {
   const [dataLoading, setDataLoading] = useState(false);
   const [ActiveCurrency, setActiveCurrency] = useState("USD");

   const toggleDarkMode = () => {
      document.documentElement.classList.toggle("dark");
   };

   return (
      <GeneralContext.Provider
         value={{ dataLoading, setDataLoading, ActiveCurrency, setActiveCurrency, toggleDarkMode }}
      >
         {children}
      </GeneralContext.Provider>
   );
}
