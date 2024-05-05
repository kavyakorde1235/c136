status="";

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
Object_name=document.getElementById("object_name").value;
}

function modelLoaded(){
    console.log('model loaded');
     status=true;
}

function draw(){
    image(video,0,0,380,380);
}