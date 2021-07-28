var speechrecog = window.webkitSpeechRecognition;

var recognition = new speechrecog();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if (content == "Take my selfie.") {
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    data = "taking your selfie in 5 seconds";
    var utter = new SpeechSynthesisUtterance(data);
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function () {
    take_snapshot();
    save();
    }, 5000);
}

Webcam.set({
    width: 360, height: 250, image_format: 'png', png_qaulity: 90
});

camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='selfie_image' src='" + data_uri + "'>";
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src
    link.href=image;
    link.click()
}
