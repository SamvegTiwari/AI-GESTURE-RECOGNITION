    NoseX=0;
    NoseY=0;
    LeftwristX=0;
    RightwristX=0;
    diffrence=0;
    
    
    function setup(){
     video=createCapture(VIDEO);
     video.size(600,500);

   canvas=createCanvas(550,450);
   canvas.position(730,150);

   my_posenet=ml5.poseNet(video, model_loaded);
   my_posenet.on("pose", got_poses);
    }

    function model_loaded(){
     console.log("Model Loaded"); 
    }

function got_poses(results){
 if(results.length>0){
 console.log(results);   
 NoseX= results[0].pose.nose.x;
 NoseY= results[0].pose.nose.y;
 LeftwristX=results[0].pose.rightWrist.x;
 RightwristX=results[0].pose.leftWrist.x;
 diffrence= floor(LeftwristX-RightwristX);
 }  

}

    function draw(){
    background("Black");
    fill("blue");
    stroke("orange");
    square(NoseX,NoseY,100,diffrence);
    }
