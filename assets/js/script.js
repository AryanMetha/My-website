const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const toggle = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});


const scrollBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// ------------------------------
// Semester Tab Switching Logic
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const semesterTabs = document.querySelectorAll(".semester-tab");
  const semesterGrids = document.querySelectorAll(".semester-grid");

  // If page does not have semester tabs, exit safely
  if (!semesterTabs.length || !semesterGrids.length) return;

  semesterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const selectedSem = tab.dataset.sem;

      // Update active tab
      semesterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Show only matching semester grid
      semesterGrids.forEach(grid => {
        const isMatch = grid.dataset.sem === selectedSem;
        grid.classList.toggle("hidden", !isMatch);
      });
    });
  });
});
