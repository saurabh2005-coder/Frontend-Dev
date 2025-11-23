document.addEventListener("DOMContentLoaded", function () {
  const baseUrl = "http://localhost:3002/employees";
  const tbody = document.getElementById("employeeBody");
  const message = document.getElementById("message");

  function setMessage(text, isError = false) {
    message.textContent = text;
    message.style.color = isError ? "red" : "green";
  }

  function createRow(emp) {
    const tr = document.createElement("tr");
    tr.dataset.id = emp.id;

    const tdId = document.createElement("td");
    tdId.textContent = emp.id;

    const tdName = document.createElement("td");
    tdName.textContent = emp.name;

    const tdStatus = document.createElement("td");
    tdStatus.className = emp.status === "active" ? "status-active" : "status-inactive";
    tdStatus.textContent = emp.status;

    const tdToggle = document.createElement("td");
    const btn = document.createElement("button");
    btn.textContent = "Toggle";
    btn.addEventListener("click", function () {
      toggleStatus(emp, tdStatus);
    });
    tdToggle.appendChild(btn);

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdStatus);
    tr.appendChild(tdToggle);

    return tr;
  }

  function fetchEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", baseUrl);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        tbody.innerHTML = "";
        data.forEach(emp => {
          tbody.appendChild(createRow(emp));
        });
      } else {
        setMessage("Failed to load employees.", true);
      }
    };
    xhr.onerror = function () {
      setMessage("Network error while loading employees.", true);
    };
    xhr.send();
  }

  function toggleStatus(emp, statusCell) {
    const originalStatus = emp.status;
    const newStatus = emp.status === "active" ? "inactive" : "active";

    // Optimistically update UI
    emp.status = newStatus;
    statusCell.textContent = newStatus;
    statusCell.className = newStatus === "active" ? "status-active" : "status-inactive";
    setMessage("Updating status...");

    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", baseUrl + "/" + emp.id);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        setMessage("Status updated successfully.");
      } else {
        // Revert UI
        emp.status = originalStatus;
        statusCell.textContent = originalStatus;
        statusCell.className = originalStatus === "active" ? "status-active" : "status-inactive";
        setMessage("Failed to update status. Reverted changes.", true);
      }
    };
    xhr.onerror = function () {
      emp.status = originalStatus;
      statusCell.textContent = originalStatus;
      statusCell.className = originalStatus === "active" ? "status-active" : "status-inactive";
      setMessage("Network error while updating. Reverted changes.", true);
    };
    xhr.send(JSON.stringify({ status: newStatus }));
  }

  fetchEmployees();
});
