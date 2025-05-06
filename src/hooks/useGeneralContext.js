import React, { useContext } from "react";
import { GeneralContext } from "../context/GeneralContextProvider";

export default function useGeneralContext() {
   const GeneralContextData = useContext(GeneralContext);
   return GeneralContextData;
}
