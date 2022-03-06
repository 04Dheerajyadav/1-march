function check_pass() {
    var pass_data = document.getElementById("pass");
    var new_pass_data = pass_data.value;
    console.log(new_pass_data);
    var con_pass_data = document.getElementById("con_pass");
    var new_con_pass_data = con_pass_data.value;
    console.log(new_con_pass_data);
    if(new_pass_data == new_con_pass_data)
      {
        document.getElementById("conf").innerText = "Ok";
      }
    else{
        document.getElementById("conf").innerText = "Error";
      }
}