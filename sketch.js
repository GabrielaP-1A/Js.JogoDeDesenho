function setup() {
    createCanvas(800, 800);
    background("white");
  }
  
  function draw() { 
    if (mouseIsPressed) {
      fill("black");
      circle(mouseX, mouseY, 15);  // Desenha um círculo de 15 pixels de diâmetro
    }
  }
  