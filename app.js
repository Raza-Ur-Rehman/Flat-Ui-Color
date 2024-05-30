let colorBox = document.querySelector('.color-container');
let mainBox = document.querySelector('.mainbox');
let color = '1234567890abcdef';
let pickerColor = '';
// let pelattesbox = document.querySelector('.box')
for (let i = 0; i <= 11; i++) {
    mainBox.innerHTML += `<div class="box"><div class="innerbox"></div><h3 class="innertitle">lorem</h3></div>`;
}
for (let i = 0; i <= 19; i++) {
    colorBox.innerHTML += `<div class="colorbox"><button onclick="copyColor();" class="copybtn">COPY</button></div>`;
}


console.log(mainBox);

function colorGen() {
    pickerColor = "#"
    for (let i = 0; i <= 19; i++) {
        pickerColor += color[Math.floor(Math.random() * color.length)];
    }
}
function copyColor() {
    navigator.clipboard.writeText();
}

// pelattesbox.style.backgroundColor = `${pickerColor}` ;

