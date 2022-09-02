function addBtnClick(){
    let input = document.getElementsByClassName("input")[0];
    let value = input.value.trim();
    if(!value){
        alert("please enter value");
        return;
    }
    let item = document.createElement("li");
    item.innerHTML = value;
    let removeBtn = document.createElement("span");
    removeBtn.innerHTML = "X";
    removeBtn.className = "removeBtn";
    item.append(removeBtn);
    let list = document.getElementById("list");
    list.append(item);
    input.value = "";
}

function enterPress(){
  if(event.key === "Enter"){
    addBtnClick();
  }
}

function removeBtnClick(){
    let { target } = event;
    if(target.className === "removeBtn"){
        const item = target.parentNode;
        let list = document.getElementById("list");
        list.removeChild(item);
    }
}