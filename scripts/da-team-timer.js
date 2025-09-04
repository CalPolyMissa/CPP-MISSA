let daTeamTimer = setInterval(function() {
  // Get application open and close dates.
  let closeDate = new Date("Sep 5, 2025 23:59:59").getTime();
  let openDate = new Date("Aug 22, 2025 12:00:00").getTime();

  
  let page = location.href;
  let now = new Date().getTime();
  let distanceClose = closeDate - now;
  let distanceOpen = openDate - now;

  // Check if close date has passed.
  if (distanceClose < 0) {
    if (page.includes("DA-team")) {
      document.getElementById("da-team-application").innerHTML = '<p class="has-text-link has-text-weight-bold is-size-5">Applications have closed, see you next year!</p>';
    } else {
      let button = document.getElementById("da-team-button");
      button.toggleAttribute("disabled", true)
      button.removeAttribute('href');
    }
    clearInterval(daTeamTimer);
  }
  // Else check if open date has passed.
  else if (distanceOpen < 0) {
    if (page.includes("DA-team")) {
      // Calculations
      let days = Math.floor(distanceClose / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distanceClose % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distanceClose % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distanceClose % (1000 * 60)) / 1000);

      document.getElementById("da-team-application").innerHTML = '<a href="https://forms.gle/dkqsvc49Vht2MtFB7" class="has-text-weight-bold is-size-5">Apply now! Due Sep 5th • ' + days + "d " + hours + "h "
      + minutes + "m " + seconds + "s" + '</a>';
    }
    else if (page.includes("get-involved")) {
      let button = document.getElementById("da-team-button");
      button.removeAttribute('disabled');
      button.href = "https://forms.gle/dkqsvc49Vht2MtFB7";
    }
  }
  else if (page.includes("DA-team")) {
    // Calculations
    let days = Math.floor(distanceOpen / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distanceOpen % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distanceOpen % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distanceOpen % (1000 * 60)) / 1000);

    document.getElementById("da-team-application").innerHTML = '<p class="has-text-link has-text-weight-bold is-size-5">Applications open in ' + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s</p>";
  }
}, 1000);
