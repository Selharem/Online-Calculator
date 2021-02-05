function display(a) {
    document.getElementById("output").value+=a
}

function solve() {
    let x = document.getElementById('output').value;
    let y = eval(x);
    document.getElementById('output').value = y;
}

function clearWindow() {
    document.getElementById("output").value = "" ;
}
