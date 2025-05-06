import "./App.css";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import NavBar from "./components/NavBar";
import ExchangeRates from "./components/ExchangeRates";
import About from "./components/About";
import ErrorHandler from "./components/ErrorHandler";

function App() {
   let router = createBrowserRouter([
      {
         path: "/",
         Component: NavBar,
         errorElement: <ErrorHandler />,
         children: [
            {
               path: "/",
               Component: Home,
            },
            {
               path: "/exchange_rates_live",
               Component: ExchangeRates,
            },
            {
               path: "/about",
               Component: About,
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
