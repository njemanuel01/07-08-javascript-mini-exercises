var menu_added = false;

function get_hamburger_menu() {
  return document.getElementById("hamburger_menu");
}

function add_class_to_hamburger_menu() {
  var h = get_hamburger_menu();
  h.classList.add("grow_hamburger_menu");
}

function remove_class_to_hamburger_menu() {
  var h = get_hamburger_menu();
  h.classList.remove("grow_hamburger_menu");
}

function set_hamburger_menu() {
  if (menu_added){
    remove_class_to_hamburger_menu();
  } else {
    add_class_to_hamburger_menu();
  }
}

window.onload = function() {
  var x = document.getElementsByClass("menu");
  x[0].addEventListener("click", set_hamburger_menu); 
}