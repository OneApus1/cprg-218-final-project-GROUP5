var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var accordions = document.querySelectorAll('.accordion');

  accordions.forEach(function(accordion) {
      accordion.addEventListener('click', function() {
          this.classList.toggle('active');
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
          } else {
              panel.style.maxHeight = panel.scrollHeight + 'px';
          }
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('hero_banner');
  let angle = 0; // Starting angle
  let direction = 1; // 1 for clockwise, -1 for counterclockwise
  const speed = 0.35;

  function rotateText() {
    angle += direction; // Increase or decrease angle
    element.style.transform = `rotate(${angle}deg)`;

    // Reverse direction when angle reaches the limit
    if (angle >= 30 || angle <= -30) {
      direction *= -1;
    }

    requestAnimationFrame(rotateText); // Request next frame
  }

  rotateText(); // Start the rotation
});

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('parappa_motionless');
  let angle = 0;
  let scale = 1;
  let direction = 1;
  const speed = 0.1;
  const scaleSpeed = 0.01;

  function animate() {
    angle += direction;
    scale += scaleSpeed * direction;

    // Reverse the scaling direction at limits
    if (scale >= 1.5 || scale <= 0.5) {
      scaleSpeed *= -1;
    }

    element.style.transform = `rotate(${angle}deg) scale(${scale})`;

    if (angle >= 30 || angle <= -30) {
      direction *= -1;
    }

    requestAnimationFrame(animate);
  }

  animate();
});