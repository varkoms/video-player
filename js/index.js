const video = document.querySelector('#video')
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
const backward = document.querySelector('#backward')
const forward = document.querySelector('#forward')

play.addEventListener('click', handlePlay)
pause.addEventListener('click', handlePause)
backward.addEventListener('click', handleBackward)
forward.addEventListener('click', handleForward)

function handlePlay(){
    // console.log(`Click en boton Play`);
    video.play()
    play.hidden = true
    pause.hidden = false
}

function handlePause(){
    // console.log(`Click en boton Pause`);
    video.pause()
    play.hidden = false
    pause.hidden = true
}

function handleBackward(){
    video.currentTime -= 5
    // console.log('Atras 10 segundos', video.currentTime);
}

function handleForward() {
    video.currentTime += 5
    // console.log('Adelante 10 segundos');
}

const progress = document.querySelector('#progress')
video.addEventListener('loadedmetadata', handleLoaded)
video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
    progress.max = video.duration

    // console.log('Ha cargado mi video');
}

function handleTimeUpdate(){
    progress.value = video.currentTime
    // console.log('tiempo actual: ', video.currentTime);
}

progress.addEventListener('input', handleInput)

function handleInput(){
    // console.log(progress.value);
    video.currentTime = progress.value
}