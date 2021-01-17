//alert("Connected!");

//CORRECT!!
//$("span").on("click", function() {
//    alert($(this).text("You clicked!"));
//});


//CORRECT!!
$("span").on("click", function () {
    alert("You clicked!");
});

//Selectors
document.querySelector("form").addEventListener("submit", handleSubmitForm);

function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector("input");
    if (input.value != " ")
        addNew();
    input.value = " ";
}


function addNew(addNew) {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerHTML = `
        <span class="addNew-item">${addNew}</span>
        <button type=
        "submit"></button>
    `;
    li.classList.add("addNew-item");
    ul.appendChild(li);
}