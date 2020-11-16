// LANDLORD CAN EDIT A PROPERTY ON DASHBOARD

async function newPropertyHandler(event) {
    event.preventDefault()

    const idPost = document.querySelector('input[name="property-id"]').value;
    const complex = document.querySelector('#updateComplex').value;
    const unit = document.querySelector('#updateUnitNumber').value;
    const rents = document.querySelector('#updateRent').value;
    const rent = parseInt(rents)
    
        const response = await fetch(`/api/property/${idPost}`, {
            method: 'PUT',
            body: JSON.stringify({
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

async function deletePost(click, id) {

    await fetch(`/api/property/${id}`, {
      method: 'DELETE'
    });
  
    document.location.replace('/home');
};


// Submit Button Handler
document.querySelector('.form-update').addEventListener('submit', newPropertyHandler);
