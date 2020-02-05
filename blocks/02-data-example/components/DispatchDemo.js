const { __ } = wp.i18n;
const { Button } = wp.components;
const { withSelect, dispatch } = wp.data;

const DispatchDemo = ({ blocks }) => (
	<div>
		<pre>
			<code>
				{`dispatch()`}
			</code>
		</pre>
		<ul>
			{blocks.map(block => (
				<li key={block.clientId}>
					{block.name}{" "}
					<Button 
					className="is-button is-default"
					onClick={() => {
						dispatch('core/block-editor').removeBlock(block.clientId);
					}}
					>
						{__('Delete', 'wdsblocks')}
					</Button>
				</li>
			))}
		</ul>
	</div>
);

export default withSelect( select => {
	return {
		blocks: select('core/block-editor').getBlocks()
	};
})(DispatchDemo);

