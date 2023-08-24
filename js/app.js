
const btnChangeColor = document.getElementById('btn-change-color')
btnChangeColor.addEventListener('click', () => generateColorRandom())

const colorsPalette = ['green', 'red', 'rgba(133,122,200, 0.1)', 'f15025'];

const changeSpanColor = document.querySelector('.change-span-color')



const generateColorRandom = () => {

    const getRandomColor = Math.floor(Math.random() * colorsPalette.length)
    document.body.style.backgroundColor = colorsPalette[getRandomColor];

    changeSpanColor.textContent = colorsPalette[getRandomColor]
} 