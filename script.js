var container = document.getElementById("card-container");
var form = document.getElementById("studentForm");
var formContainer = document.getElementById("form-container");


var students = [
    {
        studentName: "Syeda Nahal Mansoor",
        age: 17,
        course: "Modern Web and App Development",
        email: "nahalsyeda@gmail.com",
        image: "nahal.jpeg"
    },

    {
        studentName: "Ali",
        age: 20,
        course: "Graphic Design",
        email: "ali@example.com",
        image: "Ali.jpg"
    },

    {
        studentName: "Neha Khan",
        age: 18,
        course: "Web Development",
        email: "neha.khan@example.com",
        image: "Neha.jpg"
    },

    {
        studentName: "Fatima Noor",
        age: 19,
        course: "App Development",
        email: "fatima.noor@example.com",
        image: "Fatima.avif"
    },

    {
        studentName: "Usman Tariq",
        age: 11,
        course: "Cyber Security",
        email: "usman.tariq@example.com",
        image: "https://i.pravatar.cc/150?img=4"
    },

    {
        studentName: "Hira Shah",
        age: 22,
        course: "AI & Machine Learning",
        email: "hira.shah@example.com",
        image: "Shah.jpg"
    },

    {
        studentName: "Ayat",
        age: 20,
        course: "Software Engineering",
        email: "ayat@example.com",
        image: "Ayat.webp"
    },

    {
        studentName: "Bilal Ahmed",
        age: 23,
        course: "Data Science",
        email: "bilal.ahmed@example.com",
        image: "https://i.pravatar.cc/150?img=7"
    },
]

for (var i = 0; i < students.length; i++) {
    var student = students[i];

    var card = document.createElement("div");
    card.className = "card animate__animated animate__zoomIn animate__fast";
    card.innerHTML = `
    <img src='${student.image}' alt='Profile'>
    <h3>${student.studentName}</h3>
    <p><b>Age</b> : ${student.age}</p>
    <p><b>Course</b> : ${student.course}</p>
    <p><b>E-mail</b> : ${student.email}</p>`

    container.appendChild(card);
}

function showForm() {
    container.style.opacity = "0.3";
    var loader = document.createElement("img");
    loader.src = "loader.gif";
    loader.className = "loader  animate__animated animate__zoomIn animate__fast";
    formContainer.appendChild(loader);
    setTimeout (() => {
        loader.remove();
        form.classList.add("form");
        form.style.display = "flex";
    } , 4000);
};

function addStudent() {
    var newStudent = {
        studentName: document.getElementById("name").value,
        age: document.getElementById("age").value,
        course: document.getElementById("course").value,
        email: document.getElementById("email").value,
        image: document.getElementById("image").value
    };
    if (
        newStudent.studentName.trim() !== "" &&
        newStudent.age.trim() !== "" &&
        newStudent.course.trim() !== "" &&
        newStudent.email.trim() !== "" &&
        newStudent.image.trim() !== ""
    ) 
    {
        students.push(newStudent);
        var card = document.createElement("div");
        card.className = "card animate__animated animate__zoomIn animate__slow";
        card.innerHTML = `
        <img src='${newStudent.image}' alt='Profile'>
        <h3>${newStudent.studentName}</h3>
        <p><b>Age</b>: ${newStudent.age}</p>
        <p><b>Course</b>: ${newStudent.course}</p>
        <p><b>Email</b>: ${newStudent.email}</p>
        `;
        container.appendChild(card);
        form.reset();   
        form.style.display = "none";
        alert(`Student "${newStudent.studentName}" added successfully!`);
        container.style.opacity = "1";
    } else{
        alert("Please fill all the fields");
    }
};

function removeLastStudent() {
    if (container.children.length > 0) {
        var lastCard = container.lastElementChild;
        var studentName = lastCard.querySelector("h3").textContent;
        container.removeChild(lastCard);
        alert(`Student "${studentName}" Removed`);
    } else {
        alert("No more cards to remove!");
    };
};

