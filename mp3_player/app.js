const song = document.getElementById('song')
const songImg = document.getElementById('songImg')
const songName = document.getElementById('songName')
const btnBackward = document.getElementById('btnBackward')
const btnPreSong = document.getElementById('btnPreSong')
const btnPlayPause = document.getElementById('btnPlayPause')
const btnNextSong = document.getElementById('btnNextSong')
const btnForward = document.getElementById('btnForward')
const songVolUp = document.getElementById('songVolUp')
const songVolDown = document.getElementById('songVolDown')

let currentSong = 0

const songs = [
    {
        id: 0,
        name: "lion",
        mp3Name: "lion.ogg",
        img: "first.webp",
        singer: "alion"
    },
    {
        id: 1,
        name: "nashkanDelamo",
        mp3Name: "nashkanDelamo.mp3",
        img: "qruz.jpg",
        singer: "rahib"
    },
    {
        id: 2,
        name: "gholMidam",
        mp3Name: "gholMidam.mp3",
        img: "second.png",
        singer: "balaeli"
    },
]

writeData(currentSong)

btnPlayPause.onclick = () => song.paused ? playSong() : pauseSong()


btnForward.onclick = () => song.currentTime += 5
btnBackward.onclick = () => song.currentTime -= 5


btnNextSong.onclick = () => {
    if (currentSong >= songs.length - 1) {
        currentSong = 0
    } else {
        currentSong++
    }
    writeData(currentSong)
    playSong()
}
btnPreSong.onclick = () => {
    if (currentSong === 0) {
        currentSong = songs.length - 1
    } else {
        currentSong--
    }
    writeData(currentSong)
    playSong()
}
// Error: 1-den yuxari olmamalidir
songVolUp.onclick = () => {
    if (song.volume > 1) {
        song.volume = 1
    } else {
        song.volume += 0.1
    }
}
// Error: 0-dan asagi olmamalidir
songVolDown.onclick = () => {
    // console.log(song.volume.toFixed(1))
    if (song.volume.toFixed(1) === 0) {
        songVolDown.disabled = true
    } else {
        song.volume -= 0.1
    }
}

function writeData(c) {
    songImg.src = `./img/${songs[c].img}`
    songName.textContent = `${songs[c].name} by ${songs[c].singer}`
    song.src = `./mp3/${songs[c].mp3Name}`
}

function playSong() {
    btnPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i>'
    song.play()
}
function pauseSong() {
    btnPlayPause.innerHTML = '<i class="fa-solid fa-play"></i>'
    song.pause()
}
