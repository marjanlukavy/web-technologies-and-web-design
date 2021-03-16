const adminEmail = document.getElementById("admin-email");
const adminPassword = document.getElementById("admin-password");
const adminName = document.getElementById("admin-name");
const createAdminBtn = document.getElementById("create-admin-btn");

createAdminBtn.addEventListener("click", () => {
  axios
    .post(
      "http://0.0.0.0:5000/api/v1/users/",
      {
        email: adminEmail.value,
        password: adminPassword.value,
        name: adminName.value
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
