import React, {lazy} from 'react';
import ReactDOM from 'react-dom/client';
import Body from "./components/Body.js";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from './components/RestaurantMenu.js';
import {Suspense }   from "react";
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './components/Cart.js';


const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="m-1 p-6 flex justify-center  bg-pink-200 sm:bg-yellow-200 lg:bg-neutral-300 font-[500] ">
      <p >
        Copyright &copy; {currYear}, Made with 💗 by <strong>Rahi</strong>
      </p>
    </footer>
  );
};

const Grocery = lazy(() =>{
  return import("./components/Grocery")
});

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    children : [
      {
        path : "/",
        element : <Body/>
      },
      {
        path : "/about",
        element : <About/>,
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/grocery",
        element : ( <Suspense fallback ={<h1>Loading...</h1>}>  
        <Grocery/> 
        </Suspense> 
      ) 
      },

      {
        path : "/restaurants/:resId",
        element : <RestaurantMenu/>
      }
      ,
      {
        path: "/cart",
        element : <Cart/>
      }
    
    ],
    errorElement : <Error/>
  },
  
])



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);


