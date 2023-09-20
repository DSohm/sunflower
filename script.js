const petals = 40;
const angle = 360 / petals;
const radius = 100;

for (let i = 0; i < petals; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.transform = `rotate(${angle * i}deg) translateX(${radius}px) rotate(-20deg)`;
    document.querySelector('.sunflower').appendChild(petal);
}
