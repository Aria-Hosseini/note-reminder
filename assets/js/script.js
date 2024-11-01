document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
      duration: 200, 
      dist: -5,  
      shift: 5,   
      padding: 0,   
      numVisible: 1, 
      indicators: true, 
      fullWidth: false, 
    });
  });


  console.log(1);
  console.log(2);


  new Promise(
    function(a,b){

      setTimeout(function(){
        console.log(3);
        a("ok")
      },2000)

    }
  ).then(
    function(response){
      setTimeout(function(){
        console.log(4);
      },2000)
    }

  )