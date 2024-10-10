const imagesData  = [['https://media.giphy.com/media/3oD3Yrwt1gRDhiQZ5S/giphy.gif', 'Who am I'],
    ['https://media.giphy.com/media/3oD3YiCUVULluiN9WU/giphy.gif', 'Happy sausage'],
    ['https://media.giphy.com/media/3oD3YLTOkztY9xfiQE/giphy.gif', 'Stripes'],
    ['https://media.giphy.com/media/l3UcCohhJm3KEhTWw/giphy.gif', 'Tornadoes'],
    ['https://media.giphy.com/media/3oD3YiL23DDll9bAWc/giphy.gif', 'Walking squares'],
    ['https://media.giphy.com/media/26ufjJgVk087WtjEI/giphy.gif', 'Cubes'],
    ['https://media.giphy.com/media/l3Ucp4ROadmpk7aVy/giphy.gif', 'Hairy'],
    ['https://media.giphy.com/media/3oD3YOacdm13voG59K/giphy.gif', 'The Beanstalk'],
    ['https://media.giphy.com/media/l3UcDs1plijcJfOzC/giphy.gif', 'Tiles'],
    ['https://media.giphy.com/media/3oD3YnBHaVfd0rSY1i/giphy.gif', 'In and Out'],
    ['https://media.giphy.com/media/26ACqq4q3I8UDF3IA/giphy.gif', 'Switching points']]

function zoomCard(card) {
    card.classList.add('zoomed');
    document.getElementById('overlay').style.display = 'block';
}

function unzoomCard() {
    const zoomedCard = document.querySelector('.card.zoomed');
    if (zoomedCard) {
        zoomedCard.classList.remove('zoomed');
        document.getElementById('overlay').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    generateCards(imagesData);

    // Add click event listeners to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click from bubbling up to the body
            zoomCard(card);
        });
    });

    // Escape key to unzoom
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            unzoomCard();
        }
    });

    // Click on overlay to unzoom
    document.getElementById('overlay').addEventListener('click', unzoomCard);

    // Horizontal scrolling with mouse wheel
    document.body.addEventListener('wheel', (event) => {
        if (event.deltaY !== 0) {
            document.body.scrollLeft += event.deltaY;
            event.preventDefault();
        }
    });
});