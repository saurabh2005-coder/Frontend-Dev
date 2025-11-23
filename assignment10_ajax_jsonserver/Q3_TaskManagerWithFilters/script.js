$(document).ready(function () {
  const baseUrl = "http://localhost:3003/tasks";
  const $taskList = $("#taskList");
  const $filterSelect = $("#filterSelect");

  function renderTasks(tasks) {
    $taskList.empty();
    if (!tasks.length) {
      $taskList.append("<li>No tasks found.</li>");
      return;
    }

    tasks.forEach(task => {
      const li = $(`
        <li class="task-item">
          <div class="task-info">
            <span class="title"></span>
            <small>Priority: <span class="priority"></span></small>
          </div>
          <div>
            <label>
              <input type="checkbox" class="completedCheckbox" />
              Completed
            </label>
          </div>
        </li>
      `);

      li.find(".title").text(task.title);
      li.find(".priority").text(task.priority);
      const checkbox = li.find(".completedCheckbox");
      checkbox.prop("checked", task.completed);
      if (task.completed) {
        li.addClass("completed");
      }

      checkbox.on("change", function () {
        const newCompleted = $(this).is(":checked");
        // Optimistic UI
        task.completed = newCompleted;
        if (newCompleted) {
          li.addClass("completed");
        } else {
          li.removeClass("completed");
        }

        $.ajax({
          url: baseUrl + "/" + task.id,
          method: "PATCH",
          contentType: "application/json",
          data: JSON.stringify({ completed: newCompleted }),
          error: function () {
            // revert on error
            task.completed = !newCompleted;
            checkbox.prop("checked", task.completed);
            if (task.completed) {
              li.addClass("completed");
            } else {
              li.removeClass("completed");
            }
            alert("Failed to update task status.");
          }
        });
      });

      $taskList.append(li);
    });
  }

  function loadTasks() {
    const filter = $filterSelect.val();
    let query = "";

    if (filter === "Low" || filter === "Medium" || filter === "High") {
      query = "?priority=" + encodeURIComponent(filter);
    } else if (filter === "Completed") {
      query = "?completed=true";
    }

    $.ajax({
      url: baseUrl + query,
      method: "GET",
      success: function (data) {
        renderTasks(data);
      },
      error: function () {
        $taskList.html("<li>Error loading tasks.</li>");
      }
    });
  }

  $filterSelect.on("change", loadTasks);

  // Initial load
  loadTasks();
});
