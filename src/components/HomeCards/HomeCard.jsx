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
  console.log(card, cardColor);
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
   <div style={cardStyle} className='h-72 rounded-lg'>
    <img src={img} alt="" />
    <span style={categoryStyle} className="badge font-bold border-none p-4 m-2">{category}</span>
    <h3 className="font-bold ml-4" style={titleStyle}>{title}</h3>
   </div>
  );
};

export default HomeCard;
