Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:90
})
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
});
}
console.log('mi5 version:',mi5.version);

classifier=mi5.imageClassifier('https://teachablemachine.withgoogle.com/models/mV7CjwuhV/',modelLoaded);