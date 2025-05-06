import "./App.css";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import NavBar from "./components/NavBar";
import ExchangeRates from "./components/ExchangeRates";

function App() {
   let router = createBrowserRouter([
      {
         path: "/",
         Component: NavBar,
         children: [
            {
               path: "/",
               Component: Home,
            },
            {
               path: "/exchange_rates_live",
               Component: ExchangeRates,
            },
         ],
      },
   ]);

   return (
      <RouterProvider router={router}>
         <NavBar />
      </RouterProvider>
   );
}

export default App;
