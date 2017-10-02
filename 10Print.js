int w = 16; //variables represented by int
int h = 16;
int index = 0;
void setup() {
 size(640, 384);
 background(#0000ff); //code for the background
 strokeWeight(1);//how thick the stroke should be (changed this)
 stroke(224);
 smooth();
}
void draw() {//function for drawing the lines
 int x1 = w*index;
 int x2 = x1 + w;
 int y1 = h*23;
 int y2 = h*24;
 if (random(8) < 5) {//how often each line will appear (changed this)
 line(x2, y1, x1, y2); //forward slash line (will appear more frequantly
 } else {
 line(x1, y1, x2, y2); //backslash (will appear less frquently
 }
 index++; //increase the index
 if (index == width/w) { //once the lines fill up the width, the code below ensures that it starts on a new line
 PImage p = get(0, h, width, h*23);
 background(#0000dd);
 set(0, 0, p);
 index = 0;//resets the index at 0 when it restarts, always goes left to right
 }
}
