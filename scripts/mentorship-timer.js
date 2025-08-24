let mentorshipTimer = setInterval(function() {
  // Get application open and close dates.
  let closeDate = new Date("Sep 11, 2025 23:59:59").getTime();
  let openDate = new Date("Aug 28, 2025 00:00:00").getTime();

  let now = new Date().getTime();
  let distanceClose = closeDate - now;
  let distanceOpen = openDate - now;

  // Check if close date has passed.
  if (distanceClose < 0) {
    let button = document.getElementById("mentorship-button");
    button.toggleAttribute("disabled", true)
    button.removeAttribute('href');
    clearInterval(mentorshipTimer);
  }
  // Else check if open date has passed.
	else if (distanceOpen < 0) {
    let button = document.getElementById("mentorship-button");
    button.removeAttribute('disabled');
    button.href = "https://tinyurl.com/4u8764mc";
  }
}, 1000);
