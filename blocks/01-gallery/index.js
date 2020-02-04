// Block Dependencies
import icon from './icon.js';
import './style.scss';
import Gallery from 'react-photo-gallery';

// Block Libraries
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { BlockControls, InspectorControls, MediaUpload, MediaPlaceholder } = wp.blockEditor;
const { IconButton, Toolbar, PanelBody, PanelRow, RadioControl } = wp.components;

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
		},
		direction: {
			type: 'string',
			default: 'row'
		}
	},
	edit: props => {
		const { attributes: { images, direction },
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
				<InspectorControls>
					<PanelBody 
					title = {__('Gallery Settings', 'wdsblocks')}
					initialOpen = {true}
					>
						<PanelRow>
							<RadioControl 
								label={__('Flex-Wrap', 'wdsblocks')}
								selected={direction}
								options={[
									{ label: __('Rows', 'wdsblocks'), value: 'row'},
									{ label:__('Columns', 'wdsblocks'), value: 'column'}
								]}
								onChange={direction => setAttributes({direction})}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				{!!images.length && (
					<BlockControls>
						<Toolbar>
							<MediaUpload 
								allowedTypes={[images]} 
								multiple 
								gallery 
								value={images.map(img => img.id)}
								onSelect={onSelectImages}
								render={({open}) => (
									<IconButton
									className='components-toolbar__control'
									label={__('Edit Gallery', 'wdsblocks')}
									icon='edit'
									onClick={open}
									/>
								)} 
							/>
						</Toolbar>
					</BlockControls>
				)}
				<div className={`${className} ${direction}`}>
					{!!!images.length ? (
						<MediaPlaceholder
						labels = {{
							title: __( ' Gallery', 'wdsblocks' ),
							instructions: __( 'Drag images, upload new ones or select files from your library', 'wdsblocks' )
						}}
						icon = {icon}
						accept='images/*'
						multiple
						onSelect= {onSelectImages}
						/>
					) : (
						<Gallery photos={images} direction={direction} />
					)}
				</div>
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

