const cardElements = document.getElementsByClassName('s-card');

function handleMouseEnter(){
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.id="";
}

function addEventListernersToCards(){
    
    for(let i = 0; i < cardElements.length; i++){
        const card = cardElements[i];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListernersToCards, false);

function selectCarouselItem(selectedItem) {
    const item = selectedItem.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform= carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(item) - 1);
    const newTransform = transform.replace(rotateY[0],`rotateY(${rotateYDeg}deg)`)

    carousel.style.transform = newTransform;

    const activeButton = document.querySelector('.s-controller__button--active');
    activeButton.classList.remove('s-controller__button--active')
    selectedItem.classList.add('s-controller__button--active');
}