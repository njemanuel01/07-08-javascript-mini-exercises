// Change the classes on the specified element
// 
// Takes 3 arguments, the String of the element_name we want to change, the String
// of the class_to_add to the Element, and the String of the class_to_remove
// from the Element.
// 
// Returns nothing
function change_attached_class(element_name, class_to_add, class_to_remove) {
  document.getElementById(element_name).classList.add(class_to_add);
  document.getElementById(element_name).classList.remove(class_to_remove);
}
// Changes the classes of two images and the height of the header based on the y-position
// of the scroll.
// 
// Returns nothing.
function run_on_scroll () {
  if (this.scrollY > 200) {
    change_attached_class("image-to-stay", "show", "hide");
    change_attached_class("image-to-go", "hide", "show");
    document.getElementsByTagName("header")[0].style.height = "50px";
  } else {
    change_attached_class("image-to-go", "show", "hide");
    change_attached_class("image-to-stay", "hide", "show");
    document.getElementsByTagName("header")[0].style.height = "100px";
  }
}

window.onload = function() {
  window.addEventListener("scroll", run_on_scroll);
}