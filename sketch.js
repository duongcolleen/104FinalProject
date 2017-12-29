//Name: Colleen Duong
//Email: cduong@andrew.cmu.edu
//Section: D
//Final Project

//empty array to store clouds
var clouds = [];

//variables for images
var liloandstitch;
var tangled;
var liloandstitchsurfboard;
var bighero6;

function setup() {
  createCanvas(1000, 500);

  liloandstitch = loadImage("https://i.imgur.com/Q8WphXR.png");
  tangled = loadImage("https://i.imgur.com/IPR7Psj.png");
  liloandstitchsurfboard = loadImage("https://i.imgur.com/MovIC2B.png");
  bighero6 = loadImage("https://i.imgur.com/zhYJmIx.png");
}

function draw() {
  background(202, 230, 205);

  var H = hour();
  var M = minute();
  var S = second();

  //Sky Color
    //Changes sky color throughout the day according to the hour
  if(H > 0 && H < 13){ //1am to 12pm
		var skyR = H * (180/12); //red
		var skyG = H * (270/12); //green
		var skyB = H * (290/12); //blue
	}else if(H > 13 && H < 23){  //1pm to 11pm
    var skyR = 180 - (H - 12) * (180/12);
    var skyG = 270 - (H - 12) * (270/12);
    var skyB = 290 - (H - 12) * (290/12);
	}else{ //12am
    var skyR = 0;
    var skyG = 0;
    var skyB = 0;
  }


  fill(skyR, skyG, skyB); //Sky changes color according to the if/else statements above
  rect(530, 0, 500, 300);

  drawstars();

  secondstartotheright();

  updateAndDisplayClouds();
  addNewCloudsWithSomeRandomProbability();

  fill(202, 230, 205);  //Green
  rect(0, 0, 520, height);  //Hiro's Wallpaper

  sanfranstokyo();

  HirosRoom();

  clock();

  baymaxhead();

  tangledportrait();

  liloandstitchportrait();

  bighero6portrait();

  chair();
}

function updateAndDisplayClouds(){
  for(var i = 0; i < clouds.length; i++){
    clouds[i].move();
    clouds[i].display();
  }
}

function removeCloudsThatHaveSlippedOutOfView(){
  var cloudsToKeep = [];
  for(var i = 0; i < clouds.length; i++){
    if(clouds[i].x + clouds[i].breadth > 0){
      cloudsToKeep.push(clouds[i]);
    }
  }
  clouds = cloudstoKeep;
}

function addNewCloudsWithSomeRandomProbability(){
  //Spawn a new cloud to the right edge of the canvas
  var newCloudLikelihood = 0.01;
  if(random(0,1) < newCloudLikelihood){
    clouds.push(makeCloud(width));
  }
}

function cloudMove(){
  this.x += this.speed;
}

function cloudDisplay(){
  var cloudHeight = this.altitude * 20;

  push();
  translate(this.x, height - 200);

  var H = hour();

//Changes Cloud Colors According to Time
  if(H > 0 && H < 13){ //1am to 12pm
    var skyR = H * (140/12); //red
    var skyG = H * (230/12); //green
    var skyB = H * (250/12); //blue
  }else if(H > 13 && H < 23){ //1pm to 11pm
    var skyR = 140 - (H - 12) * (140/12);
    var skyG = 230 - (H - 12) * (230/12);
    var skyB = 250 - (H - 12) * (250/12);
  }else{  //12am
    var skyR = 20;
    var skyG = 20;
    var skyB = 20;
  }

  fill(skyR, skyG, skyB);
  //Variables randomize the position and sized
  ellipse(0, cloudHeight, this.breadth, cloudHeight-10);
  ellipse(0, cloudHeight-210, this.breadth*0.6, cloudHeight-20);
  ellipse(0, cloudHeight-200, this.breadth, cloudHeight-10);
  ellipse(0, cloudHeight-100, this.breadth, cloudHeight-20);
  pop();
}

function makeCloud(birthLocationX){
  var clouds = {x: birthLocationX,
                breadth: 60,
                speed: -0.2,
                altitude: round(random(-1, 1)),
                move: cloudMove,
                display: cloudDisplay}
  return clouds;
}

