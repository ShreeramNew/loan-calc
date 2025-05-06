import React from "react";

export default function About() {
   return (
      <div className=" max-w-[78rem] mx-auto py-[2rem]">
         <div className=" text-[2rem] text-gray-800 font-semibold">About This App</div>
         <div className=" mt-3 mb-[1rem]">
            This Loan Calculator App is a modern, single-page web application built using{" "}
            <HighLightText text={"React JS"} />
            and <HighLightText text={"Material UI"} />. It allows users to calculate loan EMIS
            (Equated Monthly Installments), view a detailed amortization schedule, and see real-time
            currency conversions of their EMI using live exchange rates.{" "}
         </div>
         {/* Instruction Section  */}
         <hr className=" border-gray-200" />
         <div className=" text-[1.5rem] mt-[1rem]">📝 Instructions for Candidates</div>
         <div className=" my-[10px]">
            Please follow these instructions to complete and submit your project:
         </div>
         {/* List of Points  */}
         <div className=" mt-[10px] pl-[3rem]">
            <ul className=" list-disc">
               <li>
                  Push the entire project to a public <HighLightText text={"GitHub repository"} />
               </li>
               <li>
                  Make sure to <HighLightText text={"commit regularly"} /> with clear messages after
                  completing each feature
               </li>
               <li>Use the provided EMI formula to perform calculations.</li>
               <li>
                  {" "}
                  Use <HighLightText text={"Context API"} /> for global state management (e.g.
                  theme, currency).
               </li>
               <li>
                  Create <HighLightText text={"custom React hooks"} /> for reusable logic (e.g. EMI
                  calculation, fetching exchange rates).
               </li>
               <li>
                  Integrate the <HighLightText text={"ExchangeRate API"} /> for live currency
                  conversion.
               </li>
               <li>
                  Ensure the app is fully <HighLightText text={"responsive"} /> on all screen sizes.
               </li>
               <li>
                  Implement both <HighLightText text={"light and dark modes"} /> using Material Ul's
                  theming system.
               </li>
               <li>
                  Add a <HighLightText text={"404 Not Found"} /> page for unmatched routes.
               </li>
               <li>
                  Handle runtime errors gracefully by showing an{" "}
                  <HighLightText text={"Error Page."} />{" "}
               </li>
               <li>
                  Once deployed, add the live deployment{" "}
                  <HighLightText text={"link in the About section"} /> of your GitHub repo.
               </li>
               <li>Deploy the project on any platform (e.g. Vercel, Netlify, GitHub Pages).</li>
            </ul>
         </div>
         <div className=" mt-4 mb-[2rem]">
            ✅Your final GitHub repository should include a live demo link, and your code should be
            readable, modular, and well-structured.
         </div>
         {/* Features section  */}
         <hr className=" border-gray-200" />
         <div className=" text-[1.5rem] mt-[1rem]">🔧 Features</div>
         {/* List of Points  */}
         <div className=" mt-[10px] pl-[3rem]">
            <ul className=" list-disc">
               <li>
                  Loan EMI calculation using standard financial formulas Dynamic amortization
                  schedule table with monthly breakdown
               </li>
               <li>Real-time currency conversion of EMI using a live exchange rate API</li>
               <li>Paginated exchange rate table for 160+ currencies</li>
               <li>Dark/Light mode toggle for a customizable experience</li>
               <li>Collapsible header navigation on mobile screens</li>
               <li>Fully responsive UI built with Material UI</li>
            </ul>
         </div>
         {/* Technologies section  */}
         <hr className=" border-gray-200 mt-[2rem]" />
         <div className=" text-[1.5rem] mt-[1rem]">📦 Technologies Used </div>
         {/* List of Points  */}
         <div className=" mt-[10px] pl-[3rem]">
            <ul className=" list-disc">
               <li>
                  {" "}
                  <HighLightText text={"React"} /> (Hooks, Routing, Context API)
               </li>
               <li>
                  <HighLightText text={"Material UI"} />
                  for styling and responsive components
               </li>
               <li>
                  <HighLightText text={"Axios"} />
                  for API calls
               </li>
               <li>
                  <HighLightText text={"Exchange Rate API"} />
                  for real-time currency conversion
               </li>
            </ul>
         </div>

         {/* EMI Formula section  */}
         <hr className=" border-gray-200 mt-[2rem]" />
         <div className=" text-[1.5rem] mt-[1rem]">➕ EMI Formula Used</div>
         <div className=" my-[10px]">
            {" "}
            The EMI (Equated Monthly Installment) is calculated using the standard formula:
         </div>
         <div className=" my-[10px] text-[0.9rem]"> EMI = [P x R × (1+R)N] / [(1+R)N − 1]</div>
         <div className=" my-[10px]">Where</div>
         {/* List of Points  */}
         <div className=" mt-[10px] pl-[3rem]">
            <ul className=" list-disc">
               <li>P = Principal loan amount</li>
               <li>R = Monthly interest rate (annual rate /12/ 100)</li>
               <li>N = Loan duration in months</li>
            </ul>
         </div>
         {/*Currency Conversion API section  */}
         <hr className=" border-gray-200 mt-[2rem]" />
         <div className=" text-[1.5rem] mt-[1rem]">🌍 Currency Conversion API</div>
         <div className=" my-[10px]">
            This app integrates with the free tier of the ExchangeRate-API to fetch live exchange
            rates.
         </div>
         <div className=" my-[10px] text-[0.9rem]">
            API Endpoint Example: <br /> https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD{" "}
            <br /> <br /> You must register and obtain a free API key to use this endpoint. Then,
            replace YOUR_API_KEY in the app code with your actual key.{" "}
         </div>

         {/* Purpose of This App Section  */}
         <hr className=" border-gray-200" />
         <div className=" text-[1.5rem] mt-[1rem]">🎯 Purpose of This App</div>
         <div className=" my-[10px]">
            This project is designed to assess a candidate's React development skills, including:
         </div>
         {/* List of Points  */}
         <div className=" mt-[10px] pl-[3rem]">
            <ul className=" list-disc">
               <li>React fundamentals (state, props, hooks)</li>
               <li>
                  Component structure and code reusability Third-party API integration and live data
                  rendering Working with tables, lists, and pagination Theme customization
                  (dark/light mode toggle)
               </li>
               <li>Error handling and graceful UI fallbacks</li>
               <li>Responsive design and collapsible mobile header navigation (In Mobile view)</li>
            </ul>
         </div>
         <div className=" mt-4 mb-[2rem]">
            ✨For any currency conversion feature to work, make sure the API key is valid and the
            network allows external API calls
         </div>
      </div>
   );
}

const HighLightText = ({ text }) => {
   return <span className=" font-semibold text-[1.1rem]">{text} </span>;
};
