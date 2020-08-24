var testMP3 = document.getElementById("testAudio");

Audio.playTestAudio = function (){
    testMP3.play();
};

Audio.pauseTestAudio = function (){
    testMP3.pause();
};

Audio.recordMic = function (){
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
    
        const audioChunks = [];

        mediaRecorder.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
        });
        
        mediaRecorder.addEventListener("stop", () => {
            const audioBlob = new Blob(audioChunks);
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play();
        });
        
        setTimeout(() => {
            mediaRecorder.stop();
        }, 3000);
    });
};