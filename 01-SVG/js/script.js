const rectangle = document.querySelector('#rectangle');
let isRed = true;

rectangle.addEventListener('click', () => {
    isRed = !isRed;
    color = isRed ? 'red' : 'blue';
    rectangle.style.fill = color;
});

const donut = document.querySelector('#donut');
donut.addEventListener('nouseover', () => {
    donut.setAttribute('r', '70');
});