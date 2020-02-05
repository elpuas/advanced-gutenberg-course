const { registerBlockStyle } = wp.blocks;

import "./style.scss";

registerBlockStyle("core/quote", {
  name: "colorful-quote",
  label: "Colorful Quote"
});

registerBlockStyle("wdsblocks/shoutout-styles", {
  name: "default",
  label: "Default"
});

registerBlockStyle("wdsblocks/shoutout-styles", {
  name: "serious",
  label: "Serious"
});

registerBlockStyle("wdsblocks/shoutout-styles", {
  name: "colorful",
  label: "Colorful"
});
