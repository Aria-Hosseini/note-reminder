document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  });

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    
    let html = "";
    for (const user of json) {
      html += `
        <tr>
          <td>${user.userId}</td>
          <td>${user.id}</td>
          <td>
            <i class="material-icons green accent-3">border_color</i>
            <i class="material-icons red accent-4">delete_forever</i>
          </td>
        </tr>`;
    }
    document.querySelector('.userstable').innerHTML = html;
  })
  .catch((error) => console.error("Error fetching data:", error));




  

  document.addEventListener('alpine:init', () => {
    Alpine.data('dropdown', () => ({
        open: false,

        toggle() {
            this.open = ! this.open
        }
    }))
})