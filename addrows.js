/*function insert_Row() {
    var x = document.getElementById('sampleTable').insertRow(0);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    y.innerHTML="New Cell1";
    z.innerHTML="New Cell2";
}*/

function insertListItem() {
    var newItem = document.createElement("li"); 
    var x = document.getElementById("sampleList");
    newItem.innerHTML = prompt("Enter new list item");
    x.appendChild(newItem);
}

/*function insertListItemBut() {
    var newItem = document.createElement("li"); 
    var x = document.getElementById("sampleList");
    newItem.innerHTML = prompt("Enter new list item");
    x.appendChild(newItem);
}*/
