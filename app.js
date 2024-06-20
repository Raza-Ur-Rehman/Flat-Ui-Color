let colorcontainer = document.querySelector('.color-container');
let colorBox = document.querySelector('.colorbox');
let mainBox = document.querySelector('.mainbox');
let innerBox = document.querySelector('.innerbox');
let color = '1234567890abcdef';
let pickerColor = "#";

for (let i = 0; i <= 5; i++) {
    let genColor = color[Math.floor(Math.random() * color.length)];
    pickerColor += genColor;
}
for (let i = 0; i <= 11; i++) {
    mainBox.innerHTML += `<div class="box";"><div class="innerbox" onclick="showColorBox();"></div><h3 class="innertitle">lorem</h3></div>`;
}
console.log(`${pickerColor}`);
innerBox.style.backgroundColor = `${pickerColor}`
function showColorBox() {
    for (let i = 0; i <= 19; i++) {
        colorcontainer.innerHTML += `<div class="colorbox"><divclass="colorbox"><button onclick="copyColor();" class="copybtn">COPY</button></div></div>
        `;
    }
}
colorBox.style.backgroundColor = `${pickerColor}`;



function copyColor() {
    navigator.clipboard.writeText(pickerColor);
    alert("copy hogaya")
}
// pelattesbox.style.backgroundColor = `${pickerColor}` ;

