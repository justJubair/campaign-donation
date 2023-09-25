/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */


const HomeCard = ({ card }) => {
 
  const {
    category,
    categoryBackgroundColor,
    img,
    cardColor,
    textColor,
    title,
  } = card;

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
  return (
   <div style={cardStyle} className='rounded-lg'>
    <img className="w-full" src={img} alt="" />
    <div className="px-2 py-4">
    <span style={categoryStyle} className="badge font-bold border-none p-4 m-2">{category}</span>
    <h3 className="font-bold ml-4" style={titleStyle}>{title}</h3>
    </div>
   </div>
  );
};

export default HomeCard;
