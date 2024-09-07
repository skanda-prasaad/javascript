async function start() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    console.log(data);
    createBreedList(data.message);
}

start();

function createBreedList(breedList) {
    document.getElementById('breed').innerHTML = `
    <select onchange="breedImage(this.value)">
        <option>Choose a dog</option>
        ${Object.keys(breedList).map(function(breed) {
            return `<option>${breed}</option>`;
        }).join('')}
    </select>
    `;
}

async function breedImage(breed) {
    if (breed != "Choose a dog") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const data = await response.json();
        slideShow(data.message);
    }
}

function slideShow(images) {
    let currentPosition = 0;
    const slidesContainer = document.querySelector('.slides');

    slidesContainer.innerHTML = `
        <div class="slide" style="background-image: url('${images[0]}')"></div>
        <div class="slide" style="background-image: url('${images[1]}')"></div>
    `;
    
    currentPosition = 2; 
    setInterval(nextSlide, 1500);

    function nextSlide() {

        slidesContainer.insertAdjacentHTML("beforeend", `<div class="slide" style="background-image: url('${images[currentPosition]}')"></div>`);

        setTimeout(function () {
            document.querySelector('.slide').remove();
        }, 1000);

        currentPosition++;
        if (currentPosition >= images.length) {
            currentPosition = 0;
        }
    }
}
