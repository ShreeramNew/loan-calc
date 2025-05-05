import { Dropdown, Table } from "antd";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa6";

export default function Home() {
   const amountRef = useRef();
   const rateRef = useRef();
   const termRef = useRef();

   const [showTable, setShowTable] = useState(false);
   const [ActiveCurrency, setActiveCurrency] = useState("USD");

   const InputBoxes = [
      {
         inputRef: amountRef,
         label: "Loan Amount",
         defaultValue: 100000,
      },
      {
         inputRef: rateRef,
         label: "Interest Rate(%)",
         defaultValue: 8.5,
      },
      {
         inputRef: termRef,
         label: "Term (Years)",
         defaultValue: 5,
      },
   ];

   const [isMenuOpen, setIsmenuOpen] = useState(false);
   const [EMI, setEMI] = useState(0);
   const [EMIBreakDown, setEMIBreakDown] = useState([]);
   const [dataSource, setDataSource] = useState([]);

   //-----------------Set Table data-------------------------------------------
   const PrepareTableData = () => {
      let monthcount = 1;
      let dataToSet = [];

      // EMIBreakDown will have an array of years, and their respective monthly breakdown.
      // So combine all of them into one single array of objects, each object represents monthly breakdown
      EMIBreakDown.forEach((year) => {
         let monthlyBreakdown = year.monthly_breakdown.map(
            ({ monthly_principal, monthly_interest, remaining_loan_amount }) => {
               return {
                  key: monthcount,
                  month: monthcount++,
                  principal: monthly_principal,
                  interest: monthly_interest,
                  remainingBalance: remaining_loan_amount,
               };
            }
         );
         dataToSet = [...dataToSet, ...monthlyBreakdown];
      });
      setDataSource(dataToSet);
   };

   useEffect(() => {
      PrepareTableData();
   }, [EMIBreakDown]);

   // ----------------------------------------------Set column data-------------------------------------------
   const columns = [
      {
         title: "Month",
         dataIndex: "month",
         key: "month",
      },
      {
         title: "Principal",
         dataIndex: "principal",
         key: "principal",
         render: (value) => {
            return (
               <div>
                  {value + " "}
                  {ActiveCurrency}
               </div>
            );
         },
         align: "right",
      },
      {
         title: "Interest",
         dataIndex: "interest",
         key: "interest",
         render: (value) => {
            return (
               <div>
                  {value + " "}
                  {ActiveCurrency}
               </div>
            );
         },
         align: "right",
      },
      {
         title: "Remaining Balance",
         dataIndex: "remainingBalance",
         key: "remainingBalance",
         render: (value) => {
            return (
               <div>
                  {value + " "}
                  {ActiveCurrency}
               </div>
            );
         },
         align: "right",
      },
   ];

   //----------------------------------------------Handle click on Calculate Button--------------------------
   const HandleCalculate = async () => {
      let loanAmount = amountRef.current.value;
      let rate = rateRef.current.value;
      let term = termRef.current.value;

      if (isNaN(loanAmount) || isNaN(rate) || isNaN(term)) {
         return alert("Please enter valid numbers");
      }

      const payload = {
         loan_amount: parseFloat(loanAmount),
         interest_rate: parseFloat(rate),
         loan_term: parseFloat(term),
      };

      const encodedParams = new URLSearchParams();
      encodedParams.set("loan_amount", payload.loan_amount);
      encodedParams.set("interest_rate", payload.interest_rate);
      encodedParams.set("loan_term", payload.loan_term);

      const options = {
         method: "POST",
         url: "https://smart-emi-calculator.p.rapidapi.com/",
         headers: {
            "x-rapidapi-key": "b5a9516140msh2f8ce90b8f86d88p178b8fjsn2809c447094a",
            "x-rapidapi-host": "smart-emi-calculator.p.rapidapi.com",
            "Content-Type": "application/x-www-form-urlencoded",
         },
         data: encodedParams,
      };

      try {
         let response = await axios.request(options);
         setEMI(response.data.emi);
         setEMIBreakDown(response.data.emi_breakdown);
         setShowTable(true);
      } catch (error) {
         console.log(error);
      }
   };

   //----------------------------------------------Drop Down Items-----------------------------------------------
   const items = [
      ...["USD", "EUR", "INR", "GBP", "JPY", "AUD", "CAD"].map((item, index) => {
         return {
            key: (index + 1).toString() + "Currency",
            label: (
               <div
                  onClick={() => {
                     setActiveCurrency(item);
                     setIsmenuOpen(false);
                  }}
                  className=" cursor-pointer px-[1rem] py-[5px]"
               >
                  {item}
               </div>
            ),
         };
      }),
   ];

   return (
      <div>
         <div className=" text-black lg:max-w-[75rem] mx-auto py-[2rem]">
            <div className=" text-[2rem] mb-[1rem] font-medium  ">Loan Calculator Dashboard</div>
            {/* Input Boxes  */}
            <div className=" flex gap-[2rem] justify-start items-center">
               {InputBoxes.map(({ inputRef, label, defaultValue }) => (
                  <CustomInput
                     key={label}
                     inputRef={inputRef}
                     label={label}
                     defaultValue={defaultValue}
                  />
               ))}
            </div>

            {/* Calculate Button  */}
            <div
               onClick={HandleCalculate}
               className=" px-[1rem] py-[7px] w-fit rounded-[4px] bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium text-[0.9rem] shadow-2xl mt-4 cursor-pointer "
            >
               CALCULATE
            </div>
            {/* EMI Table  */}
            {showTable && (
               <>
                  {/* Table Top Title  */}

                  <div className=" flex justify-between items-center py-[3rem]">
                     <div>
                        <div className=" text-[1.4rem] mb-[1.5rem]">Monthly EMI: ${EMI}</div>
                        {/* Currency selector  */}
                        <Dropdown
                           menu={{ items }}
                           placement="bottomLeft"
                           trigger={"click"}
                           open={isMenuOpen}
                        >
                           <div
                              onClick={() => setIsmenuOpen((prev) => !prev)}
                              className={` ${
                                 isMenuOpen ? "  !border-blue-500 !border-2" : "border-gray-400"
                              } w-[5rem] hover:border-gray-600  h-[3.5rem] border-[1px] relative rounded-[6px] flex justify-center items-center gap-1 cursor-pointer  text-gray-800`}
                           >
                              <div>{ActiveCurrency}</div>
                              <FaCaretDown
                                 color="#596374"
                                 className={` ${
                                    isMenuOpen ? " rotate-[-180deg]" : " rotate-[0deg]"
                                 } transition-all  duration-300`}
                                 rotate={isMenuOpen ? 90 : 0}
                              />
                              <div
                                 className={` bg-white absolute top-[-12px] py-[2px] px-[5px] text-[12px] ${
                                    isMenuOpen ? "  !text-blue-500 " : "!text-gray-600"
                                 } `}
                              >
                                 Currency
                              </div>
                           </div>
                        </Dropdown>
                     </div>

                     {/* Reset Button  */}
                     <div
                        onClick={() => setShowTable(false)}
                        className=" py-[10px] px-[1rem] border-[1px] border-purple-400 hover:border-purple-700 text-purple-800  text-[1.01rem] cursor-pointer rounded-[5px]"
                     >
                        RESET TABLE
                     </div>
                  </div>
                  {/* Table with Data  */}

                  {showTable && (
                     <div className=" border-x-[1px] border-gray-200 ">
                        <div className=" text-[1.3rem] mb-4 ml-4">{`Amortization Schedule (${ActiveCurrency})`}</div>
                        <Table dataSource={dataSource} columns={columns} />
                     </div>
                  )}
               </>
            )}
         </div>
      </div>
   );
}

