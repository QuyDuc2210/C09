function chuVi() {
    let Radius = parseFloat(document.getElementById("Radius").value);
    const PI = Math.PI;
    let Perimeter = (2*PI *Radius);
    document.getElementById("Result").innerText = Perimeter.toFixed(2);}