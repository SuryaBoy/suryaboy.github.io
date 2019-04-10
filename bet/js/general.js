// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("instBtn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

// open the modal by default at first
modal.style.display = "block";

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function(event) {
	if(event.target.parentNode.parentNode.parentNode.classList.contains('modal')) {
		event.target.parentNode.parentNode.parentNode.style.display = "none";
	}
}

span2.onclick = function(event) {
	if(event.target.parentNode.parentNode.parentNode.classList.contains('modal')) {
		event.target.parentNode.parentNode.parentNode.style.display = "none";
	}
}

// When the user clicks anywhere outside of the modal, close it, except for the ask modal
window.onclick = function(event) {
  if (event.target.classList.contains('modal') && (event.target.id !='askModal')) {
    event.target.style.display = "none";
  }
}