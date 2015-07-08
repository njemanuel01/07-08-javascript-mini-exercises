var max_length = 3;
var id_array = ["first_three", "second_three", "last_four"];

function cycle_id(element) {
  var current_index = id_array.indexOf(element.id);
  return id_array[++current_index];
}

function move_to_next_field(element) {
  document.getElementById(cycle_id(element)).focus();
}

function check_and_move() {
  if (this.value.length == max_length) {
    move_to_next_field(this);
  }
}

window.onload = function() {
  document.getElementById("first_three").oninput = check_and_move;
  document.getElementById("second_three").oninput = check_and_move;
}