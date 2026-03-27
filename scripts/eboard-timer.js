let eboardTimer = setInterval(function() {
  // Get application open and close dates.
  let closeDate = new Date("Mar 29, 2026 23:59:59").getTime();
  let openDate = new Date("Feb 6, 2026 00:00:00").getTime();

  let now = new Date().getTime();
  let distanceClose = closeDate - now;
  let distanceOpen = openDate - now;

  // Check if close date has passed.
  if (distanceClose < 0) {
    let button = document.getElementById("eboard-button");
    button.toggleAttribute("disabled", true)
    button.removeAttribute('href');
    clearInterval(eboardTimer);
  }
  // Else check if open date has passed.
	else if (distanceOpen < 0) {
    let button = document.getElementById("eboard-button");
    button.removeAttribute('disabled');
    button.href = "https://forms.gle/rNoEW1iZAs4qqqpc6";
  }
}, 1000);
