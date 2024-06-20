let colorBox = document.querySelector('.color-container');
let mainBox = document.querySelector('.mainbox');
let color = '1234567890abcdef';
let pickerColor = [];
// let pelattesbox = document.querySelector('.box')
function colorGen() {
    // pickerColor = "#"
    for (let i = 0; i <= 3; i++) {
        pickerColor.push(pickerColor += color[Math.floor(Math.random() * color.length)]) ;
    }
}
for (let i = 0; i <= 11; i++) {
    mainBox.innerHTML += `<div class="box" onclick="colorGen();"><div class="innerbox"></div><h3 class="innertitle">lorem</h3></div>`;
}
for (let i = 0; i <= 19; i++) {
    colorBox.innerHTML += `<div class="colorbox${i}" onclick="colorGen();"><div><button onclick="copyColor();" class="copybtn">COPY</button></div></div>
    `;
}
// console.log(colorGen());
colorGen();



function copyColor() {
    navigator.clipboard.writeText(pickerColor);
    alert("copy hogaya")
}
// pelattesbox.style.backgroundColor = `${pickerColor}` ;

