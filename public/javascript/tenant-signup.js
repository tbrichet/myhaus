

const signupFormHandler = async function (event) {
  event.preventDefault();

  const emailEl = document.querySelector("#email-input-signup");
  const passwordEl = document.querySelector("#password-input-signup");
  const firstNameEl = document.querySelector("#firstname-input-signup");
  const lastNameEl = document.querySelector("#lastname-input-signup");
  const invitationEl = document.querySelector("#invitation");

  if (emailEl.value && passwordEl.value && firstNameEl.value && lastNameEl.value){
    fetch("/api/tenant", {
      method: "post",
      body: JSON.stringify({
        email: emailEl.value,
        password: passwordEl.value,
        first_name: firstNameEl.value,
        last_name: lastNameEl.value,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(async function() {
      tenant_id = 1
      await fetch(`/api/property/edit/${invitationEl.value}`, {
        method: "put",
        body: JSON.stringify({
          tenant_id,
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

  }
    
      
  
}




document
  .querySelector(".form-wrapper")
  .addEventListener("submit", signupFormHandler);