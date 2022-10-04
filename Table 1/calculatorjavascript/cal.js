
    

function press(sum) {
    document.getElementById("ans").value += sum;
  }

function Check(){
    val = document.getElementById("ans").value;
    const re = /^[\d\.]+([+\-*\/][\d\.]+)*$/;
    if(!val.match(re)){
        alert("not a valid number");
    }
    else{
        cal();
    }
}
function cal(){
   let element=document.getElementById("ans").value;
    const operand=element.split(/[+\-*\/]/);
    console.log(operand);
    const operator=element.split(/[\d]/).filter((x)=>x);
    console.log(operator);
    

}
