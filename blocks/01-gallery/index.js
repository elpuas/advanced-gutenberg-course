// Block Dependencies
import icon from './icon.js';
import './style.scss';

// Block Libraries
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { MediaPlaceholder } = wp.editor;

// Register Block
export default registerBlockType("wdsblocks/gallery", {
	title: __('Gallery', 'wdsblocks'),
	description: __( 'Custom gallery block', 'wdsblocks'),
	category: 'wdsblocks',
	icon,
	keywords:
	[
		__('Masonry', 'wdsblocks'),
		__('Images Media', 'wdsblocks'),
		__('Lightbox', 'wdsblocks')
	],
	supports: ['full', 'wide'],
	attributes: {
		images: {
			type: 'array',
			default: [],
		}
	},
	edit: props => {
		const { attributes: { images },
			className,
			setAttributes 
		} = props;

		const onSelectImages = newImages => {
			const images = newImages.map( img => {
				return {
					src: img.sizes.full.url,
					width: img.sizes.full.width,
					height: img.sizes.full.width,
					id: img.id,
					alt: img.alt,
					caption: img.caption
				}
			});
			setAttributes( { images } );
		};

		return (
			<Fragment>
				{!!!images.length ? (
					<MediaPlaceholder
					labels = {{
						title: __( 'Gallery', 'wdsblocks' ),
						instructions: __( 'Drag images, upload new ones or select files from your library', 'wdsblocks' )
					}}
					icon = {icon}
					accept='images/*'
					multiple
					onSelect= {onSelectImages}
					/>
				) : (
					images.map( img => ( 
						<img 
							src={img.src} 
							alt={img.alt}
							title={img.caption} 
							data-id={img.id} 
							width={img.width} 
							height={img.height} 
						/>
					))
				)}
			</Fragment>
		)
	},
	save: props => {
		const { images } = props.attributes;
		return (
			<div>
				{images.map( img => ( 
				<img 
					src={img.src} 
					alt={img.alt}
					title={img.caption} 
					data-id={img.id} 
					width={img.width} 
					height={img.height} 
				/>
				))}
			</div>
		)
	}
})

