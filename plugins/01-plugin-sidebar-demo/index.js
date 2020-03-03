/**
 * Get Dependencies
 */

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { PanelBody, PanelRow } = wp.components;

const PluginSidebarDemo = props => {
	return (
		<Fragment>
			<PluginSidebarMoreMenuItem target="wds-adv-demo">
			{ __( "Plugin Sidebar Demo",  "wds-adv-gb-plugin-js")}
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				name="wds-adv-demo"
				title={ __( "Plugin Sidebar Demo",  "wds-adv-gb-plugin-js")}
			>
				<PanelBody
					title={ __( "Panel Body Title",  "wds-adv-gb-plugin-js")}
					opened
				>
					<PanelRow>
					{ __( "Plugin Sidebar Content",  "wds-adv-gb-plugin-js")}
					</PanelRow>
				</PanelBody>
			</PluginSidebar>
		</Fragment>
	)
}

registerPlugin( "wds-adv-demo", {
	icon: "admin-plugins",
	render: PluginSidebarDemo
})