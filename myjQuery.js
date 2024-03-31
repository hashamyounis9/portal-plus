$(document).ready(function () {
  // reference of pages/routes
  dashboardReference = "/Courses/Index";
  registrationCardReference = "/RegistrationCard/Index";
  feesReference = "/Fees/Index";
  resultCardReference = "/ResultCard/Index";
  profileReference = "/Profile/Index";
  logoutReference = "/Login/Sign_out";

  if (window.location.pathname == dashboardReference) {
    // Fetch student's course and registration info
    const registrations = document.getElementsByTagName("b");
    roughRegistrationNumber = registrations[0].textContent;
    registrationNumber = "";
    batch = "";
    degree = "";
    rollNumber = "";
    for (let i = 15; i <= 26; i++) {
      registrationNumber += roughRegistrationNumber[i];
    }
    for (let i = 0; i <= 3; i++) {
      batch += registrationNumber[i];
    }
    for (let i = 5; i <= 7; i++) {
      degree += registrationNumber[i];
    }
    for (let i = 9; i <= 11; i++) {
      rollNumber += registrationNumber[i];
    }

    // fetch student's image source
    const images = document.body.getElementsByTagName("img");

    const registeredCoursesTable = document.getElementsByTagName("table");
    const table = registeredCoursesTable[0];

    table.removeAttribute("class");
    table.id = "newTable";
    table.setAttribute("border", "1");
    table.setAttribute("align", "center");
    table.setAttribute("cellpadding", "7px");

    const imageDiv = $("#divImageHolder");
    // imageDiv[0].removeAttribute("id")

    $(".container").hide();
    $("loom-companion-mv3").remove();

    // document.body.appendChild(imageDiv[0])

    const newContent =
      `
<nav class="navbar">
  <div class="navdiv">
    <div class="logo-div" style="display: inline-block; ">
    <img src="${images[0].src}" alt="CUI logo" height="70px" style="margin-left: 10px;" />
    </div>
    <ul>
      <li><a href="` +
      dashboardReference +
      `">Dashboard</a></li>
      <li><a href="` +
      registrationCardReference +
      `">Registration Card</a></li>
      <li><a href="` +
      feesReference +
      `">Fees</a></li>
      <li><a href="` +
      resultCardReference +
      `">Result Card</a></li>
      <li>
        <button class="profile-button"><a href="` +
      profileReference +
      `">Profile</a></button>
      </li>
      <li>
        <button href="" class="logout-button"><a href="` +
      logoutReference +
      `">Logout</a></button>
      </li>
    </ul>
  </div>
</nav>
<h1 align="center">Welcome, ${registrationNumber}</h1>
<div class="welcome-container">
  <div class="welcome-div">
    <h1 class="welcome-text">COMSATS University Islamabad, Sahiwal Campus</h1>
  </div>
</div>
<br>
<h2 style="text-align: center;">Registered Courses</h2>
`;

    const newElement = document.createElement("div");
    newElement.innerHTML = newContent;
    document.body.appendChild(newElement);
    console.log("Printing...");
    document.body.appendChild(table);
  }
});
