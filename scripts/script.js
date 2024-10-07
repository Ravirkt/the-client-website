

// hamburger menu voor het openen en sluiten van de menu
function openmenu() {
    const hammenu = document.querySelector('.test')
    hammenu.style.display = 'flex';
}

function closemenu() {
    const hammenu = document.querySelector('.ham-menu')
    hammenu.style.display = 'none';
}



//  testen van video contols

const video = document.getElementById('video-1');
const playPauseButton = document.getElementById('pauze-play-button');

playPauseButton.addEventListener('click', function(event) {
    event.preventDefault(); 

    if (video.paused) {
        video.play(); 
    } else {
        video.pause(); 
    }
});