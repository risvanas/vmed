document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded. Setting up observers...");
  // Create IntersectionObserver function
  function createObserver(targetClass, rootMargin) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Element in view: ${entry.target.className}`);
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { rootMargin }
    );
    document.querySelectorAll(targetClass).forEach((el) => observer.observe(el));
  }
  // Set up observers
  createObserver(".animate-on-scroll", "-17% 0px");
  createObserver(".animate-on-new", "-5% 0px");
  createObserver(".thumbnail-container", "-17% 0px"); // Ensure images get observed too
  createObserver(".jkit-meta-date.icon-position-before", "-15% 0px"); // Observe date titles
  createObserver(".jkit-post-title", "-15% 0px"); // Observe text titles
  createObserver(".jkit-post-excerpt", "-15% 0px"); // Observe text titles
  createObserver(".jkit-readmore", "-15% 0px"); // Observe text titles
  console.log("Observers set up.");
    
});