import { useLoaderData, useParams } from "react-router-dom"
import './DonationDetails.css'
const DonationDetails = () => {
    const {id} = useParams()
    const data = useLoaderData()
   const idInt = parseInt(id)
    // const {img, price, title, description, textColor} = data
    const selectedDonation = data.find(donation=> donation.id === idInt);
   const {img, price, title, description, textColor} = selectedDonation;
   const background = {
    background: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
   }
   const btnColor = {
    backgroundColor: textColor
   }
  return (
    <div className="max-w-screen-xl mx-auto p-4 mt-2"> 
     <div style={background
    } className="flex items-end md:w-9/12 mx-auto h-96 md:h-[500px]">
        <div className="btn-container w-full p-6">
            
        <button style={btnColor} className=" btn border-none text-white">Donation ${price}</button>
        </div>
     </div>
    </div>
  )
}

export default DonationDetails
