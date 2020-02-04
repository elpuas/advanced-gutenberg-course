const { render } = wp.element;

import FrontendGallery from './components/FrontendGallery';


const galleries = document.querySelectorAll('.wp-block-wdsblocks-gallery');

galleries.forEach( gallery => {
	const direction = gallery.dataset.direction;
	const isLightboxEnabled = gallery.dataset.islightboxenabled;
	const images = gallery.querySelectorAll("img");

	const photos = [];
	images.forEach( img => {
		photos.push({
			alt: img.alt,
			height: img.height, 
			src: img.src, 
			title: img.title,  
			width: img.width 
		});
	});
	// console.log('GALLERY', photos, direction, isLightboxEnabled );
	render( 
	<FrontendGallery 
	photos={photos} 
	direction={direction}
	isLightboxEnabled={isLightboxEnabled} 
	/>,
	 gallery );
})
