lines (26 sloc)  979 Bytes
size(640, 384);
 background (156, 12, 245); //color of the background (purple)
 strokeWeight(3); //How thick the lines around the boxes are
 stroke(28, 12, 245);//The color of the strokes (blue)
 smooth();
}
void draw() {//function that will be used to draw boxes. the different integers affect both the size and spacing of the boxes
 int x1 = w*index;
 int x2 = x1 + w;
 int y1 = h*23;
 int y2 = h*24;

 if (random(8) < 5) {//changes the probability 
  fill (156, 12, 245); //if its less than 5, draw a box with this color (purple)
 rect(x2, y1, x1, y2);
 } else {//if it is greater than 5, draw a box with this color (turquoise)
 fill(12, 245, 214);
 rect(x1, y1, x2, y2);
 }
 index++;//increase the position each time (move left to right)
 if (index == width/w) {//if the boxes reach the end of the width, it will start a new line
 PImage p = get(0, h, width, h*23);
 background(156, 12, 245);
 set(0, 0, p);
 index = 0;//will start back on the left and go left to right
 }
}
