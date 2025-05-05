import "./App.css";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import NavBar from "./components/NavBar";

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
