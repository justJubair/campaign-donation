import { useLoaderData } from "react-router-dom"
import { getDonationId } from "../../utils/localStorage";
import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {

  const data = useLoaderData();
 const [donatedCards, setDonatedCards] = useState([])
  useEffect(()=>{
    const storedDonationId = getDonationId()
    const donatedCards = data.filter(donationCard=> storedDonationId.includes(donationCard.id))
    setDonatedCards(donatedCards)
  },[data])
 
  return (
    <div className="max-w-screen-xl mx-auto p-4 mt-2 flex justify-center gap-8 flex-wrap md:flex-nowrap">
      {donatedCards.map(donatedCard=> <DonationCard key={donatedCard.id} donatedCard={donatedCard}/>)}
    </div>
  )
}

export default Donation
