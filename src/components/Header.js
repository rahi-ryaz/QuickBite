import { LOGO_URL } from '../utils/constants';
import { useState ,useContext} from 'react';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';


const Header = () => {
 

  const [btnNameReact, setBtnNameReact] = useState('Login');
 

  const onlineStatus=useOnlineStatus();


  const {loggedInUser}= useContext(UserContext);
  
  const cartItems=useSelector((store)=>store.cart.items)

  // console.log(cartItems);


  return (
    <div  className=" m-1 p-4 flex justify-between bg-pink-200 sm:bg-yellow-200 lg:bg-neutral-300 font-[500] ">
      <div className="logo-container">
      <Link to="/"> 
       <img src={LOGO_URL} alt="Logo"  className="w-16 mx-6 mt-2" />
       <h2 className ="px-4 m-1 font-bold text-lg text-pink-700">Quick Bite</h2>
       </Link>
      </div>
      
      <div className="flex items-center">
       <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? '✅' : '⛔'}</li>
          <li className="px-4">
            <Link to="/about" >
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" >
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">
              Grocery
            </Link>
          </li>

          <li className="px-4 ">
           <Link to="/Cart"> Cart ({cartItems.length} items)</Link> 
          </li>
         <li>
          <button
            className="loginBtn"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
            }}
          >
            {btnNameReact}
          </button>
          </li>
          <li className="px-4"> { loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
