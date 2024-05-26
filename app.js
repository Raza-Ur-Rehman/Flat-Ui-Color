let color = '1234567890abcdef';
let pickerColor = ['#'];
let mainBox = document.querySelector('.mainbox')
let pelattesbox = mainBox.innerHTML = `<div class="color"></div>`;
function colorGen() {
    for (let i = 0; i <= 3; i++) {
        pickerColor.push += color[Math.floor(Math.random() * color.length)];
        
    }
    console.log(pickerColor);
}

// pelattesbox.style.backgroundColor = `${'#' + pickerColor}` ;

