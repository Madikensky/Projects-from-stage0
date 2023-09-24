const songs = [
    {
        title: 'Glimpse of Us',
        artist: 'Joji',
        file: 'assets/audio/Joji - Glimpse of Us.mp3',
        image: 'assets/img/joji_glimpse_of_us.png'
    },
    {
        title: 'Run',
        artist: 'Joji',
        file: 'assets/audio/Joji - Run.mp3',
        image: 'assets/img/joji_run.png'
    }
];

const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const audio = new Audio();
let currAudioIndex = 0;
let isPlaying = false;


function playAudio() {
    const currAudio = songs[currAudioIndex];
    const audioTitle = document.querySelector('.title');
    const audioAuthor = document.querySelector('.author');
    const audioImage = document.querySelector('.audio-image');
    const audioBackground = document.querySelector('.background-image');
    const audioTime = document.querySelector('.music-length p');
    const audioCurrentTime = document.querySelector('.current-time');

    audio.src = currAudio.file;
    audioTitle.textContent = currAudio.title;
    audioAuthor.textContent = currAudio.artist;
    audioImage.src = currAudio.image;
    audioBackground.src = currAudio.image;

    audio.addEventListener('loadedmetadata', () => {
        const durationInSeconds = audio.duration;
        const durationFormatted = formatTime(durationInSeconds);
        audioTime.textContent = durationFormatted;
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const formattedMinutes = String(minutes).padStart(1, '0')
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    audio.addEventListener('timeupdate', () => {
        const currTime = audio.currentTime;
        audioCurrentTime.textContent = formatTime(currTime);
        audioCurrentTime.style.color = 'white'

    })

    const audioRange = document.querySelector('.progress');

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const progress = (currentTime / duration) * 100;
        audioRange.value = progress;
    });

    audioRange.addEventListener('input', () => {
        const progress = audioRange.value;
        const duration = audio.duration;
        const newTime = (progress / 100) * duration;
        audio.currentTime = newTime;
    });

    audio.play();
    isPlaying = true;
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
}

function pauseAudio() {
    audio.pause();
    isPlaying = false;
    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
}

function playNextAudio() {
    currAudioIndex++;
    if (currAudioIndex >= songs.length) {
        currAudioIndex = 0;
    }
    playAudio();
}

function playPrevAudio() {
    currAudioIndex--;
    if (currAudioIndex < 0) {
        currAudioIndex = songs.length - 1;
    }
    playAudio();
}



playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio)
nextBtn.addEventListener('click', playNextAudio)
prevBtn.addEventListener('click', playPrevAudio)
audio.addEventListener('ended', playNextAudio)

console.log('Собственная оценка: 60 / 60')