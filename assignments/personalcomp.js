function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("grey");
    
    let shapeSize = 100;
    let x = 200;
    let y = 200;
    
    drawShape(x, y, shapeSize);
  }
  
  
  function drawShape(x, y, shapeSize) {
    strokeWeight(5);
    
    fill("red");
    square(x, y, shapeSize);
    
    let eyeSize = shapeSize / 4;
    let leftEyeX = x + shapeSize / 4;
    let rightEyeX = x + shapeSize - shapeSize / 4;
    let eyeY = y + shapeSize / 4;
    
    fill("purple");
    circle(leftEyeX, eyeY, eyeSize);
    circle(rightEyeX, eyeY, eyeSize);
    
    let mouthSize = shapeSize / 3;
    let mouthX = x + mouthSize;
    let mouthY = y + shapeSize - shapeSize / 4;
        
    line(mouthX, mouthY, mouthX + mouthSize, mouthY);
    ;
  }