function HirosRoom(){
  noStroke();

  //WALLPAPER BOTTOM TRIM
  fill(255);
  rect(0, 440, width, 60);
  //WALLPAPER BOTTOM TRIM

  //TRIANGULAR WALL
  fill(97, 69, 62);   //Darkest Brown
  triangle(0, 0, 200, 0, 0, 200);
  //TRIANGULAR WALL

  //GROUND
  fill(97, 69, 62); //Darkest Brown
  rect(0, 485, width, 15);
  //GROUND

  //DESK
  fill(209, 178, 169);  //Dark Brown
  rect(150, 300, 300, 40);
  rect(330, 300, 150, 185);

  push();
  stroke(191, 157, 148);  //Darker than Dark Brown
  strokeWeight(2);
  rect(340, 345, 130, 50);  //Drawers
  rect(340, 415, 130, 50);  //Drawers
  pop();

  fill(235, 208, 201);  //Light Brown
  rect(0, 300, 150, 185);
  //DESK

  //DESK ACCESSORIES
  fill(97, 69, 62);   //Darkest Brown
  rect(435, 235, 10, 30); //Pencil
  rect(450, 245, 8, 30); //Pencil
  fill(234, 112, 108);  //Light Red
  rect(430, 255, 30, 45); //Cup
  fill(97, 69, 62);   //Darkest Brown
  rect(320, 270, 120, 30);
  fill(68); //Super Dark Grey
  rect(145, 275, 80, 20);  //Computer
  fill(81, 80, 80); //Dark Grey
  rect(80, 145, 200, 130);  //Computer
  rect(115, 290, 140, 10);  //Computer
  fill(119); //Light Grey
  rect(90, 155, 180, 105);  //Computer
  fill(234, 112, 108); //Light Red
  rect(85, 265, 30, 30); //Post it
  //DESK ACCESSORIES

  //SHELF
  push();
  fill(187, 155, 148);  //Darker than Dark Brown
  rect(300, 40, 10, 90);
  rect(450, 40, 10, 90);

  fill(209, 178, 169);  //Dark Brown
  rect(280, 100, 200, 20);
  rect(280, 50, 200, 20);

  textSize(20);
  textStyle(BOLD);
  textFont("Verdana");
  fill(209, 178, 169);  //Dark Brown
  text("CLICK THE", 325, 50);
  text("PHOTOS", 335, 100);
  pop();
  //SHELF

  //WALL PICTURES
  //WALL PICTURES

  //WINDOW FRAME
  fill(240);
  rect(705, 0, 20, 300);  //Window Frame
  rect(525, 0, 20, 300);  //Window Frame
  rect(520, 280, width, 20);  //Window Frame
  push();
  noStroke();
  rect(706, 0, 19, 300);  //Window Frame
  rect(525, 0, 20, 300);  //Window Frame
  pop();

  fill(86); //Light grey
  rect(530, 0, 180, 10);   //Window Shutters (Left)
  rect(530, 15, 180, 10);   //Window Shutters (Left)
  rect(530, 30, 180, 10);   //Window Shutters (Left)
  rect(530, 45, 180, 10);   //Window Shutters (Left)
  rect(720, 0, width, 10);   //Window Shutters (Right)
  rect(720, 15, width, 10);   //Window Shutters (Right)
  rect(720, 30, width, 10);   //Window Shutters (Right)
  rect(550, 0, 5, 50); //Shutter Connector
  rect(695, 0, 5, 50); //Shutter Connector
  rect(730, 0, 5, 35); //Shutter Connector

  fill(200);
  rect(510, 300, width, 100); //Bed Frame
  fill(255);
  rect(510, 0, 30, 400);  //Bed Frame
  fill(220);
  rect(510, 300, width, 20);  //Bed Frame Back
  fill(255);
  rect(510, 300, 80, 20); //Bed Frame
  push();
  noStroke();
  rect(511, 0, 29, 400);  //Bed Frame

  pop();
  //WINDOW FRAME

  //BED
  fill(148, 160, 205); //Periwinkle
  rect(500, 335, 600, 150, 20);
  //BED
}

