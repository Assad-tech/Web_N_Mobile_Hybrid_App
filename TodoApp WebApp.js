// TODO App
// Geting Back data from Firebase.

firebase.database().ref("Do This").on('child_added',function(data){
    console.log(data.val())
})

function addTodo(){
    var todo_item = document.getElementById("todo-task")

    // Now Working On FireBase Database to save data onLne. After the completion of WebApp in Functiins.

    var var_Database = firebase.database().ref("Do This")
    var key = var_Database.push().key;
    var todo_Obj ={
        value: todo_item.value,
        key: key
    }
    var_Database.child(key).set(todo_Obj)

    // // Li Items and Text inserted.
    // var li = document.createElement("li")
    // var liText = document.createTextNode(todo_item.value)
    // li.setAttribute("class","LItems")
    // li.appendChild(liText)

    // // Creating Edit Btn in Li
    // var editBtn = document.createElement("button")
    // var editText = document.createTextNode("Edit")
    // editBtn.setAttribute("class","btnEdit")
    // editBtn.setAttribute("onclick","editItem(this)")
    // editBtn.appendChild(editText)

    // // Creating Delete Btn in Li
    // var delBtn = document.createElement("button")
    // var delText = document.createTextNode("Delete")
    // //setAttribute = takes two items, 1 Attribute Name. 2 Attribute Value. 
    // delBtn.setAttribute("class","btnDel")
    // delBtn.setAttribute("onclick","deletItem(this)")
    // delBtn.appendChild(delText)

    // li.appendChild(editBtn)
    // li.appendChild(delBtn)
    // todo_list.appendChild(li)
    
    // todo_item.value = ""
}

// The LIST of all Items.
var todo_list = document.getElementById("todo-list")
// EDIT BUTTON
function editItem(para1){
    var edited = prompt("Enter value to Update:", para1.parentNode.firstChild.nodeValue)
    para1.parentNode.firstChild.nodeValue = edited
}
// DELETE BUTTON
function deletItem(para2){
    para2.parentNode.remove()
}
// DELETE ALL BUTTON
function delAll(){
    // todo_list.remove() Or this can b used as Well
    todo_list.innerHTML = ""
} 
// THe END..