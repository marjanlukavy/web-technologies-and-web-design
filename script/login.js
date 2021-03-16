const userField = document.getElementById("user");
const passwordField = document.getElementById("password");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  axios
    .post(
      "http://0.0.0.0:5000/api/v1/users/login",
      {
        email: userField.value,
        password: passwordField.value,
      },
      { headers: { "Access-Control-Allow-Origin": "*" } }
    )
    .then(
      (response) => {
        console.log(response.data.jwt_token);
        sessionStorage.setItem("jwt", response.data.jwt_token);
        window.location.assign("http://localhost:8000/Desktop/web/");
      },
      (error) => {
        console.log(error);
      }
    );
});
