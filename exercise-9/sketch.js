function setup() {
  createCanvas(400, 400);
}


 function draw(){
   background(260);
   fill("red");
   strokeWeight(2);
   ellipse(170, 90, 30, 140); //left ear
   ellipse(220, 90, 30, 140); //right ear
   ellipse(195, 205, 220, 165); // face
   
   fill("red");
   strokeWeight(4);
   ellipse(220,200,18,18);//right eye
   ellipse(220,200,3,3);
   ellipse(170,200,18,18);//left eye
   ellipse(170,200,3,3);
   
   noFill();
   strokeWeight(3);
   //arc(190, 175, 120, 80, PI, PI + QUARTER_PI);//left eyebrow
   arc(170, 195, 80, 90, PI, PI * 3 / 2);//left eyebrow
   arc(220, 195, 80, 90, PI * 3 / 2, PI * 2);//right eyebrow
   
   noFill();
   //left cheek
   line(148,221,140,229);
   line(140,220,130,230);
   line(129,220,120,230);
   line(118,222,110,229);
   //right cheek
   line(242,221,250,229);
   line(250,220,260,230);
   line(259,220,270,230);
   line(270,222,280,229);
   
   noFill();
   strokeWeight(3);
   arc(185,226,18,20,0,PI* 5/6);
   arc(205,226,18,20,PI* 13/6,PI);
   arc(195,236,20,18,PI * 1/3,PI);
 }

