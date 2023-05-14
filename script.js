const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function Addtask(){
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span  = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
 
    }
    inputBox.value="";
    SaveData();
}
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      SaveData();
    } else if (e.target.tagName === "SPAN") {
      // Traverse up to the parent li and remove it
      e.target.parentElement.remove();
      SaveData();
    }
  });

  
    function SaveData(){
        localStorage.setItem("data", listContainer.innerHTML);
    }
    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showTask();
