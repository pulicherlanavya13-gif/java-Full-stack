let greetings=["Good morning","Good afternoon","Good evening","Good night"];
let num=0;
function greet_afternoon(){
    let text=document.getElementById("greet");
    text.innerText=greetings[num];
    num+=1;
    if(num>3){
        num=0;
    }
}
function turn_on(){
    let light=document.getElementById("on");
    light.src="light_on.jpeg";
}
function turn_off(){
    let light=document.getElementById("on");
    light.src="light_off.jpeg";
}
function change_color(){
    let colour=document.getElementById("cap");
    colour.style.backgroundColor="yellow";
    let text=document.getElementById("Data");
    text.style.backgroundColor="white";
    let text2=document.getElementById("greet");
    text2.style.backgroundColor="white";

}