// LANDLORD SIGNUP

const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const emailEl = document.querySelector("#landlord-email");
    const passwordEl = document.querySelector("#landlord-password");
    const firstNameEl = document.querySelector("#landlord-firstName");
    const lastNameEl = document.querySelector("#landlord-lastName");
    
if (emailEl.value && passwordEl.value && firstNameEl.value && lastNameEl.value){
    fetch("/api/landlord", {
      method: "post",
      body: JSON.stringify({
        email: emailEl.value,
        password: passwordEl.value,
        first_name: firstNameEl.value,
        last_name: lastNameEl.value,
       
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/home");
      })
      .catch(err => console.log(err));
  };
};

// EVENT LISTENER
document.querySelector(".form-wrapper").addEventListener("submit", signupFormHandler);
