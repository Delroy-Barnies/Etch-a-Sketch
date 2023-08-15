const grid = document.getElementById('sketch_body');
let blockColor = 'black';

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let color = document.getElementById("jscolor");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  grid.replaceChildren();
  resetCanvas(slider.value);
}

resetCanvas(slider.value);

color.onchange = function () {
    blockColor = color.value;
}

document.getElementById('black_btn').onclick = function () {
    blockColor = 'black';
    clearCanvas();
}

document.getElementById('rainbow_btn').onclick = function () {
    grid.replaceChildren();
    resetRgxCanvas(slider.value);
}

document.getElementById('clear_btn').onclick = function () {
    clearCanvas();
}

document.getElementById('darken_btn').onclick = function () {
    blockColor = 'black';
    grid.replaceChildren();
    resetDarkenCanvas(slider.value);
}

function clearCanvas(){
    grid.replaceChildren();
    resetCanvas(slider.value);
}

function resetCanvas(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {

            const div = document.createElement('div');
            let dimension = 35 / size;
            let style = `background: aliceblue; width: ${dimension}em; height: ${dimension}em;`;
            div.setAttribute('style', style);

            div.addEventListener('mouseenter', () => { div.style.backgroundColor = blockColor; });
            grid.appendChild(div);
        }
    }
}

function resetRgxCanvas(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {

            const div = document.createElement('div');
            let dimension = 35 / size;
            let style = `background: aliceblue; width: ${dimension}em; height: ${dimension}em;`;
            div.setAttribute('style', style);

            div.addEventListener('mouseenter', () => {
                blockColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                div.style.backgroundColor = blockColor;
            });
            grid.appendChild(div);
        }
    }
}

function resetDarkenCanvas(size) {
    let opacity = 0;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {

            const div = document.createElement('div');
            let dimension = 35 / size;
            let style = `background: aliceblue; width: ${dimension}em; height: ${dimension}em;`;
            div.setAttribute('style', style);

            div.addEventListener('mouseenter', () => {
                div.style.backgroundColor = blockColor;
                div.style.opacity = opacity;
                opacity += 0.1;

                if(opacity >= 1){
                    opacity = 0;
                }
            });
            grid.appendChild(div);
        }
    }
}

