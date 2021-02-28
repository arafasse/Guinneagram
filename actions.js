document.getElementById("afterclick").style.display="none";
var e1 = document.getElementById("q1");
var m1 = document.getElementById("q2");
var l1 = document.getElementById("q3");
var b1 = document.getElementById("q4");
var h1 = document.getElementById("q5");
var h2 = document.getElementById("q6");
var e2 = document.getElementById("q7");
var b2 = document.getElementById("q8");
var h3 = document.getElementById("q9");
var l2 = document.getElementById("q10");
var m2 = document.getElementById("q11");
var b3 = document.getElementById("q12");
var m3 = document.getElementById("q13");
var l3 = document.getElementById("q14");
var e3 = document.getElementById("q15");

var button1 = document.getElementById("button1");

var output1 = document.getElementById("v1")
var output2 = document.getElementById("v2")
var output3 = document.getElementById("v3")
var output4 = document.getElementById("v4")
var output5 = document.getElementById("v5")
var output6 = document.getElementById("v6")
var output7 = document.getElementById("v7")
var output8 = document.getElementById("v8")
var output9 = document.getElementById("v9")
var output10 = document.getElementById("v10")
var output11 = document.getElementById("v11")
var output12 = document.getElementById("v12")
var output13 = document.getElementById("v13")
var output14 = document.getElementById("v14")
var output15 = document.getElementById("v15")

output1.innerHTML = e1.value;
output2.innerHTML = m1.value;
output3.innerHTML = l1.value;
output4.innerHTML = b1.value;
output5.innerHTML = h1.value;
output6.innerHTML = h2.value;
output7.innerHTML = e2.value;
output8.innerHTML = b2.value;
output9.innerHTML = h3.value;
output10.innerHTML = l2.value;
output11.innerHTML = m2.value;
output12.innerHTML = b3.value;
output13.innerHTML = m3.value;
output14.innerHTML = l3.value;
output15.innerHTML = e3.value;


e1.oninput = function() {
  output1.innerHTML = this.value;
}

m1.oninput = function() {
  output2.innerHTML = this.value;
}

l1.oninput = function() {
  output3.innerHTML = this.value;
}

b1.oninput = function() {
  output4.innerHTML = this.value;
}

h1.oninput = function() {
  output5.innerHTML = this.value;
}

h2.oninput = function() {
  output6.innerHTML = this.value;
}

e2.oninput = function() {
  output7.innerHTML = this.value;
}

b2.oninput = function() {
  output8.innerHTML = this.value;
}

h3.oninput = function() {
  output9.innerHTML = this.value;
}

l2.oninput = function() {
  output10.innerHTML = this.value;
}

m2.oninput = function() {
  output11.innerHTML = this.value;
}

b3.oninput = function() {
  output12.innerHTML = this.value;
}

m3.oninput = function() {
  output13.innerHTML = this.value;
}

l3.oninput = function() {
  output14.innerHTML = this.value;
}

e3.oninput = function() {
  output15.innerHTML = this.value;
}


