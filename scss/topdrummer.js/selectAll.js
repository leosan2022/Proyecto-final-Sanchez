// seleccionar todo
function selectAll() {
    var obj = document.getElementsByClassName("selectOne");
    var btSelectAll = document.getElementById("allCheck").checked;
    for (inputCheck of obj) {
        inputCheck.checked = btSelectAll;
    }
}
