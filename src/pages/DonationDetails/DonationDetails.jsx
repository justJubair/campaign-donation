import { useLoaderData, useParams } from "react-router-dom"
import './DonationDetails.css'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { getDonationId, saveDonationId } from "../../utils/localStorage";
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
   const handleDonation =()=>{
    const storedDonationId = getDonationId()
    const isExist = storedDonationId.find(donationId => donationId === idInt)
    if(isExist){
      toast.warn('Already Donated')
    } else{
      toast('Successfully Donated');
      saveDonationId(idInt)
    }
   
   }
  return (
    <div className="max-w-screen-xl mx-auto p-4 mt-2 mb-8"> 
     <div style={background
    } className="flex items-end md:w-9/12 mx-auto h-96 md:h-[500px]">
        <div className="btn-container w-full p-6">
            
        <button onClick={handleDonation} style={btnColor} className=" btn border-none text-white">Donation ${price}</button>
        </div>
     </div>
     <div className="md:w-9/12 mx-auto mt-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2"><small>{description}</small></p>
     </div>
     <ToastContainer/>
    </div>
  )
}

export default DonationDetails
