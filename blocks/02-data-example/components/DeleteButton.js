const { __ } = wp.i18n;
const { Button } = wp.components;
const { withDispatch } = wp.data;

const DeleteButton = ({clientId, removeBlock}) => (
	<Button 
		className="is-button is-default"
		onClick={() => {
			removeBlock(clientId);
		}}
		>
			{__('Delete', 'wdsblocks')}
	</Button>
);

export default withDispatch((dispatch, ownProps) => {
	return {
		removeBlock: dispatch('core/block-editor').removeBlock
	}
})(DeleteButton)