class Carousel {
    constructor (carousel){
        this.carousel = carousel;
        this.images = document.querySelectorAll('.carousel img');
        console.log(this.images);
        this.leftArrow = document.querySelector('.left-button');
        this.rightArrow = document.querySelector('.right-button');
        this.images[0].style.display = 'block';
        this.leftArrow.addEventListener('click', () => this.moveLeft());
        this.rightArrow.addEventListener('click', () => this.moveRight());
        this.displayIndex = 0;
    }
    moveRight(){
        images.forEach(image => image.style.display ="none");
        if (this.displayIndex === images.length-1){
            this.displayIndex = 0;
        } else {
            this.displayIndex ++
        }
        this.images[this.displayIndex].style.display = 'block'
    }
    moveLeft(){
        images.forEach(image => image.style.display ="none");
        if (this.displayIndex === 0){
            this.displayIndex = images.length-1;
        } else {
            this.displayIndex --
        }
        this.images[this.displayIndex].style.display = 'block'
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));
let images = document.querySelectorAll('.carousel img')
console.log(images);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

