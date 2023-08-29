const output = document.querySelector("#display");

function display(num){
    output.value += num;
}
function calculate(){
    try{
    output.value = eval(output.value);
    }
    catch(err){
        output.value = 'invalid';
    }
}

function del(){
    output.value = output.value.slice(0,-1);
}
function AC(){
    output.value = "";
}