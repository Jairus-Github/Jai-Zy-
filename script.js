// Home: Interactive photo
function showHeart() {
    const heart = document.getElementById('heart-animation');
    heart.style.display = 'block';
    setTimeout(() => heart.style.display = 'none', 2000);
}

// Letters: Show typed letters
function showLetter(num) {
    const letters = [];
    for(let i=1;i<=24;i++){
        letters.push(`Letter ${i}: My love, this is a heartfelt message just for you. You are amazing and I cherish every moment with you.`);
    }
    document.getElementById('letter-display').innerHTML = `<p>${letters[num-1]}</p>`;
}

// Songs search
function filterSongs() {
    const input = document.getElementById('song-search').value.toLowerCase();
    const songs = document.querySelectorAll('#songs-list .song');
    songs.forEach(song => {
        const text = song.textContent.toLowerCase();
        song.style.display = text.includes(input) ? '' : 'none';
    });
}

// Letters search
function filterLetters() {
    const input = document.getElementById('letter-search').value.toLowerCase();
    const buttons = document.querySelectorAll('.letter-buttons button');
    buttons.forEach(btn => {
        const text = btn.textContent.toLowerCase();
        btn.style.display = text.includes(input) ? '' : 'none';
    });
}

// Quiz: Logic for Yes/No
let noClicks = 0;

function yesClicked() {
    const quizResult = document.getElementById('quiz-result');
    // Create the image
    const img = document.createElement('img');
    img.src = "assets/yay.png";
    img.alt = "Love Photo";
    img.style.borderRadius = '15px';
    img.style.maxWidth = '300px';
    quizResult.innerHTML = ''; // Clear previous content
    quizResult.appendChild(img);

    // Remove the image after 5 seconds
    setTimeout(() => {
        img.remove();
    }, 5000);
}

function noClicked() {
    noClicks++;
    const noBtn = document.getElementById('no-btn');
    if (noClicks < 3) {
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 200 - 100;
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    } else {
        noBtn.style.display = 'none';
        const newYes = document.createElement('button');
        newYes.textContent = 'SOBRAA';
        newYes.onclick = yesClicked;
        newYes.style.background = '#FFB6C1';
        newYes.style.color = 'white';
        newYes.style.border = 'none';
        newYes.style.padding = '10px 20px';
        newYes.style.borderRadius = '5px';
        newYes.style.cursor = 'pointer';
        document.getElementById('quiz-result').appendChild(newYes);
    }
}


function toggleMenu() {
    const menu = document.getElementById("nav-links");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function openPhoto(src) {
    document.getElementById("viewer-img").src = src;
    document.getElementById("photo-viewer").style.display = "flex";
}

function closePhoto() {
    document.getElementById("photo-viewer").style.display = "none";
}
