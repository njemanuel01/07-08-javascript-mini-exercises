// Gets hamburger menu
//
// Returns Element
function get_hamburger_menu() {
  return document.getElementById("hamburger_menu");
}
// Sets a toggle on our menu to show/hide
// 
// Returns nothing
function toggle_hamburger_menu() {
  var h = get_hamburger_menu();
  h.classList.toggle("grow_hamburger_menu");
  h.classList.toggle("shrink_hamburger_menu");  
}

window.onload = function() {
  var x = document.getElementsByClassName("menu");
  x[0].addEventListener("click", toggle_hamburger_menu); 
}