const song = document.getElementById('song')
const songImg = document.getElementById('songImg')
const songName = document.getElementById('songName')
const btnBackward = document.getElementById('btnBackward')
const btnPreSong = document.getElementById('btnPreSong')
const btnPlayPause = document.getElementById('btnPlayPause')
const btnNextSong = document.getElementById('btnNextSong')
const btnForward = document.getElementById('btnForward')





btnPlayPause.onclick = () => {
    if (song.paused) {
        btnPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i>'
        song.play()
    } else {
        btnPlayPause.innerHTML = '<i class="fa-solid fa-play"></i>'
        song.pause()
    }
}

btnForward.onclick = () => {
    song.currentTime += 5
}
btnBackward.onclick = () => {
    song.currentTime -= 5
}
