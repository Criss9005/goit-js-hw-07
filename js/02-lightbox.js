import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

galleryItems.forEach(element => {
    const item = document.createElement('li');
    gallery.append(item);
    item.classList.add('gallery__item')
    const link = document.createElement('a');
    item.append(link);
    link.classList.add('gallery__link');
    link.href = element.original;
    const image = document.createElement('img');
    image.classList.add('gallery__image');
    link.append(image);
    image.src = element.preview
    image.alt = element.description
    image.title = element.description
    
});

const options = {
        
        captionDelay: 300,
        captionPosition: 'bottom',
};

const galleryShow = new SimpleLightbox('.gallery li a', {...options });

