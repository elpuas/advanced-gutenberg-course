/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_gallery__ = __webpack_require__(1);
/**
 * Import example blocks
 */



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);
// Block Dependencies



// Block Libraries
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var registerBlockType = wp.blocks.registerBlockType;
var MediaPlaceholder = wp.editor.MediaPlaceholder;

// Register Block

/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType("wdsblocks/gallery", {
	title: __('Gallery', 'wdsblocks'),
	description: __('Custom gallery block', 'wdsblocks'),
	category: 'wdsblocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icon_js__["a" /* default */],
	keywords: [__('Masonry', 'wdsblocks'), __('Images Media', 'wdsblocks'), __('Lightbox', 'wdsblocks')],
	supports: ['full', 'wide'],
	attributes: {
		images: {
			type: 'array',
			default: []
		}
	},
	edit: function edit(props) {
		var images = props.attributes.images,
		    className = props.className,
		    setAttributes = props.setAttributes;


		var onSelectImages = function onSelectImages(newImages) {
			var images = newImages.map(function (img) {
				return {
					src: img.sizes.full.url,
					width: img.sizes.full.width,
					height: img.sizes.full.width,
					id: img.id,
					alt: img.alt,
					caption: img.caption
				};
			});
			setAttributes({ images: images });
		};

		return wp.element.createElement(
			Fragment,
			null,
			!!!images.length ? wp.element.createElement(MediaPlaceholder, {
				labels: {
					title: __('Gallery', 'wdsblocks'),
					instructions: __('Drag images, upload new ones or select files from your library', 'wdsblocks')
				},
				icon: __WEBPACK_IMPORTED_MODULE_0__icon_js__["a" /* default */],
				accept: 'images/*',
				multiple: true,
				onSelect: onSelectImages
			}) : images.map(function (img) {
				return wp.element.createElement('img', {
					src: img.src,
					alt: img.alt,
					title: img.caption,
					'data-id': img.id,
					width: img.width,
					height: img.height
				});
			})
		);
	},
	save: function save(props) {
		var images = props.attributes.images;

		return wp.element.createElement(
			'div',
			null,
			images.map(function (img) {
				return wp.element.createElement('img', {
					src: img.src,
					alt: img.alt,
					title: img.caption,
					'data-id': img.id,
					width: img.width,
					height: img.height
				});
			})
		);
	}
}));

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var icon = wp.element.createElement(
	"svg",
	{
		width: "20px",
		height: "20px",
		viewBox: "1 -47 511.999 511",
		xmlns: "http://www.w3.org/2000/svg"
	},
	wp.element.createElement("path", { d: "m91.636719 52.574219h321.292969v-4.710938c0-20.632812-16.726563-37.363281-37.363282-37.363281h-302.214844c-34.988281 0-63.351562 28.363281-63.351562 63.351562v211.902344c0 20.632813 16.726562 37.363282 37.363281 37.363282h5.136719v-231.40625c0-21.617188 17.519531-39.136719 39.136719-39.136719zm0 0", fill: "#ee4e71" }),
	wp.element.createElement("path", { d: "m99.070312 291.914062v-164.984374c0-17.953126 14.554688-32.507813 32.507813-32.507813h323.851563v-4.488281c0-20.632813-16.726563-37.359375-37.363282-37.359375h-326.429687c-21.617188 0-39.136719 17.519531-39.136719 39.136719v236.113281c0 20.636719 16.726562 37.363281 37.363281 37.363281h9.207031zm0 0", fill: "#ffd866" }),
	wp.element.createElement(
		"g",
		{ fill: "#d6effb" },
		wp.element.createElement("path", { d: "m102.992188 390.023438c-.5-.921876-.957032-1.867188-1.367188-2.839844.410156.972656.867188 1.917968 1.367188 2.839844zm0 0" }),
		wp.element.createElement("path", { d: "m120.402344 405.066406c-.996094-.367187-1.96875-.777344-2.917969-1.234375.949219.457031 1.921875.867188 2.917969 1.234375zm0 0" }),
		wp.element.createElement("path", { d: "m123.453125 406.011719c-1.039063-.265625-2.054687-.582031-3.050781-.945313.996094.363282 2.011718.679688 3.050781.945313zm0 0" }),
		wp.element.createElement("path", { d: "m499.445312 387.183594c-.410156.972656-.871093 1.917968-1.371093 2.839844.503906-.921876.960937-1.867188 1.371093-2.839844zm0 0" }),
		wp.element.createElement("path", { d: "m502 374.527344c0 1.683594-.128906 3.335937-.375 4.953125.246094-1.617188.375-3.269531.375-4.953125zm0 0" }),
		wp.element.createElement("path", { d: "m501.339844 381.082031c-.21875 1.054688-.484375 2.097657-.800782 3.113281.316407-1.019531.582032-2.058593.800782-3.113281zm0 0" }),
		wp.element.createElement("path", { d: "m131.578125 407.039062c-2.804687 0-5.527344-.355468-8.125-1.023437 2.597656.667969 5.320313 1.023437 8.125 1.023437zm0 0" }),
		wp.element.createElement("path", { d: "m99.070312 374.527344c0 1.683594.128907 3.335937.375 4.953125-.25-1.617188-.375-3.269531-.375-4.953125zm0 0" }),
		wp.element.createElement("path", { d: "m100.53125 384.195312c-.316406-1.019531-.585938-2.058593-.800781-3.113281.214843 1.054688.484375 2.09375.800781 3.113281zm0 0" }),
		wp.element.createElement("path", { d: "m116.082031 403.113281c-.921875-.5-1.816406-1.042969-2.679687-1.628906.863281.585937 1.757812 1.128906 2.679687 1.628906zm0 0" }),
		wp.element.createElement("path", { d: "m469.492188 94.421875h-337.914063c-17.953125 0-32.507813 14.554687-32.507813 32.507813v164.984374l109.777344-96.851562c9.433594-8.324219 23.746094-7.765625 32.507813 1.265625l110.984375 114.425781 62.050781-45.207031c8.390625-6.117187 19.796875-6.015625 28.082031.242187l59.527344 44.964844v-183.824218c0-17.953126-14.554688-32.507813-32.507812-32.507813zm-80.976563 126.285156c-18.113281 0-32.796875-14.683593-32.796875-32.792969 0-18.113281 14.683594-32.796874 32.796875-32.796874 18.109375 0 32.792969 14.683593 32.792969 32.796874 0 18.109376-14.683594 32.792969-32.792969 32.792969zm0 0" })
	),
	wp.element.createElement("path", { d: "m442.472656 265.789062c-8.285156-6.257812-19.691406-6.359374-28.082031-.242187l-62.050781 45.207031-110.984375-114.425781c-8.761719-9.03125-23.070313-9.589844-32.507813-1.265625l-109.777344 96.851562v82.613282c0 1.683594.128907 3.339844.375 4.953125.082032.535156.175782 1.070312.285157 1.601562.21875 1.054688.484375 2.097657.800781 3.113281.316406 1.019532.683594 2.015626 1.09375 2.988282s.867188 1.917968 1.367188 2.839844c2.503906 4.605468 6.085937 8.542968 10.410156 11.460937.867187.585937 1.757812 1.128906 2.679687 1.628906.460938.25.929688.488281 1.402344.71875.949219.457031 1.921875.867188 2.917969 1.234375.996094.363282 2.011718.679688 3.050781.945313 2.597656.667969 5.320313 1.023437 8.125 1.023437h337.914063c12.34375 0 23.078124-6.878906 28.585937-17.011718.5-.921876.957031-1.867188 1.367187-2.84375.410157-.972657.777344-1.96875 1.09375-2.984376.316407-1.019531.585938-2.058593.800782-3.117187.109375-.527344.203125-1.0625.285156-1.601563.246094-1.613281.375-3.265624.375-4.949218v-63.777344zm0 0", fill: "#00b7ec" }),
	wp.element.createElement("path", { d: "m421.308594 187.910156c0 18.113282-14.683594 32.796875-32.792969 32.796875-18.113281 0-32.796875-14.683593-32.796875-32.796875 0-18.109375 14.683594-32.792968 32.796875-32.792968 18.109375 0 32.792969 14.683593 32.792969 32.792968zm0 0", fill: "#ffd866" }),
	wp.element.createElement("path", { d: "m469.488281 84.417969h-4.390625c-2.570312-22.023438-20.292968-39.484375-42.441406-41.621094-2.542969-23.742187-22.683594-42.296875-47.085938-42.296875h-302.21875c-40.445312 0-73.351562 32.90625-73.351562 73.347656v211.902344c0 24.574219 18.804688 44.828125 42.773438 47.144531 2.515624 23.488281 22.261718 41.886719 46.3125 42.273438.0625 4.167969.714843 8.191406 1.898437 11.988281 5.386719 17.292969 21.550781 29.882812 40.59375 29.882812h337.910156c23.441407 0 42.511719-19.070312 42.511719-42.507812v-247.601562c0-23.441407-19.070312-42.511719-42.511719-42.511719zm22.511719 42.511719v163.738281l-43.5-32.859375c-11.886719-8.976563-27.960938-9.117188-40-.347656l-55.027344 40.09375-104.9375-108.1875c-12.5-12.890626-32.839844-13.683594-46.304687-1.800782l-93.160157 82.191406v-142.828124c0-12.414063 10.097657-22.511719 22.507813-22.511719h337.910156c12.414063 0 22.511719 10.097656 22.511719 22.511719zm0 247.597656c0 12.414062-10.097656 22.511718-22.507812 22.511718h-337.914063c-10.082031 0-18.640625-6.667968-21.492187-15.824218-.660157-2.113282-1.015626-4.359375-1.015626-6.683594v-78.105469l106.394532-93.863281c5.441406-4.804688 13.660156-4.484375 18.714844.726562l47.359374 48.828126c0 .003906 0 .003906.003907.003906l94.261719 97.183594c1.960937 2.023437 4.566406 3.039062 7.179687 3.039062 2.507813 0 5.019531-.9375 6.960937-2.820312 3.960938-3.847657 4.058594-10.175782.214844-14.140626l-22.625-23.328124 52.742188-38.425782c4.867187-3.546875 11.363281-3.492187 16.167968.136719l55.554688 41.964844zm-429.5-46.707032v-236.109374c0-1.003907.050781-2 .152344-2.976563 1.492187-14.675781 13.925781-26.164063 28.988281-26.164063h122.320313c5.523437 0 10-4.476562 10-10 0-5.523437-4.476563-10-10-10h-122.320313c-27.097656 0-49.140625 22.042969-49.140625 49.140626v220.976562c-12.777344-2.300781-22.5-13.503906-22.5-26.9375v-211.902344c0-29.414062 23.933594-53.347656 53.351562-53.347656h302.21875c13.273438 0 24.371094 9.503906 26.84375 22.070312h-108.453124c-5.523438 0-10 4.476563-10 10 0 5.523438 4.476562 10 10 10h118.96875.011718 5.128906c13.195313 0 24.242188 9.394532 26.800782 21.847657h-313.292969c-23.4375 0-42.507813 19.070312-42.507813 42.511719v164.976562.007812 63.253907c-14.722656-.417969-26.570312-12.523438-26.570312-27.347657zm0 0" }),
	wp.element.createElement("path", { d: "m388.515625 145.117188c-23.601563 0-42.796875 19.199218-42.796875 42.792968 0 23.597656 19.199219 42.796875 42.796875 42.796875 23.59375 0 42.792969-19.199219 42.792969-42.796875 0-23.59375-19.199219-42.792968-42.792969-42.792968zm0 65.589843c-12.570313 0-22.796875-10.226562-22.796875-22.792969 0-12.570312 10.226562-22.796874 22.796875-22.796874 12.566406 0 22.792969 10.226562 22.792969 22.796874 0 12.566407-10.226563 22.792969-22.792969 22.792969zm0 0" }),
	wp.element.createElement("path", { d: "m244.730469 56.398438c.25.601562.558593 1.179687.917969 1.722656.363281.546875.78125 1.058594 1.242187 1.519531.460937.457031.96875.878906 1.519531 1.25.539063.359375 1.128906.667969 1.730469.917969.597656.25 1.230469.441406 1.871094.570312.636719.128906 1.296875.191406 1.949219.191406.660156 0 1.308593-.0625 1.960937-.191406.636719-.128906 1.257813-.320312 1.867187-.570312.601563-.25 1.179688-.558594 1.722657-.917969.546875-.371094 1.058593-.792969 1.519531-1.25.46875-.460937.878906-.972656 1.25-1.519531.359375-.542969.667969-1.121094.917969-1.722656.25-.609376.441406-1.238282.570312-1.867188.128907-.652344.191407-1.3125.191407-1.960938 0-.652343-.0625-1.3125-.191407-1.949218-.128906-.640625-.320312-1.273438-.570312-1.871094-.25-.609375-.558594-1.191406-.917969-1.730469-.371094-.550781-.78125-1.058593-1.25-1.519531-.460938-.460938-.972656-.878906-1.519531-1.242188-.542969-.359374-1.121094-.667968-1.722657-.917968-.609374-.25-1.230468-.441406-1.867187-.570313-1.292969-.261719-2.621094-.261719-3.910156 0-.640625.128907-1.273438.320313-1.871094.570313-.601563.25-1.191406.558594-1.730469.917968-.550781.363282-1.058594.78125-1.519531 1.242188s-.878906.96875-1.242187 1.519531c-.359376.539063-.667969 1.121094-.917969 1.730469-.25.597656-.441407 1.230469-.570313 1.871094-.128906.636718-.199218 1.296875-.199218 1.949218 0 .648438.070312 1.308594.199218 1.960938.128906.628906.320313 1.257812.570313 1.867188zm0 0" })
);

/* harmony default export */ __webpack_exports__["a"] = (icon);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=blocks.editor.js.map