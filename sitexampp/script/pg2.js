$(document).ready(
    function(){
      var Params = new URLSearchParams(location.search);
  
      var opcao = Params.get("opcao");
         alert(opcao);
    }
  )