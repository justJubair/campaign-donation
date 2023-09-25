import { useLoaderData } from "react-router-dom"
import { getDonationId } from "../../utils/localStorage";
import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {

  const data = useLoaderData();
 const [donatedCards, setDonatedCards] = useState([])
 const [displayCardsLength, setDisplayCardsLength] = useState(4)
 const [isShowAll, setIsShowAll] = useState(false)
  useEffect(()=>{
    const storedDonationId = getDonationId()
    const cardsDonated = data.filter(donationCard=> storedDonationId.includes(donationCard.id))
    setDonatedCards(cardsDonated)
  },[data])
 const handleShowAll =()=>{
    setDisplayCardsLength(donatedCards.length)
    setIsShowAll(true)
 }
  return (
    <div className="max-w-screen-xl mx-auto p-4 mt-2 ">
     <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
     {donatedCards.slice(0, displayCardsLength).map(donatedCard=> <DonationCard key={donatedCard.id} donatedCard={donatedCard}/>)}
     </div>
    <div className="flex justify-center my-8">
    <button onClick={handleShowAll} className={`btn bg-lime-800 text-white ${donatedCards.length>4 && !isShowAll ? 'block' : 'hidden'}`}>See all</button>
    </div>
    </div>
  )
}

export default Donation
