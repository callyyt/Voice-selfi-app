var speechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
 var Textbox=document.getElementById("textbox");

 function start()
 {
     Textbox.innerHTML="";
     recognition.start();
 }

 recognition.onresult=function(event)
 {
     console.log(event);
     var Content = event.result[0][0].transcript;

     document.getElementById("textbox").innerHTML = Content;
     console.log(Content);
        speak();
 }

 function speack()
 {
    var synth = window.SpeechSynthesis;

    speak_data = document.getElementById("textbox").ariaValueMax;
    
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
 }

 Webcam.set({

    width:360,
    height:250,
    image_format : 'png' ,
    png_quality:90
 });
 camera = document.getElementById("camera");
