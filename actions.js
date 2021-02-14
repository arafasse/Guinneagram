var slider = document.getElementById("q1");
var output = document.getElementById("val");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}