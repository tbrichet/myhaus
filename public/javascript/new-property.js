// LANDLORD CREATES NEW PROPERTY ON LANDLORD DASHBOARD

async function newPropertyHandler(id) {

    const address = document.querySelector('#addAddress').value;
    const complex = document.querySelector('#addComplex').value;
    const unit = document.querySelector('#addUnitNumber').value;
    const rents = document.querySelector('#addRent').value;
    const rent = parseInt(rents)
   
        const response = await fetch(`/api/property`, {
            method: 'POST',
            body: JSON.stringify({
                address,
                complex,
                unit,
                rent
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        if (response.ok) {
            document.location.replace('/home');
        } else {
            alert(response.statusText);
        } 
};

// Submit Button Handler
document.querySelector('.form').addEventListener('submit', newPropertyHandler);