const { __ } = wp.i18n;
const { Component } = wp.element;
const { subscribe, select } = wp.data

export default class SubscribeDemo extends Component {
	state = {
		blockCount: ""
	}

	componentDidMount()	{
		const unsubscribe = subscribe(() => {
			const blockCount = select('core/block-editor').getBlockCount();
			this.setState({blockCount});
		})
	}

	render (){
		return(
			<div>
			<pre>
				<code>
					{ `subscribe( () => {} )` }
				</code>
			</pre>
			<p>
				{__('Block Count', 'wdsblocks')} {this.state.blockCount}
			</p>
		</div>
		)
	}
}