getScore.onclick = function() {

  var a = document.getElementById("hidden_row1");
  var b = document.getElementById("hidden_row2");
  var c = document.getElementById("hidden_row3");
  var d = document.getElementById("hidden_row4");
  var e = document.getElementById("hidden_row5");

  if (a.style.display !== "none") {
    a.style.display = "none";
  }
  if (b.style.display !== "none") {
    b.style.display = "none";
  }
  if (c.style.display !== "none") {
    c.style.display = "none";
  }
  if (d.style.display !== "none") {
    d.style.display = "none";
  }
  if (e.style.display !== "none") {
    e.style.display = "none";
  }

  var x = document.getElementById("afterclick");
  if (x.style.display === "none") {
    x.style.display = "block"; 
  }

  var edith = parseInt(e1.value) + parseInt(e2.value) + parseInt(e3.value);
  var mabel = parseInt(m1.value) + parseInt(m2.value) + parseInt(m3.value);
  var lola = parseInt(l1.value) + parseInt(l2.value) + parseInt(l3.value);
  var hester = parseInt(h1.value) + parseInt(h2.value) + parseInt(h3.value);
  var barbara = parseInt(b1.value) + parseInt(b2.value) + parseInt(b3.value);
  var allScores = [edith, mabel, lola, hester, barbara];

  var yourType = "";

  var max = Math.max(...allScores);
  

  for (var i = 0; i < allScores.length; i++) {
    console.log(i);
    console.log(allScores[i]);
    console.log(max);
    if (allScores[i]==max) {
      if (i==0) {
        if (yourType !== "") {
          yourType = yourType.concat(" and ");
        }
        yourType = yourType.concat("an Edith");
        showHideRow('hidden_row1');
      }          
      else if (i==1) {
        if (yourType !== "") {
          yourType = yourType.concat(" and ");
        }
        yourType = yourType.concat("a Mabel");
        showHideRow('hidden_row2');
      }
      else if (i==2) {
        if (yourType !== "") {
          yourType = yourType.concat(" and ");
        }
        yourType = yourType.concat("a Lola");
        showHideRow('hidden_row3');
      }
      else if (i==3) {
        if (yourType !== "") {
          yourType = yourType.concat(" and ");
        }
        yourType = yourType.concat("a Hester");
        showHideRow('hidden_row4');
      }
      else if (i==4) {
        if (yourType !== "") {
          yourType = yourType.concat(" and ");
        }
        yourType = yourType.concat("a Baahbara");
        showHideRow('hidden_row5');
      }
    }

  }
  yourType = yourType.concat(".")
  var intro = "Congratulations! You are ";
  yourType = intro.concat(yourType);


  // come back and write this as a separate function
  // i have so much to do WHY AM I DOING THIS 
  


  document.getElementById("escore").innerHTML = edith;
  document.getElementById("mscore").innerHTML = mabel;
  document.getElementById("lscore").innerHTML = lola;
  document.getElementById("hscore").innerHTML = hester;
  document.getElementById("bscore").innerHTML = barbara;


  document.getElementById("mainType").innerHTML =yourType;
}


function stuff (row) {
  var currentRow = document.getElementById(row);
  if (currentRow.style.display == '') {
    currentRow.style.display = 'none';
  }
  else {
    currentRow.style.display = '';
  }    
} 


function getAllIndexes(arr, val) {
  var indexes = [], i = -1;
  while ((i = arr.indexOf(val, i+1)) != -1){
    indexes.push(i);
  }
  return indexes;
}

//var slideIndex = 1;

var slideshowE = document.getElementById("slideshowE");
slideshowE.slideIndex = 1;
showSlides(slideshowE.slideIndex, slideshowE);

var slideshowM = document.getElementById("slideshowM");
slideshowM.slideIndex = 1;
showSlides(slideshowM.slideIndex, slideshowM);

var slideshowL = document.getElementById("slideshowL");
slideshowL.slideIndex = 1;
showSlides(slideshowL.slideIndex, slideshowL);

var slideshowH = document.getElementById("slideshowH");
slideshowH.slideIndex = 1;
showSlides(slideshowH.slideIndex, slideshowH);

var slideshowB = document.getElementById("slideshowB");
slideshowB.slideIndex = 1;
showSlides(slideshowB.slideIndex, slideshowB);



// Next/previous controls
function plusSlides(n, slideshow) {
  slideshow.slideIndex += n;
  var slides = slideshow.getElementsByClassName("mySlides");
  
  if (slideshow.slideIndex > slides.length){ // this is hard-coded, which is not great... can fix later
    slideshow.slideIndex = 1;
  }
  else if (slideshow.slideIndex < 1) {
    slideshow.slideIndex = slides.length;
  }
  showSlides(slideshow.slideIndex, slideshow);
}

// Thumbnail image controls
function currentSlide(n, slideshow) {
  showSlides(slideshow.slideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  var i;
  var slides = slideshow.getElementsByClassName("mySlides");
  var dots = slideshow.getElementsByClassName("dot");
  if (n > slides.length) {slideshow.slideIndex = 1} 
  if (n < 1) {slideshow.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideshow.slideIndex-1].style.display = "block"; 
  dots[slideshow.slideIndex-1].className += " active";
}
