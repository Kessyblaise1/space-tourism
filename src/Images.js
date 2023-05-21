export const images = [
  "./assets/destination/image-moon.webp",
  "./assets/destination/image-mars.webp",
  "./assets/destination/image-europa.webp",
  "./assets/destination/image-titan.webp",
  "./assets/crew/image-anousheh-ansari.webp",
  "./assets/crew/image-douglas-hurley.webp",
  "./assets/crew/image-mark-shuttleworth.webp",
  "./assets/crew/image-victor-glover.webp",
]

function preloadImages() {
  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = images[i];
  }
}



// Call the preloadImages function to preload the images
preloadImages()