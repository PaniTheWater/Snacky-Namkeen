
 // Function to add 'enlarged' class
 function enlargeImage(event) {
    event.target.classList.add('pressed');
  }

  // Function to remove 'enlarged' class
  function shrinkImage(event) {
    event.target.classList.remove('pressed');
  }

  // Get all product images
  const images = document.querySelectorAll('.hower');


  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", enlargeImage);
    images[i].addEventListener("mouseout", shrinkImage);
  }

//   document.querySelectorAll('#bigLogo').addEventListener("mouseover", enlargeImages);
//   document.querySelectorAll('#bigLogo').addEventListener("mouseout", shrinkImages);
// Get all product images
const image = document.querySelectorAll('.bigLogo');


for (let i = 0; i < image.length; i++) {
  image[i].addEventListener("mouseover", enlargeImages);
}
// Function to add 'enlarged' class
function enlargeImages(event) {
    event.target.classList.add('enla');
    setTimeout(function() {
        event.target.classList.remove("enla");
      }, 1500);
  }
