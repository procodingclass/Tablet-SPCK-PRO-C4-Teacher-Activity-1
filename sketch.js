var input, heading;
function setup() {
  createCanvas(400, 400);

  input = createInput();
  input.position(5, 60);

  heading = createElement("h4", "Enter any alphabet:");
  heading.position(5, 20);

  textAlign(CENTER);
  textSize(50);
}

function draw() {
  background("orange");

  //generate random alphbet
  var value = input.value();

  // Write Code for switch statement
}
