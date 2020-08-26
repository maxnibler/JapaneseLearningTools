var audioSample = document.getElementById("alertSound");
var alertSound = document.getElementById("alertSound");
var voiceMP3;

Audio.newAudioSample = function (){
    //audioSample.play();
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