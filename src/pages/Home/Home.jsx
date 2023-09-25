
import HomeCard from "../../components/HomeCards/HomeCard";
import "./Home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [displayCards, setDisplayCards] = useState([]);
 
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("../data.json");
      const data = await res.json();
      setCards(data);
      setDisplayCards(data);
    };
    loadData();
  }, []);



  const handleSubmit = (e) => {
    e.preventDefault();
   
    const searchCards = cards.filter((card) =>
    card.category.toLowerCase().includes(e.target.search.value?.toLowerCase())
  );
    setDisplayCards(searchCards)
    e.target.search.value = ''
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center banner h-[100vh] -mt-32 md:h-[80vh]">
        <div className="mt-16">
          <h1 className="text-4xl font-bold text-center">
            I Grow By Helping People In Need
          </h1>
          <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="flex items-center mt-8">
              <input
                className="md:w-96 py-2 px-2 rounded-lg"
                type="text"
                name="search"
                id="search"
                placeholder="Search here..."
              />
              <input
         
                className="btn bg-red-400 border-none text-white ml-4 hover:bg-red-700"
                type="submit"
                value="Search"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mt-20 gap-4 mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {displayCards?.map((card) => (
          <HomeCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Home;
