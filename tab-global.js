//Declare variable
var content = {ipsum: "oiwnefoiwndknowindfoiwndfkowodfn", lorum: "Lorem ipsum dolor sit amet, consectetur", dolor: "dddddddddddd"};

//Gets content
function find_content(input) {
  return content.input;
}

//Pushes content to div
function push_content(input) {
  document.getElementById("content").innerText = find_content(input);
}

function tab_click() {
  push_content(this.id)
}

 