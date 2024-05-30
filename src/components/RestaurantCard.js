import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
 
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  

  return (
    <div
    data-testid="resCard"
    className=" overflow-hidden m-4 p-4 w-[250px] h-[350px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all " >
      <img
        className=" h-[175px] w-[250px] rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />
      <div className="">
      <h3 className="font-bold py-4 text-lg truncate">{name}</h3>
        <hr />
        <div  className="flex justify-between">
      
        <h1 className="font-bold">{avgRating} stars</h1>

        {/* <h4>₹{costForTwo}</h4>  */}
        <h1>{sla?.slaString}</h1>
        </div>
        <em className='line-clamp-2'>{cuisines.join(', ')}</em>
      </div>
    </div>
  );
};


export default RestaurantCard;
