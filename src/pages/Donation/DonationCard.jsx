/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const DonationCard = ({donatedCard}) => {
    const {
        price,
        category,
        categoryBackgroundColor,
        img,
        cardColor,
        textColor,
        title,
      } = donatedCard;

    const cardBackground={
        backgroundColor: cardColor
    }
    const categoryColor ={
        backgroundColor: categoryBackgroundColor,
        color: textColor
    }
    const priceColor ={
        color: textColor
    }
    const btnBackground ={
        backgroundColor: textColor
    }
  return (
    <div className="flex flex-col items-center gap-8 p-4 rounded-lg md:flex-row" style={cardBackground}>
      <div>
        <img src={img} alt="" />
      </div>
      <div className="">
      <span style={categoryColor} className="badge font-bold p-3">{category}</span>
      <h3 className="text-2xl font-bold my-2">{title}</h3>
      <p className="text-xl font-bold" style={priceColor}>${price.toFixed(2)}</p>
      <button style={btnBackground} className="btn text-white mt-4">View Details</button>
      </div>
    </div>
  )
}

export default DonationCard
