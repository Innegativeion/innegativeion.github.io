var imageThumbs = document.getElementById("image-thumbs");

var currentImage = document.getElementById("current-image");

for (var i = 1; i <= 8; i++) {
var thumb = document.createElement("img");
thumb.src = "pictures/InUseCharacter/Image" + i + ".png";
thumb.alt = "Image " + i;
thumb.classList.add("thumb");
imageThumbs.appendChild(thumb);

thumb.addEventListener(
  "click", function() {
	
	currentImage.src = this.src;
	currentImage.alt = this.alt;
  }
);
}

