
    

function press(sum) {
    document.getElementById("demo").value += sum;
  }

function Check(){
    val = document.getElementById("demo").value;
    const re = /^[\d\.]+([+\-*\/][\d\.]+)*$/;
    if(!val.match(re)){
        alert("not a valid number");
    }
}
    
