let itcTimer = setInterval(function() {
  // Get application open and close dates.
  let closeDate = new Date("Mar 29, 2026 23:59:59").getTime();
  let openDate = new Date("Mar 9, 2026 12:00:00").getTime();

  
  let page = location.href;
  let now = new Date().getTime();
  let distanceClose = closeDate - now;
  let distanceOpen = openDate - now;

  // Check if close date has passed.
  if (distanceClose < 0) {
    if (page.includes("ITC")) {
      document.getElementById("itc-application").innerHTML = '<p class="has-text-link has-text-weight-bold is-size-5">Applications have closed, see you next year!</p>';
    } else {
      let button = document.getElementById("itc-button");
      button.toggleAttribute("disabled", true)
      button.removeAttribute('href');
    }
    clearInterval(daTeamTimer);
  }
  // Else check if open date has passed.
  else if (distanceOpen < 0) {
    if (page.includes("ITC")) {
      // Calculations
      let days = Math.floor(distanceClose / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distanceClose % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distanceClose % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distanceClose % (1000 * 60)) / 1000);

      document.getElementById("itc-application").innerHTML = '<a href="https://docs.google.com/forms/d/e/1FAIpQLSeycrRiOAHH57_j4lJpQyWRz9c0VmesLf8GkdAX3CMkopbPeQ/viewform" class="has-text-weight-bold is-size-5">Apply now! Due March 29th • ' + days + "d " + hours + "h "
      + minutes + "m " + seconds + "s" + '</a>';
    }
    else if (page.includes("get-involved")) {
      let button = document.getElementById("itc-button");
      button.removeAttribute('disabled');
      button.href = "https://docs.google.com/forms/d/e/1FAIpQLSeycrRiOAHH57_j4lJpQyWRz9c0VmesLf8GkdAX3CMkopbPeQ/viewform";
    }
  }
  else if (page.includes("ITC")) {
    // Calculations
    let days = Math.floor(distanceOpen / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distanceOpen % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distanceOpen % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distanceOpen % (1000 * 60)) / 1000);

    document.getElementById("itc-application").innerHTML = '<p class="has-text-link has-text-weight-bold is-size-5">Applications open in ' + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s</p>";
  }
}, 1000);
