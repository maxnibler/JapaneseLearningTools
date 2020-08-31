var audioSample = document.getElementById("alertSound");
var alertSound = document.getElementById("alertSound");
var voiceMP3;

$(document).ready(function(){
    $("#newAudioButton").click(function(){
        $("#sampleScript").attr("src", "https://forvo.com/_ext/ext-prons.js?id=3216134");
    });
});

Audio.newAudioSample = function (){
    document.getElementById("sample").innerHTML = '<script type="text/javascript" src="https://forvo.com/_ext/ext-prons.js?id=3216134" charset="utf-8"/>';
};

Audio.recordMic = function (){
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        alertSound.play();
        mediaRecorder.start();
    
        const audioChunks = [];

        mediaRecorder.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
        });
        
        mediaRecorder.addEventListener("stop", () => {
            const audioBlob = new Blob(audioChunks);
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            voiceMP3 = audio;
            //audio.play();
        });
        
        setTimeout(() => {
            mediaRecorder.stop();
            alertSound.play();
        }, 3000);
    });
};

Audio.playMic = function (){
    voiceMP3.play();
}