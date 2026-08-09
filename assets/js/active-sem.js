const CURRENT_SEMESTER = "sem5";

const semesterTabs = document.querySelectorAll(".semester-tab");
const semesterSections = document.querySelectorAll(".semester-grid");

function showSemester(semester) {

  semesterTabs.forEach(tab => {

    // Is this the semester currently being viewed?
    tab.classList.toggle(
      "active",
      tab.dataset.sem === semester
    );

    // Is this the actual current semester?
    tab.classList.toggle(
      "current-sem",
      tab.dataset.sem === CURRENT_SEMESTER
    );

  });

  semesterSections.forEach(section => {

    section.classList.toggle(
      "hidden",
      section.dataset.sem !== semester
    );

  });
}

// Show current semester when website opens
showSemester(CURRENT_SEMESTER);

// Allow switching between semesters
semesterTabs.forEach(tab => {

  tab.addEventListener("click", () => {
    showSemester(tab.dataset.sem);
  });

});