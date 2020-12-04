//Variablen für die Sounds
var Sounds = ['assets/A.mp3',
    'assets/C.mp3',
    'assets/F.mp3',
    'assets/G.mp3',
    'assets/hihat.mp3',
    'assets/kick.mp3',
    'assets/laugh-1.mp3',
    'assets/laugh-2.mp3',
    'assets/snare.mp3'];
//Funktion für die Sounds
function playSample(soundName) {
    var audioObject = new Audio(soundName);
    audioObject.play();
}
//Funktion aufrufen
document.querySelector(".Button1").addEventListener("click", function () {
    playSample(Sounds[0]);
});
document.querySelector(".Button2").addEventListener("click", function () {
    playSample(Sounds[1]);
});
document.querySelector(".Button3").addEventListener("click", function () {
    playSample(Sounds[2]);
});
document.querySelector(".Button4").addEventListener("click", function () {
    playSample(Sounds[3]);
});
document.querySelector(".Button5").addEventListener("click", function () {
    playSample(Sounds[4]);
});
document.querySelector(".Button6").addEventListener("click", function () {
    playSample(Sounds[5]);
});
document.querySelector(".Button7").addEventListener("click", function () {
    playSample(Sounds[6]);
});
document.querySelector(".Button8").addEventListener("click", function () {
    playSample(Sounds[7]);
});
document.querySelector(".Button9").addEventListener("click", function () {
    playSample(Sounds[8]);
});
//Variablendeklaration für Play Button
var sequence = [2, 1, 1, 0, 3, 3, 3, 3, 0, 2, 1, 1, 0, 3, 3, 3, 3, 0, 4, 6];
var indexOfSequence = 0;
//Funktion für Playbutton
function playBeat() {
    setInterval(function () {
        playSample(Sounds[sequence[indexOfSequence]]);
        indexOfSequence = indexOfSequence + 1;
        console.log('find out which song I copied: https://github.com/Externalizable/bongo.cat/blob/master/README.md');
    }, 500);
}
document.querySelector('.play_button').addEventListener('click', function () {
    playBeat();
});
//# sourceMappingURL=script.js.map