function sanfranstokyo(){
  var H = hour();
  var S = second();

  //SANFRANSTOKYO
  //Bridge
  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(201, 70, 72); //Red
  }else{
    fill(137, 44, 49); //Darker Red
  }
  rect(690, 260, 200, 10);  //Horizontal
  rect(720, 190, 10, 200);
  rect(830, 190, 10, 200);

  push();
  noFill();
  if(H > 3 && H < 19){//4am to 7pm lighter color
    stroke(201, 70, 72); //Red
  }else{
    stroke(137, 44, 49); //Darker Red
  }

  strokeWeight(2);
  curve(710, -300, 729, 192, 831, 192, 800, -300);
  curve(700, -300, 618, 192, 720, 192, 800, -300);
  curve(850, -300, 839, 192, 933, 192, 710, -300);
  line(680, 250, 680, 260); //Left
  line(690, 241, 690, 260); //Left
  line(700, 229, 700, 260); //Left
  line(740, 222, 740, 260); //Mid
  line(750, 236, 750, 260); //Mid
  line(760, 246, 760, 260); //Mid
  line(770, 252, 770, 260); //Mid
  line(780, 254, 780, 260); //Mid
  line(790, 254, 790, 260); //Mid
  line(800, 250, 800, 260); //Mid
  line(810, 242, 810, 260); //Mid
  line(820, 228, 820, 260); //Mid
  line(850, 223, 850, 260); //Right
  line(860, 236, 860, 260); //Right
  line(870, 246, 870, 260); //Right
  line(880, 252, 880, 260); //Right
  pop();

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(219, 93, 100); //Light Red
  }else{
    fill(165, 61, 72); //Darker Light Red
  }
  rect(720, 190, 14, 10);
  rect(720, 215, 14, 10);
  rect(720, 240, 14, 10);
  rect(826, 190, 18, 10);
  rect(826, 215, 18, 10);
  rect(826, 240, 18, 10);
  //Bridge

  //Building 3 (Left)
  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(200);
  }else{
    fill(150);
  }
  rect(655, 210, 30, 30); //Roof Box

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(230);
  }else{
    fill(180);
  }
  rect(620, 240, 70, 80); //Base

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(50);
  }else{
    fill(255, 242, 6);
    if(S % 3){
      fill(249, 214, 38);  //Blinking Effect
    }//Light
  }
  rect(650, 250, 35, 10); //Ribbon Window
  rect(650, 265, 25, 10); //Ribbon Window
  //Building 3 (Left)

  //Building 2 (Right)
  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(254, 252, 238); //Pale Yellow
  }else{
    fill(216, 213, 195); //Darker Pale Yellow
  }
  rect(880, 250, 70, 40); //Base

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(79, 106, 112); //Teal
  }else{
    fill(50, 70, 73); //Darker Teal
  }
  triangle(860, 250, 880, 230, 900, 250); //Roof
  rect(880, 230, 70, 20); //Roof
  fill(0);
  rect(880, 210, 70, 20); //Roof

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(79, 106, 112); //Teal
  }else{
    fill(50, 70, 73); //Darker Teal
  }
  triangle(860, 210, 920, 160, 900, 210); //Roof
  triangle(870, 210, 920, 140, 950, 210); //Roof
  rect(880, 200, 70, 10); //Roof
  rect(915, 140, 70, 10); //Roof
  //Building 2 (Right)

  //Building 2 (Left)
  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(254, 252, 238); //Pale Yellow
  }else{
    fill(216, 213, 195); //Darker Pale Yellow
  }
  rect(580, 220, 70, 80); //Base

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(102, 72, 55); //Dark Brown
  }else{
    fill(73, 50, 39); //Darker Dark Brown
  }
  rect(580, 150, 70, 80); //Roof Box

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(144, 117, 108); //Light Brown Roof
  }else{
    fill(104, 81, 75); //Darker Light Brown Roof
  }
  rect(530, 220, 150, 10); //Roof

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(102, 72, 55); //Dark Brown
  }else{
    fill(73, 50, 39); //Darker Dark Brown
  }
  rect(580, 150, 70, 80); //Roof Box
  rect(530, 230, 120, 5); //Brace
  rect(530, 255, 120, 5); //Brace
  rect(600, 230, 5, 30); //Brace
  //building 2(Left)

  //Building 1 (Right)
  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(255);
  }else{
    fill(200);
  }
  rect(930, 200, 100, 80);  //Base

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(233);
  }else{
    fill(180);
  }
  rect(925, 200, 100, 2);  //Base

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(255);
  }else{
    fill(200);
  }
  rect(925, 170, 100, 30);  //Base

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(144, 117, 108);  //Brown
  }else{
    fill(107, 86, 81);  //Darker Brown
  }
  rect(925, 150, 100, 20);  //Base

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(233);
  }else{
    fill(180);
  }
  rect(925, 150, 100, 2);  //Base
  rect(950, 110, 100, 20);  //Base

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(255);
  }else{
    fill(200);
  }
  triangle(925, 150, 910, 130, 950, 130);
  rect(925, 130, 100, 20);  //Base

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(85, 96, 85);
  }else{
    fill(251, 237, 36); //Light
    if(S % 6){
      fill(249, 214, 38);  //Blinking Effect
    }
  }
  rect(935, 207, 30, 40);  //Window
  rect(970, 207, 30, 40);  //Window
  rect(935, 252, 30, 40);  //Window
  rect(970, 252, 30, 40);  //Window

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(233);
  }else{
    fill(180);
  }
  rect(943, 208, 2, 38);  //Window (T.Left)
  rect(955, 208, 2, 38);  //Window (T.Left)
  rect(936, 220, 28, 2);  //Window (T.Left)
  rect(936, 235, 28, 2);  //Window (T.Left)
  rect(978, 208, 2, 38);  //Window (T.Right)
  rect(990, 208, 2, 38);  //Window (T.Right)
  rect(971, 220, 28, 2);  //Window (T.Right)
  rect(971, 235, 28, 2);  //Window (T.Right)
  rect(943, 253, 2, 38);  //Window (B.Left)
  rect(955, 253, 2, 38);  //Window (B.Left)
  rect(936, 265, 28, 2);  //Window (B.Left)
  rect(936, 265, 28, 2);  //Window (B.Left)
  rect(978, 253, 2, 38);  //Window (B.Right)
  rect(990, 253, 2, 38);  //Window (B.Right)
  rect(971, 265, 28, 2);  //Window (B.Right)
  rect(971, 265, 28, 2);  //Window (B.Right)
  //Building 1 (Right)

  //Building 1 (Left)
  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(255, 239, 205); //Pale Yellow
  }else{
    fill(234, 215, 181); //Darker Pale Yellow
  }
  rect(540, 100, 50, 200);
  rect(590, 120, 20, 5); //Sign
  rect(590, 200, 20, 5); //Sign

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(234, 112, 108); //Pale Red
  }else{
    fill(206, 91, 91); //Darker Pale Red
  }
  rect(600, 115, 50, 100); //Sign

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(255, 239, 205); //Pale Yellow
  }else{
    fill(234, 215, 181); //Darker Pale Yellow
  }
  rect(605, 120, 40, 90); //Sign

  push();
  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(85, 52, 148); //Bright-ish Dark Blue
  }else{
    fill(255); //Brighter Bright-ish Dark Blue
    if(S % 2){  //Light Blinking Effect
      fill(117, 91, 178);
    }
  }
  textSize(25);
  textStyle(BOLD)
  text("ホ", 613, 150);
  text("テ", 613, 180);
  text("ル", 613, 210);  //Hotel
  pop();

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(80); //Dark Grey
  }else{
    fill(40); //Darker Grey
  }
  rect(590, 210, 20, 5); //Sign
  rect(590, 245, 20, 5); //Sign

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(119); //Light grey
  }else{
    fill(70); //Darker Light Grey
  }
  rect(610, 200, 60, 60); //Sign

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(80); //Dark Grey
  }else{
    fill(40); //Darker Grey
  }
  rect(610, 200, 25, 60); //Sign

  push();
  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(80);
  }else{
    fill(150);
    if(S % 2){  //Light Blinking Effect
      fill(255);
    }
  }
  textSize(8);
  textStyle(BOLD);
  text("ミ", 655, 213);
  text("ッ", 655, 226);
  text("キ", 655, 239);
  text("|", 659, 252);
  text("マ", 640, 213);
  text("ウ", 640, 226);
  text("ス", 640, 239);  //Mickey Mouse!
  pop();

  if(H > 3 && H < 19){//4am to 7pm lighter color
    fill(247, 223, 181);  //Dark Pale Yellow
  }else{
    fill(221, 194, 151); //Darker Dark Pale Yellow
  }
  rect(540, 100, 55, 10);
  rect(540, 160, 55, 10);
  rect(540, 220, 55, 10);

  if(H > 3 && H < 19){//4am to 7pm lighter color
  fill(234, 206, 150); //Dark Pale Yellow Shadow
  }else{
    fill(209, 180, 130); //Darker Dark Pale Yellow Shadow
  }
  rect(540, 110, 50, 2);
  rect(540, 170, 50, 2);
  rect(540, 230, 50, 2);
  //Building 1 (Left)
  //SANFRANSTOKYO
}

