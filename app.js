// import functions

// reference needed DOM elements
const catImage = document.getElementById('cat-image');
const catSound = document.getElementById('cat-sound');

const dogImage = document.getElementById('dog-image');
const dogSound = document.getElementById('dog-sound');

const horseImage = document.getElementById('horse-image');
const horseSound = document.getElementById('horse-sound');

// set event listeners  
        catImage.addEventListener('click', () => {
            catSound.play();
            catClicks = catClicks + 1;
        console.log('cat clicks is now', catClicks);
        });

        dogImage.addEventListener('click', () => {
            dogSound.play();
            dogClicks = dogClicks + 1;
        console.log('dog clicks is now', dogClicks);
        });

        horseImage.addEventListener('click', () => {
            horseSound.play();
            horseClicks = horseClicks + 1;
        console.log('horse clicks is now', horseClicks);
        });

    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
