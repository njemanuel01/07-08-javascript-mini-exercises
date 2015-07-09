// Declare variables
var max_length = 3;
var id_array = ["first_three", "second_three", "last_four"];

// Gets the next field to move to
//
// element - DOM element
//
// Returns a String for the name of the id of the next field
function cycle_id(element) {
  var current_index = id_array.indexOf(element.id);
  return id_array[++current_index];
}

// Moves to the next element
//
// element - DOM element
//
// Returns nothing
function move_to_next_field(element) {
  document.getElementById(cycle_id(element)).focus();
}

// Checks to see if a field length at max_length and moves to the next field if true
//
// Returns nothing
function check_and_move() {
  if (this.value.length == max_length) {
    move_to_next_field(this);
  }
}

window.onload = function() {
  document.getElementById("first_three").oninput = check_and_move;
  document.getElementById("second_three").oninput = check_and_move;
}