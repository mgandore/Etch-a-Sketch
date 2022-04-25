const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGrey = document.createElement('button');
const btnRGB = document.createElement('button');
const btnSize = document.createElement('button');
const btnWhite = document.createElement('button')
const buttonsContainer = document.querySelector('.buttons');


function resize() {
    btnSize.textContent = 'GRID SIZE'
    btnSize.addEventListener('click', () => {
        let userInput = prompt('Specify the new size of the grid\n(Values lower than 100 only!)')
        if (userInput === null || userInput < 1 || userInput > 100) {
            reset()
            createDivs(16)  
            greyColor()
            blackColor()
            rgbColor()
            whiteColor()
        } else {
            reset()
            createDivs(userInput)
            greyColor()
            blackColor()
            rgbColor()
            whiteColor()
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}
resize()



function createDivs(size) {
    for ( let i = 0; i < (size * size); i++) {
        const div = document.createElement('div');
        //div.style.border  = '1px solid';
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
    
}

createDivs(16);

function greyColor() {
    const boxes = container.querySelectorAll('.box')
    btnGrey.textContent = 'GREY'
    btnGrey.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let randomNum = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${randomNum}, ${randomNum}, ${randomNum})`
        }))
        
    })

    buttonsContainer.appendChild(btnGrey).classList.add('btn')
}

greyColor()


function blackColor() {
    const boxes = container.querySelectorAll('.box')
    btnBlack.textContent = 'BLACK';
    btnBlack.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = `black`;
        }))
        
    })

    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}

blackColor()


function rgbColor() {
    const boxes = container.querySelectorAll('.box')
    btnRGB.textContent = 'RGB';
    btnRGB.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 255)
            let g = Math.floor(Math.random() * 255)
            let b = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${r}, ${g}, ${b})`
        }))
        
    })

    buttonsContainer.appendChild(btnRGB).classList.add('btn')
}

rgbColor()

function whiteColor() {
    const boxes = container.querySelectorAll('.box')
    btnWhite.textContent = 'ERASER';
    btnWhite.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () =>{
            box.style.backgroundColor = 'white';
        }))
    })
    buttonsContainer.appendChild(btnWhite).classList.add('btn')
}
whiteColor()


function reset() {
    const boxes = container.querySelectorAll('.box')
    boxes.forEach( box => box.remove())
}

