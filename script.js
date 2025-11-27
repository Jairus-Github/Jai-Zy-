// Home: Interactive photo
function showHeart() {
    const heart = document.getElementById('heart-animation');
    heart.style.display = 'block';
    setTimeout(() => heart.style.display = 'none', 2000);
}

// Letters: Show typed letters
function showLetter(num) {
    const letters = [
`Thank you for loving me in ways I did not know I deserved.
You hold my heart gently even on days I can barely hold myself.
Your love feels like a warm light in places I thought would stay dark.`,

`I am sorry for the wounds I caused without meaning to.
Sometimes my flaws speak louder than my intentions.
Thank you for staying when walking away would have been easier.`,

`With you everything feels softer.
The world stops pressing down on me.
You make even the chaos feel survivable.`,

`Your achievements, your strength, your quiet victories,
I see them all.
And I am proud of you in ways words can barely contain.`,

`You are the warmth in my cold days,
the softness in my hard edges.
You make my world feel kinder and fuller.`,

`We have seen storms, silence, and sun.
Yet you are still here.
I am still holding your hand.
That means everything to me.`,

`I know I fall short.
I know I stumble.
But for you I will always rise again, trying to love better than yesterday.`,

`The way you carry yourself,
the fire in your heart,
the tenderness in your soul
you inspire me without even trying.`,

`Not just your beauty,
not just your laughter,
but the kindness you carry so naturally.
You are beautiful from the inside out.`,

`When things were heavy,
when everything felt fragile,
you stayed.
You fought for us.
I will always be grateful for that.`,

`I am still learning and still growing.
But know this
my heart is yours
even when I do not show it perfectly.`,

`On days when I am crumbling,
I think of you
and suddenly I can stand again.
You give me a reason to keep going.`,

`Watching you chase your dreams
feels like watching the sunrise.
I am proud, amazed, and forever inspired.`,

`Home is not a place anymore.
It is you.
Your voice, your warmth, your presence.
That is where my heart returns.`,

`Our love is not flawless,
but it is real and human.
In its imperfect corners
I find something worth holding forever.`,

`You stayed when you could have walked away.
You chose me even when I was not easy to choose.
My heart will remember that for a lifetime.`,

`Every laugh,
every quiet moment,
every small memory
I carry them with me like treasures.`,

`Your presence is a soft blanket
over the cold parts of my life.
You soothe me in ways nothing else can.`,

`This love we built
fragile and beautiful
I will protect it with everything I have.
I will protect you.`,

`When the world feels heavy,
thinking of you lifts me.
You remind me to keep going,
to keep fighting,
to keep growing.`,

`Your love is gentle but strong,
soft but steady.
It wraps around me like something sacred.`,

`I imagine us years from now
older, calmer, still choosing each other.
That is the future I want.
I want it with you.`,

`If life throws storms at us,
I will hold your hand tighter.
We will walk through every disaster
side by side.`,

`You are the first thought in my mornings,
the soft comfort in my nights,
and the one I want in every chapter of my life.
You are my world and my always.`
    ];

    document.getElementById('letter-display').innerHTML =
        `<p>${letters[num-1].replace(/\n/g, '<br>')}</p>`;
}

function filterLetters() {
    const input = document.getElementById('letter-search').value.toLowerCase();
    const buttons = document.querySelectorAll('.letter-buttons button');

    buttons.forEach(btn => {
        const txt = btn.innerText.toLowerCase();
        btn.style.display = txt.includes(input) ? 'inline-block' : 'none';
    });
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
    img.src = "yay.png";
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
    if (noClicks < 5) {
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