function drawstars(){
  var H = hour();

  //Draws Stars in the sky after 7pm
    if(H > 3 && H < 19){
    }else{
      fill(255);
      rect(600, 100, 5, 1);
      rect(602, 98, 1, 5);
      rect(700, 150, 5, 1);
      rect(702, 148, 1, 5);
      rect(800, 80, 5, 1);
      rect(802, 78, 1, 5);
      rect(750, 40, 5, 1);
      rect(752, 38, 1, 5);
      rect(888, 120, 5, 1);
      rect(890, 118, 1, 5);
      rect(940, 80, 5, 1);
      rect(942, 78, 1, 5);
      rect(620, 80, 5, 1);
      rect(622, 78, 1, 5);
      rect(760, 140, 5, 1);
      rect(762, 138, 1, 5);
    }
}


function secondstartotheright(){  //Peter Pan Easter Egg
  var H = hour();

  if(H > 2 && H < 23){  //Star only appears at 11pm
  }else{
    fill(175, 223, 249);
    rect(950, 70, 10, 1);
    rect(955, 66, 1, 10);
  }
}

function clock(){

  var H = hour();
  var M = minute();
  var S = second();

  //WALL-E's Eve
  fill(250);  //Arms
  ellipse(559, 240, 10, 22);
  ellipse(580, 240, 10, 22);
  fill(255); //Body
  ellipse(570, 220, 27, 27);
  ellipse(570, 240, 22, 50);
  fill(0);  //Face
  ellipse(570, 220, 20, 15);
  if(H == 8 && M == 30 && S%2){  //If it is 8:30 am the alarm starts (her eyes blink green) for Hiro to wake up and go to class
    fill(62, 173, 50); //Green Eyes
  }else{
    fill(80, 159, 214); //Blue Eyes
  }
  ellipse(566, 220, 5, 8);
  ellipse(574, 220, 5, 8);
  //WALL-E's Eve

  //The clock
  fill(50);
  rect(550, 260, 70, 40, 10);
  rect(560, 257, 10, 5, 5);
  rect(572, 257, 10, 5, 5);
  fill(0);
  rect(565, 265, 50, 30, 5);
  //The clock

  if(S % 4){  //Blink Blink
    fill(198, 0, 0);

    if (H > 12 || H == 0) { //Converts it to twelve hour clock
      H = abs(H - 12)}
    if(M < 10){
      text(H + " : 0" + M, 575, 285); //If the time is before 10 minutes it still shows two digits "01, 02, etc"
    }
    text(H + " : " + M, 575, 285) //Shows time on the clock
  }else{
    fill(0);
  }
}

