function increment(){
    var i = document.getElementById('invalue');
    if (i.value <5) {
      i.value++;
      prices(); 
    }
    }
  
  

  
function decrement(){
      var i = document.getElementById('invalue');
      if (i.value> 0) {
        i.value--;
        prices(); 
      }
    }
  

    
  
function prices() {
      var quantity = parseInt(document.getElementById("invalue").value) ;
      var price = document.getElementById("price").getAttribute("data-price") ;
      var res = quantity * price;
      document.getElementById("price2").innerHTML = "Total Amount: RS " + res;
    }