let toan=parseFloat(prompt('Điểm toán'));
let ly = parseFloat(prompt('Điểm lý'))
let hoa=parseFloat(prompt('Điểm hóa'))
function avgscore() {
    return (toan+ly+hoa)/3;

} alert("Điểm trung bình"+avgscore())