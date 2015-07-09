//Declare variable
var content = {ipsum: "oiwnefoiwndknowindfoiwndfkowodfn", lorem: "Lorem ipsum dolor sit amet, consectetur", dolor: "dddddddddddd"};

//Gets content
//
// input - String for element id
//
// Returns a string
function find_content(input) {
  return content[input];
}

//Pushes content to div
//
// input - String for element id
//
// Returns nothing
function push_content(input) {
  document.getElementById("content").innerHTML = find_content(input);
}


//displays content for this button in content div
//
// returns nothing
function pull_tab_id_and_push_its_content() {
  push_content(this.id)
}


window.onload = function() { 
  var all = document.getElementsByClassName("tab");
  for (i = 0; i < all.length; i++) {
    all[i].addEventListener("click", pull_tab_id_and_push_its_content);
  }
  
}