const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import icon from './icon';
import './style.scss';
import SelectDemo from './components/SelectDemo';
import SubscribeDemo from './components/SubscribeDemo';
import WithSelectDemo from './components/WithSelectDemo';
import DispatchDemo from './components/DispatchDemo';
import WithDispatchDemo from './components/WithDispatchDemo';
import WithComposeDemo from './components/WithComposeDemo';

export default registerBlockType('wdsblocks/data-example', {
	title: __('Data Api Example', 'wdsblocks'),
	description: __('Advance API Data', 'wdsblocks'),
	icon,
	category: 'wdsblocks',
	attributes: {},
	edit: props => {
		return (
			<div>
				<p>{__('Data API Example Backend', 'wdsblocks')}</p>
				<SelectDemo />
				<SubscribeDemo />
				<WithSelectDemo />
				<DispatchDemo />
				<WithDispatchDemo />
				<WithComposeDemo />
			</div>
		);
	},
	save: props => {
		return (
			<div>
				<p>{__('Data API Example Front End', 'wdsblocks')}</p>
			</div>
		);
	},
})