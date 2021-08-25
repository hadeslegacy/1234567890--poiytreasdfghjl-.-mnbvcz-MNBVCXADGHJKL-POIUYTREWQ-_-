var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = " ";
    recognition.start();
}

recognition.onresult = function (e) {
    console.log(e);
    var content = e.results[0][0].transcript
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if (content == "take me selfie") {
        console.log("taking selfie in 1.837 seconds");
        speak();
    }
}

function speak() {
    confused = window.speechSynthesis;
    confusion = "food good now smile ahhahahahahahahaahahhahahaahahahha"
    utterthis = new SpeechSynthesisUtterance(confusion);
    confused.speak(utterthis);
    Webcam.attach(food_good)
    setTimeout(function () {
        take_snapshot();
        save();
    }, 1837);
}


food_good = document.getElementById("camera")
Webcam.set({
    height: 251,
    width: 349,
    image_format: "png",
    png_quality: 91
});

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='selfie_image' src='" + data_uri + "'/>";
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image
    link.click();
}