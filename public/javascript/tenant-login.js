// TENANT LOGIN

const loginFormHandler = async function(event) {
  event.preventDefault();
 
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  console.log('hellooooooo??', email)
  if (!email && !password) {
    console.log('Invalid Email/Password.')
  } else {
    const response = await fetch("/api/tenant/login", {
      method: "post",
      body: JSON.stringify({
        email: email.value,
        password: password.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/tenant");
      })
      .catch(err => console.log(err));
  }
};

document.querySelector(".form-wrapper").addEventListener("submit", loginFormHandler);
