function preload(){

}
function setup(){
    Canvas=CreateCanvas(450,400);
    Canvas.Centre();
    Camera=CreateCapture(VIDEO);
    Camera.Size(450,400);
    Camera.Hide();
}
function draw(){
    Image(Camera,0,0,450,400);
}