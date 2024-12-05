const cardElements = document.getElementsByClassName('s-card');

function handleMouseEnter(){
    this.classList.add('s-card--hovered');
}

function handleMouseLeave() {
    this.classList.remove('s-card--hovered')
}

function addEventListernersToCards(){
    
    for(let i = 0; i < cardElements.length; i++){
        const card = cardElements[i];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListernersToCards, false);