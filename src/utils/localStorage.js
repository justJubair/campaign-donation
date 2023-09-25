const getDonationId = ()=>{
    const storedDonationId = localStorage.getItem('donation-id');
    if(storedDonationId){
        return JSON.parse(storedDonationId)
    }
    return [];
}

// eslint-disable-next-line no-unused-vars
const saveDonationId = id =>{
    // eslint-disable-next-line no-unused-vars
    const storedDonationId = getDonationId();
    const isExist = storedDonationId.find(donationId=> donationId === id)
    if(!isExist){
        storedDonationId.push(id);
        localStorage.setItem('donation-id', JSON.stringify(storedDonationId))
    }
    
}

export{getDonationId, saveDonationId}