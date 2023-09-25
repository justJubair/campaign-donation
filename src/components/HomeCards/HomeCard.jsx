/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { useNavigate } from "react-router-dom";


const HomeCard = ({ card }) => {
 
  const {
    id,
    category,
    categoryBackgroundColor,
    img,
    cardColor,
    textColor,
    title,
  } = card;
  const navigate = useNavigate()
  const cardStyle = {
    backgroundColor: cardColor
  }
  const categoryStyle = {
    backgroundColor: categoryBackgroundColor,
    color: textColor
  }
  const titleStyle = {
    color: textColor
  }
  const handleDetails = ()=>{
    navigate(`details/${id}`)
  }
  return (
   <div onClick={handleDetails} style={cardStyle} className='rounded-lg'>
    <img className="w-full" src={img} alt="" />
    <div className="px-2 py-4">
    <span style={categoryStyle} className="badge font-bold border-none p-4 m-2">{category}</span>
    <h3 className="font-bold ml-4" style={titleStyle}>{title}</h3>
    </div>
   </div>
  );
};

export default HomeCard;
