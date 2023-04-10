Webcam.attach("#camera");
var camera = document.getElementById("webcam");
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
function tirar_foto(){
    Webcam.snap(
        function(data_URI){
            document.getElementById("result").innerHTML="<img id='foto_tirada' src='"+data_URI+"'>";
        }
    );
}
console.log('ml5 version:', ml5.version);
  
  var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jBa6FHcs6//model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    var img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("resultObjectName").innerHTML = results[0].label;
    document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}