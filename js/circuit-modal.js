window.onload = function() {
	// Get the modal
	var modal = document.getElementById('modal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	/*var imgCircuit = document.getElementById('img-circuit');
	var imgMoist = document.getElementById('img-moist');
	var imgCapteurs = document.getElementById('img-moist-circ');*/
	var imgs = document.getElementsByClassName('img-standard');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");

	for (var i = 0; i < imgs.length; i++) {
		imgs[i].onclick = function() {
	    	modal.style.display = "block";
	   		modalImg.src = this.src;
	    	captionText.innerHTML = this.alt;
		}
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}
}
