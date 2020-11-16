// LANDLORD LOGIN

const loginLandlord = async function(event) {
    event.preventDefault();
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    
  if (email && password) {
    await fetch("/api/landlord/login", {
      method: "post",
      body: JSON.stringify({
        email : email.value,
        password: password.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/home");
      })
      .catch(err => console.log(err));
  }
    
  };
  
  // Login Event Listener
  document.querySelector(".form-wrapper").addEventListener("submit", loginLandlord);