let colorBox = document.querySelector('.color-container');
let mainBox = document.querySelector('.mainbox');
let color = '1234567890abcdef';
let pickerColor;
// let pelattesbox = document.querySelector('.box')
for (let i = 0; i <= 11; i++) {
    mainBox.innerHTML += `<div class="box"><div class="innerbox"></div><h3 class="innertitle">lorem</h3></div>`;
}
for (let i = 0; i <= 19; i++) {
    colorBox.innerHTML += `<div class="colorbox${i}" data-aos="fade-left" 
    data-aos-anchor="#example-anchor"
    data-aos-offset="500" 
    data-aos-duration="500"><div><button onclick="copyColor();" class="copybtn">COPY</button></div></div>
    `;
}
console.log(colorBox);
pickerColor = "#"
for (let i = 0; i <= 3; i++) {
    pickerColor += color[Math.floor(Math.random() * color.length)];
}

function colorGen() {
}

function copyColor() {
    navigator.clipboard.writeText(pickerColor);
    alert("copy hogaya")
}
colorGen();
// pelattesbox.style.backgroundColor = `${pickerColor}` ;