function chair(){
  //CHAIR
  fill(50); //Close To Black
  rect(200, 250, 140, 120, 10);
  rect(260, 370, 20, 20);
  rect(200, 380, 140, 20);
  rect(265, 390, 10, 40);
  rect(260, 420, 20, 40);
  rect(210, 460, 120, 15);
  ellipse(215, 480, 20);
  ellipse(325, 480, 20);
  ellipse(270, 480, 20);
  //CHAIR
}

function baymaxhead(){
  fill(255);  //Baymax's Head
  ellipse(50, 280, 50, 40);
  ellipse(43, 282, 40, 35);
  ellipse(57, 282, 40, 35);

  fill(0);  //Baymax's Eyes
  ellipse(40, 280, 10, 10);
  ellipse(60, 280, 10, 10);
  rect(40, 278, 20, 2);

  fill(122, 81, 53); //Brown
  rect(10, 290, 80, 10);  //Plate-like thing
}

function tangledportrait(){
  fill(163, 107, 160); //Purple
  rect(300, 170, 60, 25);
  fill(45, 47, 85); //Dark Blue
  rect(300, 195, 60, 20);
  fill(248, 172, 147); //Peach

  image(tangled, 313, 175, tangled.width/8, tangled.height/8);

  if(mouseIsPressed && mouseX >= 300 && mouseX <= 360 && mouseY >= 170 && mouseY <= 215 ){ //When you click on the photo an image will pop on the computer screen
    fill(163, 107, 160); //Purple
    rect(90, 155, 180, 70);

    //Clouds
    for(var i = 0; i < 5; i++){
      fill(111, 90, 155);
      ellipse(118 + 300 * i/12, 225, 50, 30);
    }
    //Clouds

    //Castle
    fill(34, 35, 59); //Dark Blue

    rect(160, 200, 60, 40);
    rect(150, 215, 80, 40);
    rect(180, 175, 10, 60);
    rect(190, 190, 15, 60);
    rect(170, 190, 5, 60);
    //Castle

    fill(45, 47, 85); //Dark Blue
    rect(90, 225, 180, 35);
    for(var i = 0; i < 5; i++){ //The Lanterns
      var x = 5;
      var y = 10;
      fill(248, 172, 147); //Peach
      rect((110) + i/7 * 240, 170 + i, x, y);
      rect((170) + i/10 * 150, 195 - i/2, x/1.3, y/1.3);
      rect((170) + i/4 * 30, 210 + i/2, x/2, y/2);
      fill(254, 218, 181); //Light Yellow
      rect((110) + i/7 * 240, 178 + i, x, y/4);
      rect((170) + i/10 * 150, 201 - i/2, x/1.3, y/6);
      rect((170) + i/4 * 30, 214 + i/2, x/2, y/9);
    }

    //Boat
    fill(248, 228, 196);  //Yellow (Rapunzel's Hair)
    rect(200, 237, 2, 5);
    rect(205, 237, 2, 5);
    fill(99, 48, 46); //Brown
    rect(200, 240, 20, 5);
    triangle(200, 240, 195, 240, 200, 245);
    triangle(220, 240, 225, 240, 220, 245);
    //Boat
  }

}

