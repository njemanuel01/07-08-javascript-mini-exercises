var current_shown_section = "about";

// This adds/removes a class off of an element, setting a certain div as visible
// 
// This accepts one argument, the element we wish to change
// 
// There is no return.
function change_to_visible(element) {
  element.classList.add("visible");
  element.classList.remove("invisible");
}
// This adds/removes a class off of an element, setting a certain div as invisible
// 
// This accepts one argument, the element we wish to change
// 
// There is no return.
function change_to_invisible(element) {
  element.classList.add("invisible");
  element.classList.remove("visible");
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

function shows_this_paragraph() {
  make_uniform_elements("bar", change_to_visible);
  make_uniform_elements("paragraph", change_to_invisible);
  //Step 1 - Use current_shown_section and get the associated element.
  //Step 2 - Get element's children
  //Step 3 - Do opposite of make_paragraph_visible
  make_paragraph_visible(this);
  //Step 4 - Set current_shown_section to be this.id
  
}

function find_element_from_array(array, class_name_to_find) {
  for (i=0; i < array.length; i++) {
    if (array[i].className.indexOf(class_name_to_find) != -1) {
      return array[i];
    }
  }
}

function make_paragraph_visible(element) {
  var cNodes = element.children;
  //the zeroeth element is the bar
  //the first element is the paragraph
  change_to_visible(find_element_from_array(cNodes, "paragraph"));
  change_to_invisible(find_element_from_array(cNodes, "bar"));
  // change_to_visible(cNodes[1]);
}

window.onload = function() {
  document.getElementById("blog").addEventListener("click", shows_this_paragraph);
  document.getElementById("about").addEventListener("click", shows_this_paragraph);
  document.getElementById("services").addEventListener("click", shows_this_paragraph);
  document.getElementById("portfolio").addEventListener("click", shows_this_paragraph);
  document.getElementById("contact").addEventListener("click", shows_this_paragraph);
}