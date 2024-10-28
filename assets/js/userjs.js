document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  });

  setTimeout(function(){
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));

  let html =""

  for(const user of json){

    html = html + ` <tr>
                  <td>${user.id}</td>
                  <td>${user.userId}</td>
                  <td><i class="material-icons green accent-3">border_color</i><i class="material-icons red accent-4">delete_forever</i></td>
                </tr>`
         
  }
  
  document.querySelector('.userstable').innerHTML = html






  },2000)
  

    