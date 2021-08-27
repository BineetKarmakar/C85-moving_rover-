canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_img=["mars_img_1.jpg","mars_img_2.jpg","mars_img_3.jpg","mars_img_4.jpg","mars_img_5.jpg"];

randomNumber=Math.floor(Math.random()*5)

var rover_width=100;
var rover_height=90;

var rover_x=100;
var rover_y=100;


//var background_image="mars.jpg";
var background_image=nasa_img[randomNumber];
var rover_img="rover.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=upload_background;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=upload_rover;
    rover_imgTag.src=rover_img;
}

function upload_background(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function upload_rover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);

}
window.addEventListener("keydown",my_keyDown);
function my_keyDown(e){
    keyPressed =e.keyCode;
    console.log(keyPressed);

    if(keyPressed=="37"){
        left();
        console.log("left");
    }
    if(keyPressed=="38"){
        up();
        console.log("up");
    }
    if(keyPressed=="39"){
        right();
        console.log("right");
    }
    if(keyPressed=="40"){
        down();
        console.log("down");
    }
}


function left(){

    if(rover_x>=0){
        rover_x=rover_x-10;
        upload_background();
        upload_rover();
    }
}
function right(){

    if(rover_x<=700){
        rover_x=rover_x+10;
        upload_background();
        upload_rover();
    }
}
function up(){

    if(rover_y>=0){
        rover_y=rover_y-10;
        upload_background();
        upload_rover();
    }
}
function down(){

    if(rover_y<=500){
        rover_y=rover_y+10;
        upload_background();
        upload_rover();
    }
}