function makeOL(array){
    let listItem = document.querySelector("ul")
    for (let value of array) {
        listValue = document.createElement("li");
        listValue.textContent = value;
        listItem.appendChild(listValue);
    }
}
    
var year, great_years = [];
for (year = 2014; year <= 2016; year++){
    correct = confirm(year + " was great for you?")
    if (!correct) continue;
        great_years.push(year)
}    
alert("Your great years were: " + great_years);