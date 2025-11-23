document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "http://localhost:3005/timetable";
  const daySelect = document.getElementById("daySelect");
  const container = document.getElementById("timetableContainer");

  function renderTimetable(classes) {
    container.innerHTML = "";
    if (!classes.length) {
      container.innerHTML = "<p>No classes today.</p>";
      return;
    }

    classes.forEach(cls => {
      const div = document.createElement("div");
      div.className = "class-card";
      div.innerHTML = `
        <h3>${cls.subject}</h3>
        <p>Faculty: ${cls.faculty}</p>
        <p>Time: ${cls.time}</p>
      `;
      container.appendChild(div);
    });
  }

  function loadTimetable() {
    const day = daySelect.value;
    fetch(baseUrl + "?day=" + encodeURIComponent(day))
      .then(res => res.json())
      .then(data => {
        renderTimetable(data);
      })
      .catch(() => {
        container.innerHTML = "<p>Error loading timetable.</p>";
      });
  }

  daySelect.addEventListener("change", loadTimetable);

  // Initial load
  loadTimetable();
});
