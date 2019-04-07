"use strict"

const exChat = document.querySelector(".extendable-chat")
const mainChat = document.querySelector(".main-chat")
const title = document.querySelector(".title")
const input = document.querySelector(".inputs input")
const sendButton = document.querySelector(".send")
const closeIcon = document.querySelector(".close-icon")
closeIcon.addEventListener("click",()=>{
    mainChat.classList.add("d-none");
    exChat.classList.add("d-flex");
    exChat.classList.remove("d-none");
})
exChat.onclick = function(){
    mainChat.classList.remove("d-none");
    exChat.classList.remove("d-flex");
    exChat.classList.add("d-none");
}
input.onkeydown = function(e) {
    if (e.keyCode == 13) {
        myFunc()
    }
}
sendButton.onclick = function(){
    myFunc();
    input.focus();
}
// Created common func for when clicked send button and when pressed enter
function myFunc() {
    const reply = document.createElement("div")
    const icon = document.createElement("img")
    //if first letter upper then append this value like a service reply
    if (input.value[0] == input.value[0].toUpperCase()) {
        reply.classList = "reply"
        icon.src = "download.png"
        reply.appendChild(icon);
        reply.append(input.value)
        // title.appendChild(reply);
    }
    //else like a costumer reply
    if (input.value[0] == input.value[0].toLowerCase()) {
        icon.src = "costumer.jpg"
        reply.classList = "reply text-right"
        reply.append(input.value);
        reply.appendChild(icon);
    }
    title.appendChild(reply);
    //when clicked a img added or removed selected classes && deleted divs with selected class
    icon.onclick = function() {
        const deleteSelected = document.querySelector(".delete")
        reply.classList.toggle("selected")
        for (let i = 0; i < title.children.length; i++) {
            if (title.children[i].classList.contains("selected")) {
                deleteSelected.classList.remove("d-none");
                deleteSelected.classList.add("d-flex");
                deleteSelected.addEventListener("click", function () {
                    if(reply.classList.contains("selected"))reply.remove();
                    deleteSelected.classList.remove("d-flex");
                    deleteSelected.classList.add("d-none");
                })
                break
            }
            else if(!title.children[i].classList.contains("selected")){
                deleteSelected.classList.remove("d-flex");
                deleteSelected.classList.add("d-none");
            }
        }
    }
    title.scrollTo(0, title.scrollHeight);
    input.value = ""
}