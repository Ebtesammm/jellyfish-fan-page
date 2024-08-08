document.getElementById('show-images-btn').addEventListener('click', function() {
    // Get the image container element
    const imageContainer = document.getElementById('image-container');
    
    // Toggle the visibility of the image container
    if (imageContainer.style.display === 'none') {
        imageContainer.style.display = 'block';
    } else {
        imageContainer.style.display = 'none';
    }
});