function liloandstitchportrait() {
  fill(253, 244, 172); //Yellow
  rect(380, 160, 60, 35);
  fill(117, 178, 225); //Blue
  rect(380, 191, 60, 10);
  fill(93, 158, 198); //Blue
  rect(380, 193, 60, 10);
  fill(82, 143, 181); //Blue
  rect(380, 195, 60, 10);

  push();
  beginShape();
  fill(251, 178, 81); //Orange
  curveVertex(400, 200);
  curveVertex(380, 205);
  curveVertex(405, 190);
  curveVertex(440, 205);
  curveVertex(490, 240);
  endShape();
  pop();
  image(liloandstitchsurfboard, 415, 163, liloandstitchsurfboard.width/7, liloandstitchsurfboard.height/9);
  fill(251, 178, 81); //Orange
  rect(415, 198, 10, 5);


  if(mouseIsPressed && mouseX >= 380 && mouseX <= 440 && mouseY >= 160 && mouseY <= 205){ //When you click on the photo an image will pop on the computer screen
    fill(253, 244, 172); //Yellow
    rect(90, 155, 180, 80)

    //Ocean
    fill(117, 178, 225); //Blue
    rect(90, 240, 180, 20);
    fill(93, 158, 198); //Blue
    rect(90, 235, 180, 5);
    fill(82, 143, 181); //Blue
    rect(90, 230, 180, 5);
    //Ocean

    //Sand
    push();
    beginShape();
    fill(251, 178, 81); //Orange
    curveVertex(100, 200);
    curveVertex(90, 260);
    curveVertex(170, 220);
    curveVertex(270, 260);
    curveVertex(300, 230);
    endShape();
    pop();
    //Sand

    image(liloandstitch, 145, 192, liloandstitch.width/5, liloandstitch.height/5);
  }
}

function bighero6portrait(){
  fill(208, 35, 39); //Red
  rect(370, 220, 50, 50);
  fill(255);
  rect(375, 225, 40, 15);
  rect(375, 245, 40, 5);
  rect(375, 255, 40, 15);

  if(mouseIsPressed && mouseX >= 370 && mouseX <= 420 && mouseY >= 220 && mouseY <= 270){ //When you click on the photo an image will pop on the computer screen
    fill(208, 35, 39); //Red
    rect(90, 155, 180, 105);
    image(bighero6, 105, 172, bighero6.width/1.5, bighero6.height/1.5)
  }
}
