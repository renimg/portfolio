const nameChange1 = document.querySelector("#name-change-jor");
const nameChange2 = document.querySelector("#name-change-kim");

nameChange1.addEventListener("click", () =>{
    nameChange1.classList.add("hidden")
    nameChange2.classList.remove("hidden")
})

nameChange2.addEventListener("click", () =>{
    nameChange2.classList.add("hidden")
    nameChange1.classList.remove("hidden")
})