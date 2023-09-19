const input=document.querySelector(".input input");
const btn=document.querySelector("button")
const ul=document.querySelector("ul")
btn.addEventListener("click",(e)=>{
    let str=/[a-zA-z0-9]/;
    if(!str.test(input.value))
    alert("Enter your task")
else 
addList(input.value);
input.innerHTML="";

});
input.addEventListener("keyup",(e1)=>{
        if(e1.key==="Enter"){
            let str=/[a-zA-z0-1]/;
             if(!str.test(input.value))
                alert("Enter your task")
            else 
                addList(input.value);
            }
            saveTask();
            // input.value="";
        });
ul.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI")
        e.target.classList.toggle("check")
    else if(e.target.tagName==="SPAN")
        e.target.parentElement.remove();
    saveTask();
})

function addList(input){
    const li=document.createElement("li")
    li.innerHTML=input;
    const span= document.createElement("span")
    span.innerHTML="&#10060";
    ul.appendChild(li);
    li.appendChild(span)
    saveTask();
    // showTask();
    
    
}
function saveTask(){
    localStorage.setItem("data",ul.innerHTML)
}
function showTask(){
   ul.innerHTML= localStorage.getItem("data")
}
showTask();
