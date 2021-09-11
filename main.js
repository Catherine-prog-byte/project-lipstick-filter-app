noseX="";
noseY="";

function preload() {
  lip_image=loadImage("https://i.postimg.cc/pXfFKsRh/lipstick-removebg-preview.png");
}
function setup() {
    canvas = createCanvas(450,450)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(450,450);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    image(video,0,0,450,450);
    fill('#ff0000');
    stroke('#ff0000');
    //circle(noseX,noseY,20);
    image(lip_image,noseX -20 ,noseY +5 , 100, 80 );
}
function take_snapshot() {
   save('myFilterImage.png')
}
function modelLoaded() {
    console.log("poseNet is initialized")
}
function gotPoses(results) {
    if (results.length >0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX);
        console.log("noseY="+noseY);
    }
}