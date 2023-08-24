const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


const btnChangeColor = document.getElementById('btn-change-color')

const changeSpanColor = document.querySelector('.change-span-color')


btnChangeColor.addEventListener('click', () => generateColorRandom())

const generateColorRandom = () => {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        // hexColor += hex[0]
        hexColor = hexColor + hex[generateHexRandom()]
    }
    changeSpanColor.textContent = hexColor
    document.body.style.backgroundColor = hexColor
}

const generateHexRandom = () => {
    return Math.floor(Math.random() * hex.length)
}