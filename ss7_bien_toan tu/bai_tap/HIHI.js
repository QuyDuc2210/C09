function Convert() {
    let celsius = parseFloat(document.getElementById("celsius").value)
    const FARENHEIT =( celsius / 5) *9 +32;
     document.getElementById("Result").innerText = FARENHEIT.toFixed(2) + "F";

}
