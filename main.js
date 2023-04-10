var camera = document.getElementById("webcam");
Webcam.attach(camera);
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
  
  var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jBa6FHcs6/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function reconhecer()
  {
    var img = document.getElementById('foto_tirada');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("resultado").innerHTML = results[0].label;
    document.getElementById("precisao").innerHTML = results[0].confidence.toFixed(3);
  }
}