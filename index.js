function price() {
    let fruit = document.getElementById("hoaqua").value;
    let element_label = document.getElementById("hoaqua");
    let fruit_label = element_label.options[element_label.selectedIndex].innerHTML;
    let price;
    console.log (fruit);
    switch (fruit) {
        case "oi":
        price = "20.000 VND/Kg";
        break;
        case "duahau":
        price = "20.000 VND/Kg";
        break;
        case "tao":
        price = "30.000 VND/Kg";
        break;
        case "xoai":
        price = "30.000 VND/Kg";
        break;
        case "cam":
        price = "40.000 VND/Kg";
        break;
        case "chomchom":
        price = "40.000 VND/Kg";
        break;
        case "mangcut":
        price = "50.000 VND/Kg";
        break;
        default:
        price = "khong co gia tri";
    }
    document.getElementById("result").innerHTML= fruit_label +  " có giá là " + price;
}