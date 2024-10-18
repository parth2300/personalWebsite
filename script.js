let index = 0;
const images = document.querySelectorAll('.slideshow img');

function showNextImage() {
  // Hide all images
  images.forEach((image) => image.style.display = 'none');
  
  // Show the next image
  index = (index + 1) % images.length;
  images[index].style.display = 'block';
}

// Show the first image initially
images[index].style.display = 'block';

// Change the image every 3 seconds
setInterval(showNextImage, 4000);
