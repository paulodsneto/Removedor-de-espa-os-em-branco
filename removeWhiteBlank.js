function getString () {
    let str = document.querySelector('input').value 
    str = str.replace(/\s/g, '');
    document.getElementById("newText").innerHTML = str;
}
