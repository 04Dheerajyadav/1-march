function sum(){
   var n1 = document.getElementById("first");
   var n1_data = parseInt(n1.value);
   console.log(n1_data);
   var n2 = document.getElementById("second");
   var n2_data = parseInt(n2.value);
   console.log(n2_data);
   var n3 =  n1_data + n2_data ;
   console.log(n3);
   document.getElementById("result").value = n3 ;
}

