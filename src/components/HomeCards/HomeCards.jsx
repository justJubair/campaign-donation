import { useEffect, useState } from "react"
import HomeCard from "./HomeCard";


const HomeCards = () => {
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setCards(data))
    },[])
  return (
    <div className="max-w-screen-xl mt-20 gap-4 mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {cards.map(card=> <HomeCard key={card.id} card={card}/>)}
    </div>
  )
}

export default HomeCards
