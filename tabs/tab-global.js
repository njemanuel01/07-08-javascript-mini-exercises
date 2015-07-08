//Declare variable
var content = {ipsum: "oiwnefoiwndknowindfoiwndfkowodfn", lorum: "Lorem ipsum dolor sit amet, consectetur", dolor: "dddddddddddd"};

//Gets content
function find_content(input) {
  return content[input];
}

//Pushes content to div
function push_content(input) {
  document.getElementById("content").innerHTML = find_content(input);
}


//TODO - this could use a better name
//displays content for this button in content div
//
// returns nothing
function pull_tab_id_and_push_its_content() {
  push_content(this.id)
}


window.onload = function() {
  
  document.getElementById("ipsum").addEventListener("click", pull_tab_id_and_push_its_content);
  document.getElementById("lorum").addEventListener("click", pull_tab_id_and_push_its_content);
  document.getElementById("dolor").addEventListener("click", pull_tab_id_and_push_its_content);
  
}