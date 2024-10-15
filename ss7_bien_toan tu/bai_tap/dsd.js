<script>
    function add() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = num1 + num2;

    document.getElementById("ketQua").innerHTML = "Kết quả là: " + result;

}

    function sub() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = num1 - num2;

    document.getElementById("ketQua").innerHTML = "Kết quả là: " + result;

}

    function multi (){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = num1 * num2;

    document.getElementById("ketQua").innerHTML = "Kết quả là: " + result;

}

    function division (){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = num1 / num2;

    document.getElementById("ketQua").innerHTML = "Kết quả là: " + result;
}