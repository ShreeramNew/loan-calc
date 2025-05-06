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
         <hr className=" border-gray-200" />
         <div className=" text-[1.5rem] mt-[1rem]">📝 Instructions for Candidates</div>
         <div className=" my-[10px]">
            Please follow these instructions to complete and submit your project:
         </div>
         {/* List of Points  */}
         <div className=" pl-[1rem]">
            <ul className=" list-disc">
               <li>
                  Push the entire project to a public <HighLightText text={"GitHub repository"} />
               </li>
               <li>
                  Make sure to <HighLightText/> commit regularly with clear messages after completing each feature
               </li>
            </ul>
         </div>
         • • . • Use the provided EMI formula to perform calculations. • Use Context API for global
         state management (e.g. theme, currency). • Create custom React hooks for reusable logic
         (e.g. EMI calculation, fetching exchange rates). • Integrate the ExchangeRate API for live
         currency conversion. • Ensure the app is fully responsive on all screen sizes. • Implement
         both light and dark modes using Material Ul's theming system. • Add a 404 Not Found page
         for unmatched routes. • Handle runtime errors gracefully by showing an Error Page. Once
         deployed, add the live deployment link in the About section of your GitHub repo. Deploy the
         project on any platform (e.g. Vercel, Netlify, GitHub Pages). Your final GitHub repository
         should include a live demo link, and your code should be readable, modular, and
         well-structured.
      </div>
   );
}

const HighLightText = ({ text }) => {
   return <span className=" font-semibold text-[1.1rem]">{text} </span>;
};
