const logout = document.getElementById("logout");
const students = document.getElementById("students");
const nameCreation = document.getElementById("name-creation");
const ratingCreation = document.getElementById("rating-creation");
const createStudent = document.getElementById("create");
const studentId = document.getElementById("student-id");
const deleteBtn = document.getElementById("delete");
// Edit Student
const oldStudentId = document.getElementById("old-student-id");
const newStudentName = document.getElementById("new-student-name");
const newStudentRating = document.getElementById("new-student-rating");
const editBtn = document.getElementById("edit");

const login = document.getElementById("login");
const logged = document.getElementById("logged");
const reg = document.getElementById("reg")
// Видалив всі дані з сесії
logout.addEventListener("click", () => {
  sessionStorage.clear();
  document.location.reload();
  console.log("session was deleted", sessionStorage);
});

// let data = sessionStorage.getItem('key');
//
// console.log(sessionStorage.jwt)

// Отримання інформації про користувача з використанням jwt
if (sessionStorage.length != 0) {
  axios
    .get("http://0.0.0.0:5000/api/v1/users/me", {
      headers: {
        "api-token": sessionStorage.jwt,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
			// const logout = document.createElement("li");
			// navLinks.appendChild(logout);
			// const aLink = document.createElement("a");
			// aLink.setAttribute("id", "logout");
			// aLink.setAttribute("href", "#");
			// logout.appendChild(aLink);
			// const line = document.createElement("div");
			// line.classList.add("line");
			login.remove();
      reg.remove();
      for (let i = 0; i < response.data.blogposts.length; i++) {
				// div.col
			  const divCol = document.createElement("div");
        divCol.classList.add("col");
        students.appendChild(divCol);
        // change
        const divChange = document.createElement("div");
        divChange.classList.add("change");
        divCol.appendChild(divChange);
        const spanDelete = document.createElement("span");
        var deleteText = document.createTextNode(response.data.blogposts[i].id);
        spanDelete.appendChild(deleteText);
        divChange.appendChild(spanDelete);

        // img
        const newimg = document.createElement("img");
        newimg.setAttribute("src", "images/student.svg");
        divCol.appendChild(newimg);
        // student-details
        const studentsDetails = document.createElement("div");
        studentsDetails.classList.add("student-details");
        divCol.appendChild(studentsDetails);
        // span name
        const span = document.createElement("span");
        const span2 = document.createElement("span");
        var spanText = document.createTextNode("name: ");
        var spanName = document.createTextNode(response.data.blogposts[i].name);
        span2.appendChild(spanText);
        span.appendChild(span2);
        span.appendChild(spanName);
        studentsDetails.appendChild(span);
        // span rating
        const span1 = document.createElement("span");
        const span12 = document.createElement("span");
        var spanText1 = document.createTextNode("rating: ");
        var spanName2 = document.createTextNode(
          response.data.blogposts[i].rating
        );
        span12.appendChild(spanText1);
        span1.appendChild(span12);
        span1.appendChild(spanName2);
        studentsDetails.appendChild(span1);
      }
    })
    .catch((error) => {
      console.log("error " + error);
    });
} else {
	logged.remove();

}

// Створення студента

create.addEventListener("click", () => {
  axios
    .post(
      "http://0.0.0.0:5000/api/v1/blogposts/",
      {
        name: nameCreation.value,
        rating: ratingCreation.value,
      },
      {
        headers: {
          "api-token": sessionStorage.jwt,
          "Content-Type": "application/json",
        },
      }
    )
    .then(
      (response) => {
        document.location.reload();
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
});

// Видалення студената

deleteBtn.addEventListener("click", () => {
  axios
    .delete(`http://0.0.0.0:5000/api/v1/blogposts/${studentId.value}`, {
      headers: {
        "api-token": sessionStorage.jwt,
        "Content-Type": "application/json",
      },
    })
    .then(
      (response) => {
        document.location.reload();
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
});

// Редагування студента

editBtn.addEventListener("click", () => {
  axios
    .put(
      `http://0.0.0.0:5000/api/v1/blogposts/${oldStudentId.value}`,
      {
        name: newStudentName.value,
        rating: newStudentRating.value,
      },
      {
        headers: {
          "api-token": sessionStorage.jwt,
          "Content-Type": "application/json",
        },
      }
    )
    .then(
      (response) => {
        document.location.reload();
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
});
