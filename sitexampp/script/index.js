$(document).ready(
  function(){
    console.log("Eusoulindo");
    $.ajax({
      url:"https://jsonplaceholder.typicode.com/posts",
      type:"GET",
      success:function(data){
        console.log(data)
      },
      error:function(data){

      }      
    })
  }
)
