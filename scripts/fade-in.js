// Get all sections that fade in on scroll.
const fadeSections = document.querySelectorAll('.fade-in-section');

if (fadeSections.length > 0) {
	// For each fade-in section
	fadeSections.forEach(function(el) {
		// Function for handling intersection with user viewing window.
		function handleIntersect(entries, observer) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		}
		// Function to create observer and attach to the given fade-in section.
		function createObserver() {
			const options = {
				root: null,
				rootMargin: "0px",
				threshold: 0.5
			};
			const observer = new IntersectionObserver(handleIntersect, options);
			observer.observe(el);
		}

		// Call the function.
		createObserver();
	});
}