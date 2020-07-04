export function galleryContent(parentElement) {
    // Make Home Div
    const galleryDiv = document.createElement('div');
    parentElement.appendChild(galleryDiv);
    galleryDiv.className = "active";
    galleryDiv.id = "gallery";
    galleryDiv.setAttribute("data-tab-content", ""); // set empty value
    
    const innerGalleryDiv = document.createElement('div');
    innerGalleryDiv.className = "inner-gallery-div";
    galleryDiv.appendChild(innerGalleryDiv);
    
    // const image1 = document.createElement('img');
    // image1.src = "media/image1.jpg";
    // image1.classList = "box-image";
    // innerGalleryDiv.appendChild(image1);

    // Render images on screen
    for (let i = 0, image = []; i < 8; i++) {
        image[i] = document.createElement('img');
        image[i].src = `media/image${[i]}.jpg`;
        image[i].classList = "box-image";
        innerGalleryDiv.appendChild(image[i]);
    }
}