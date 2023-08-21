
let outputScreen = document.getElementById("output-screen");
let cl = document.getElementById("clear");

function display(num){
    outputScreen.value += num;
}
function calculate(){
    if(outputScreen.value === ""){
        outputScreen.value = "";
    }
   else
   {
        try{
            outputScreen.value = eval(outputScreen.value);
            }
        catch(err)
        {
             outputScreen.value = "Invalid";
        }
   }
}

cl.addEventListener('click',function(e){
        outputScreen.value = "";
})

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}