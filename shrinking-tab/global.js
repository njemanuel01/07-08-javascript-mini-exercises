function run_on_scroll () {
  if (this.scrollY > 200) {
    document.getElementById("image-to-stay").classList.add("show");
    document.getElementById("image-to-stay").classList.remove("hide");
    document.getElementById("image-to-go").classList.add("hide");
    document.getElementById("image-to-go").classList.remove("show");
    document.getElementsByTagName("header")[0].style.height = "50px";
  } else {
    document.getElementById("image-to-go").classList.add("show");
    document.getElementById("image-to-go").classList.remove("hide");
    document.getElementById("image-to-stay").classList.add("hide");
    document.getElementById("image-to-stay").classList.remove("show");
    document.getElementsByTagName("header")[0].style.height = "100px";
  }
}

window.onload = function() {
  window.addEventListener("scroll", run_on_scroll);
}