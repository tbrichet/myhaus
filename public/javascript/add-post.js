// JAVASCRIPT FOR TENANTS POSTING A MAINTENANCE OR PET REQUEST

// Submit Maintenance Request
async function maintenanceSubmit() {
  
    const title = document.querySelector('#addTitle').value;
    const description = document.querySelector('#addBody').value;
    const landlord_id = document.querySelector('input[name="landlord-id"]').value;
    const tenant_id = document.querySelector('input[name="tenant-id"]').value;
  
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        landlord_id,
        tenant_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/tenant');
      console.log("maintenance request submitted");
    } else {
      alert(response.statusText);
    }
};

// Submit Pet Request
async function petSubmit() {

  const landlord_id = document.querySelector('input[name="landlord-id"]').value;
  const tenant_id = document.querySelector('input[name="tenant-id"]').value
  const description = document.querySelector('#petDescriptionInfo').value;
  const status = document.querySelector('#petStatusInfo').value;
    
    const response = await fetch(`/api/pet`, {
      method: 'POST',
      body: JSON.stringify({
        status,
        description,
        landlord_id,
        tenant_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/tenant');
      console.log("pet update submitted");

    } else {
      alert(response.statusText);    
    }
};

async function deletePost(id) {
  await fetch(`/api/post/${id}`, {
    method: 'DELETE'
  });

  document.location.replace('/post');
};

async function deletePet(id) {
  await fetch(`/api/pet/${id}`, {
    method: 'DELETE'
  });

  document.location.replace('/pet');
};

// Event Listener for Pet Update Submit Button
document.querySelector(".form").addEventListener("submit", maintenanceSubmit);
document.querySelector(".form-pet").addEventListener("submit", petSubmit);