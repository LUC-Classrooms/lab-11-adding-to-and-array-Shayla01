
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1); //create a new array of one eleemnt and assign it to "dots". 

function setup() { //set yp sketch 
  createCanvas(500, 300); //set up the canvas 
  dots[0] = new Dot(width/2, height/2); 
  //initalize the dots array index 0 with a new instance of the dot class
} //end of the setup function 

function draw() { // draw something (60x per second)
  background(200); //set background color 
  
  for(let i = 0; i < dots.length; i++){ //loop through the array 
    dots[i].move(); // move each object 
    dots[i].display(); //display each object 
  }
  textSize(24); // set the text size 
  fill(100, 0, 200); //set the text color 
  text("'dots' array length: " + dots.length, 100, 100); //display the size of the array on screen 

} // end of draw function 

function mousePressed(){ // when the mosue is clicked 
  let obj = new Dot(mouseX, mouseY); //create a new dot object 
  dots.push(obj); // add it to the dots array 
  console.log(dots.length); // print the size of the array in the console 
  
  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */

} // end of when mouse is pressed 


function Dot(X, Y){ //constructor function 
  
  this.x = X; //set the X property from the first argument 
  this.y = Y; // set the Y property from the second argument 
  this.w = random (20, 50); // random width 
  this.sx = random(-5, 5); // set the X speed 
  this.sy = random(-5, 5); /// set the Y speed 
  this.r = random(0, 255); // set red level 
  this.g = random(0, 255); // set the green level 
  this.b = random(0, 255); // set the blue level 
  
  this.display = function(){ // show the object 
    fill(this.r, this.g, this.b); // set the color 
    ellipse(this.x, this.y, this.w, this.w); // draw a circle 
  } // end of display method 
  
  this.move = function(){ // move the object 
    this.x += this.sx; // update horozontal location 
    this.y += this.sy; // update vertical location 
    
    if (this.x < 0 || this.x > width){ //if off screen horozontally 
        this.sx *= -1; // change direction 
    } // end of if statement 
    if (this.y < 0 || this.y > height){ // if off screen vertically 
        this.sy *= -1; // change direction 
    } // end of if function 
  } // end of move method 
    
} // end of dot constructor 
