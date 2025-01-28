const heading = document.querySelector("h1");
heading.textContent = "Welcome to india";

const newDiv = document.createElement("div");
newDiv.textContent = "My name is Rohit !";
document.body.appendChild(newDiv);

const button = document.getElementById("mybutton");
button.addEventListener("click" , function(){
    alert("click this button ");
});  

const btn = document.querySelector("#btn");

btn.onclick = (etn) =>{
  console.log(etn.type);
  console.log(etn);
  console.log(etn.target);
  console.log(etn, etn.clintX, etn.clintY);
} 

// how to work events 

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click" , () => {
  console.log("Called btn2 first : ");
});

const btn_second = () => {
  console.log("Remove btn 2 : ");
}

btn2.addEventListener("click", btn_second);

btn2.addEventListener("click", () => {
  console.log("Called btn3 third : ");
});

btn2.removeEventListener("click", btn_second);