const CustomInput = ({ inputRef, label, defaultValue }) => {
   const [isPlaceholder, setIsPlaceholder] = useState(true);
   useEffect(() => {
      inputRef.current.value.length > 0 ? setIsPlaceholder(false) : setIsPlaceholder(true);
   }, []);

   return (
      <div className=" relative  w-fit h-fit border-  ">
         <input
            ref={inputRef}
            defaultValue={defaultValue}
            onFocus={() => {
               if (inputRef.current.value.length == 0) {
                  setIsPlaceholder(false);
               }
            }}
            onBlur={() => {
               if (inputRef.current.value.length == 0) {
                  setIsPlaceholder(true);
               }
            }}
            type="text"
            className={` border-[1.4px] focus:border-[2px] text-gray-700 outline-none w-[12rem] h-[3rem]  rounded-[5px] border-gray-400 focus:border-blue-600 p-[1rem]`}
         />
         <div
            className={` ${
               isPlaceholder
                  ? " h-[3rem] w-[12rem] text-gray-500 top-0 left-0 text-[16px] "
                  : " h-fit py-[5px] w-fit px-[10px] text-blue-500 top-[-13px] left-[0px] text-[12px]  "
            } absolute flex justify-start items-center transition-all duration-300 p-[10px]`}
            onClick={() => {
               if (inputRef.current.value.length == 0) {
                  setIsPlaceholder(false);
                  inputRef.current.focus();
               }
            }}
         >
            <div className={`${isPlaceholder ? "px-[10px]" : "px-[4px]"} bg-white  `}>{label}</div>
         </div>
      </div>
   );
};
