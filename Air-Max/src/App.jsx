import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Product from "./Components/Product";
import Login from "./Pages/Login";
import Women from './Pages/Women'
import Men from './Pages/Men'
import Children from './Pages/Children'
import Favorites from "./Pages/Favorites";


const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/men",
        element: <Men />,
      },


      {
        path: "/women",
        element: <Women />,
      },

      {
        path: "/children",
        element: <Children />,
      },

      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
    <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
