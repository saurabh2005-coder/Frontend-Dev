document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "http://localhost:3004";
  const usersCount = document.getElementById("usersCount");
  const ordersCount = document.getElementById("ordersCount");
  const productsCount = document.getElementById("productsCount");
  const warning = document.getElementById("warning");

  function removeSkeleton() {
    [usersCount, ordersCount, productsCount].forEach(el => {
      el.classList.remove("skeleton");
    });
  }

  Promise.all([
    fetch(baseUrl + "/users"),
    fetch(baseUrl + "/orders"),
    fetch(baseUrl + "/products")
  ]).then(async ([usersRes, ordersRes, productsRes]) => {
    let hasError = false;

    if (!usersRes.ok || !ordersRes.ok || !productsRes.ok) {
      hasError = true;
    }

    if (!hasError) {
      const [users, orders, products] = await Promise.all([
        usersRes.json(),
        ordersRes.json(),
        productsRes.json()
      ]);
      usersCount.textContent = users.length;
      ordersCount.textContent = orders.length;
      productsCount.textContent = products.length;
    } else {
      warning.classList.remove("hidden");
      usersCount.textContent = "-";
      ordersCount.textContent = "-";
      productsCount.textContent = "-";
    }
  }).catch(() => {
    warning.classList.remove("hidden");
    usersCount.textContent = "-";
    ordersCount.textContent = "-";
    productsCount.textContent = "-";
  }).finally(() => {
    removeSkeleton();
  });
});
