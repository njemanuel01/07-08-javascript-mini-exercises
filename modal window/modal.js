// Shows the modal window on the page
//
// Returns nothing
function open_modal_window() {
  document.getElementById("backgrounddimmer").style.display = "block";
}

// Closes the modal window on the page
//
// Returns nothing
function close_modal_window() {
  document.getElementById("backgrounddimmer").style.display = "none";
}

window.onload = function() {
  document.getElementById("open_window").onclick = open_modal_window;
  document.getElementById("xtoclose").onclick = close_modal_window;
}