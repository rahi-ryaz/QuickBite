import { useState } from "react";
import Shimmer from "./Shimmer.js";
import {useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory.js";


const RestaurantMenu =() =>{      
        const {resId} = useParams();

        const dummy = 'Dummy Data';

       const resInfo = useRestaurantMenu(resId);

       const [showIndex, setShowIndex] = useState(null);

        //restaurant
        const cuisines = resInfo?.cards[2]?.card?.card?.info.cuisines;
    
        const name = resInfo?.cards[2]?.card?.card?.info?.name;
       


        const costForTwoMessage  = resInfo?.cards[2]?.card?.card?.info?.labels?.name?.cartOrderabilityNudgeBanner?.costForTwoMessage;

        if(resInfo===null)  return (<Shimmer/>) ; 
        //menu
       const {itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;
       
       const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]=== 
       'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')

    // console.log("form restaurant menu",categories);



    return (
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(', ')} - {costForTwoMessage}
        </p>
        {/* categories accordions */}
        {categories.map((category, index) => (
          // Controlled Component
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}    
            dummy={dummy}
          />
        ))}
      </div>
    );
  };
export default RestaurantMenu;
