import "./styles/index.scss";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

const BG_COLOR = "#FAEED1";
const COLORS = ["#607274", "#FAEED1", "#DED0B6", "#B2A59B"];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

// Objects
class MyObject {
  x: number;
  y: number;
  radius: number;
  color: string;
  constructor(x: number, y: number, radius: number, color: string) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  private draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  public update() {
    this.draw();
  }
}

// Implementation
let objects: MyObject[];
function init() {
  objects = [];

  for (let i = 0; i < 400; i++) {
    // objects.push();
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // objects.forEach(object => {
  //  object.update()
  // })
}

init();
animate();
