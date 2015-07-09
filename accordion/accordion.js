var current_shown_section = "about";

// this function will add a class if it isn't there and removes it if it is
//
// element is a DOM element
//
// returns nothing useful
function toggle_visibility(element) {
  element.classList.toggle("invisible");
  element.classList.toggle("visible");
}

// This calls a select method on each element of a class of our choice.
// 
// This accepts 2 arguments, the String of a class_name of the class we want to change, and
// the Function of method we want to apply, called method_name_to_call
// 
// 
function make_uniform_elements(class_name, method_name_to_call) {
  var all = document.getElementsByClassName(class_name);
  for (i = 0; i < all.length; i++ ){
    method_name_to_call(all[i]);
  }
}

// using the current_shown_section variable, we hide the paragraph and show the bar
//
// returns nothing
function reset_last_section () {
  var this_element = document.getElementById(current_shown_section);
  toggle_paragraph_and_bar(this_element);
}

// cycles through a class list array until it finds an element with the class_name_to_find
//
// array - array of Elements
// class_name_to_find - String of the class we are trying to find among the array of Elements
//
// returns an Element matching the class_name
function find_element_from_array(array, class_name_to_find) {
  for (i=0; i < array.length; i++) {
    if (array[i].className.indexOf(class_name_to_find) != -1) {
      return array[i];
    }
  }
}

// for the element, finds the element's bar and paragraph children and toggles them visible/invisible
//
// element - DOM element
//
// returns nothing
function toggle_paragraph_and_bar(element) {
  var cNodes = element.children;
  toggle_visibility(find_element_from_array(cNodes, "paragraph"));
  toggle_visibility(find_element_from_array(cNodes, "bar"));
}

// hides previous section and shows this clicked section
//
// returns nothing
function shows_this_paragraph() {  
  reset_last_section();
  toggle_paragraph_and_bar(this);
  current_shown_section = this.id;
}


window.onload = function() {
  var all = document.getElementsByClassName("section");
  for (i = 0; i < all.length; i++) {
    all[i].addEventListener("click", shows_this_paragraph);
  }
}