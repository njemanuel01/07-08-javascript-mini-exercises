function change_to_visible(element) {
  element.classList.add("visible");
  element.classList.remove("invisible");
}

function change_to_invisible(element) {
  element.classList.add("invisible");
  element.classList.remove("visible");
}



function shows_this_paragraph() {
  var bars = document.getElementsByClassName("bar");
  for (i = 0; i < bars.length; i++ ){
    change_to_visible(bars[i]);
  }
  
  var paragraphs = document.getElementsByClassName("paragraph");
  for (i = 0; i < paragraphs.length; i++ ){
    change_to_invisible(paragraphs[i]);
  }
  
  var cNodes = this.children;
  //the zeroeth element is the bar
  //the first element is the paragraph
  change_to_invisible(cNodes[0]);
  change_to_visible(cNodes[1]);
  
}

window.onload = function() {
  document.getElementById("blog").addEventListener("click", shows_this_paragraph);
  document.getElementById("about").addEventListener("click", shows_this_paragraph);
  document.getElementById("services").addEventListener("click", shows_this_paragraph);
  document.getElementById("portfolio").addEventListener("click", shows_this_paragraph);
  document.getElementById("contact").addEventListener("click", shows_this_paragraph);
}