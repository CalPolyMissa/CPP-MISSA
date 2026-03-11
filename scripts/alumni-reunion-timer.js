let alumniReunionTimer = setInterval(function() {
  // Get application open and close dates.
  let closeDate = new Date("Mar 20, 2026 23:59:59").getTime();
  let openDate = new Date("Mar 9, 2026 12:00:00").getTime();

  
  let page = location.href;
  let now = new Date().getTime();
  let distanceClose = closeDate - now;
  let distanceOpen = openDate - now;

  // Check if close date has passed.
  if (distanceClose < 0) {
    if (page.includes("alumni-reunion")) {
      document.getElementById("alumni-reunion-application").innerHTML = '<p class="has-text-link has-text-weight-bold is-size-5">Registration has closed, see you next year!</p>';
    } else {
      let button = document.getElementById("student-alumni-reunion-button");
      button.toggleAttribute("disabled", true)
      button.removeAttribute('href');
      button = document.getElementById("faculty-alumni-reunion-button");
      button.toggleAttribute("disabled", true)
      button.removeAttribute('href');
    }
    clearInterval(daTeamTimer);
  }
  // Else check if open date has passed.
  else if (distanceOpen < 0) {
    if (page.includes("alumni-reunion")) {
      // Calculations
      let days = Math.floor(distanceClose / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distanceClose % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distanceClose % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distanceClose % (1000 * 60)) / 1000);

      document.getElementById("alumni-reunion-application").innerHTML = '<h3 class="has-text-weight-bold is-size-5">Register now! Registration closes March 20th • ' + days + "d " + hours + "h "
      + minutes + "m " + seconds + "s" + '</h3><ul>' + 
      '<li><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=HqZLFuw5XU-J_6ofAKUhtKdmXfJcyBhPrPHL7gvMnLFUNTNCU0hWWlJFVDA2TzBGNzdDSjNDSDc0Uy4u" class="has-text-weight-bold is-size-5">Student Registration Form</a></li>'
      + '<li><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=HqZLFuw5XU-J_6ofAKUhtKdmXfJcyBhPrPHL7gvMnLFUMkFIMjJXOUFUTEZDMzBJSjlVOVpYWTBJMS4u" class="has-text-weight-bold is-size-5">Alumni/Faculty Registration Form</a></li></ul>';
    }
    else if (page.includes("get-involved")) {
      let button = document.getElementById("student-alumni-reunion-button");
      button.removeAttribute('disabled');
      button.href = "https://forms.office.com/Pages/ResponsePage.aspx?id=HqZLFuw5XU-J_6ofAKUhtKdmXfJcyBhPrPHL7gvMnLFUNTNCU0hWWlJFVDA2TzBGNzdDSjNDSDc0Uy4u";
      
      button = document.getElementById("faculty-alumni-reunion-button");
      button.removeAttribute('disabled');
      button.href = "https://forms.office.com/Pages/ResponsePage.aspx?id=HqZLFuw5XU-J_6ofAKUhtKdmXfJcyBhPrPHL7gvMnLFUMkFIMjJXOUFUTEZDMzBJSjlVOVpYWTBJMS4u";
    }
  }
}, 1000);
