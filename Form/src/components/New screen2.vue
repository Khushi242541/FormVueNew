<template>
    
</template>
<script>
// Assuming an API endpoint: /api/items?page=1&limit=10
import { new_screen } from '@vue/composition-api'

export default new_screen({
    setup() {
        // Assuming an API endpoint: /api/items?page=1&limit=10
async function fetchData(page, limit) {
  const response = await fetch(`/api/items?page=${page}&limit=${limit}`);
  const data = await response.json();
  return data;
}

async function displayPage(page, limit) {
  const data = await fetchData(page, limit);
  // Update the content container with data[items]
  // Update the pagination controls with data[totalPages]
}

// Initial display
let currentPage = 1;
const itemsPerPage = 10;
displayPage(currentPage, itemsPerPage);

// Event listeners for pagination controls
document.getElementById('nextPageButton').addEventListener('click', () => {
  currentPage++;
  displayPage(currentPage, itemsPerPage);
});

document.getElementById('prevPageButton').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage, itemsPerPage);
  }
});
    },
})
</script>