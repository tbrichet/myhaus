// TENANT CAN EDIT THEIR INFORMATION ON DASHBOARD

const signupFormHandler = async function (id, tenant_id) {
    
    const first_name = document.querySelector('#updateFirst').value;
    const last_name = document.querySelector('#updateLast').value;
    const email = document.querySelector('#updateEmail').value;
    const complex = document.querySelector('#updateComplex').value;
    const unit = document.querySelector('#updateUnitNumber').value;
    const rents = document.querySelector('#updateRent').value;
    const rent = parseInt(rents)
   
      
        fetch(`/api/tenant/${tenant_id}`, {
            method: "put",
            body: JSON.stringify({
              first_name,
              last_name,
              email
            }),
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(async function() {
            tenant_id = 1
            await fetch(`/api/property/edit/${id}`, {
              method: "put",
              body: JSON.stringify({
                tenant_id,
                complex,
                unit,
                rent,
                pet
              }),
              headers: {
                "Content-Type": "application/json"
              }
            })
          })
          .then(function () {
            document.location.replace('/tenant');
          })
          .catch(err => console.log(err));   
};
  
  
  
