$(document).ready(function () {
  const baseUrl = "http://localhost:3001/products";
  const $searchBox = $("#searchBox");
  const $results = $("#results");
  const $loading = $("#loading");

  function renderProducts(products) {
    $results.empty();
    if (!products.length) {
      $results.append('<p class="no-results">No products found</p>');
      return;
    }

    products.forEach(p => {
      const card = `
        <div class="product-card">
          <img src="${p.image}" alt="${p.name}" />
          <div>
            <div><strong>${p.name}</strong></div>
            <div>₹${p.price}</div>
          </div>
        </div>
      `;
      $results.append(card);
    });
  }

  function searchProducts(query) {
    $loading.removeClass("hidden");
    $.ajax({
      url: baseUrl,
      method: "GET",
      data: { q: query },
      success: function (data) {
        renderProducts(data);
      },
      error: function () {
        $results.html('<p class="no-results">Error fetching products.</p>');
      },
      complete: function () {
        $loading.addClass("hidden");
      }
    });
  }

  // Initial load: show all products
  searchProducts("");

  let typingTimer;
  $searchBox.on("input", function () {
    const value = $(this).val();
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      searchProducts(value);
    }, 300);
  });
});
