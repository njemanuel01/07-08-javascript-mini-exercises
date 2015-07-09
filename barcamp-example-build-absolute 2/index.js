// Declare  global variable
var menu_added = false;

// Gets hamburger menu
//
// Returns Element
function get_hamburger_menu() {
  return document.getElementById("hamburger_menu");
}

function toggle_hamburger_menu() {
  
}
function add_class_to_hamburger_menu() {
  var h = get_hamburger_menu();
  h.classList.add("grow_hamburger_menu");
  h.style.height = "200px";
  menu_added = true;
}

function remove_class_to_hamburger_menu() {
  var h = get_hamburger_menu();
  h.classList.remove("grow_hamburger_menu");
  h.style.height = "0px";
  menu_added = false;
}

function set_hamburger_menu() {
  if (menu_added){
    remove_class_to_hamburger_menu();
  } else {
    add_class_to_hamburger_menu();
  }
}

window.onload = function() {
  var x = document.getElementsByClassName("menu");
  x[0].addEventListener("click", set_hamburger_menu); 
}