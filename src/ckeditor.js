
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import Font from '@ckeditor/ckeditor5-font/src/font';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import ImageResizeEditing from "@ckeditor/ckeditor5-image/src/imageresize/imageresizeediting";
import ImageResizeHandles from "@ckeditor/ckeditor5-image/src/imageresize/imageresizehandles";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import MathType from '@wiris/mathtype-ckeditor5';
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CodeBlock,
	CKFinder,
	Font,
	FontFamily,
	EasyImage,
	Heading,
	Image,
	ImageResize,
	ImageResizeEditing,
	ImageResizeHandles,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	MathType,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	ImageInsert,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			"heading",
			"|",
			"bold",
			"italic",
			"link",
			"bulletedList",
			"numberedList",
			"fontFamily",
			"fontSize",
			"fontColor",
			"fontBackgroundColor",
			"|",
			"indent",
			"outdent",
			"|",
			"imageUpload",
			"blockQuote",
			"insertTable",
			"mediaEmbed",
			"undo",
			"redo",
			"imageInsert",
			"imageResize",
			"codeBlock",
			"MathType",
			"ChemType"
		],
	},
	image: {
		toolbar: [
			"imageStyle:alignLeft",
			"imageStyle:alignCenter",
			"imageStyle:alignRight",
			"|",
			"imageResize",
			"|",
			"imageTextAlternative",
			"imageResize:50",
			"imageResize:75",
			"imageResize:original",
		],

		// The default value.
		styles: ["full", "side", "alignLeft", "alignCenter", "alignRight"],

		// Configure the available image resize options.
		resizeOptions: [
			{
				name: "imageResize:original",
				label: "Original",
				value: null,
			},
			{
				name: "imageResize:50",
				label: "50%",
				value: "50",
			},
			{
				name: "imageResize:75",
				label: "75%",
				value: "75",
			},
		],
	},
	fontFamily: {
		options: [
			"default",
			"Espresso Dolce",
			"Nunito Sans",
			"Montserrat",
			"poppins"
		],
		supportAllValues: true
	},
	fontSize: {
		options: [9, 11, 13, "default", 17, 19, 21],
	},
	fontColor: {
		colors: [
			{
				color: "hsl(0, 0%, 0%)",
				label: "Black",
			},
			{
				color: "hsl(0, 0%, 30%)",
				label: "Dim grey",
			},
			{
				color: "hsl(0, 0%, 60%)",
				label: "Grey",
			},
			{
				color: "hsl(0, 0%, 90%)",
				label: "Light grey",
			},
			{
				color: "hsl(0, 0%, 100%)",
				label: "White",
				hasBorder: true,
			},

			// ...
		],
	},
	fontBackgroundColor: {
		colors: [
			{
				color: "hsl(0, 75%, 60%)",
				label: "Red",
			},
			{
				color: "hsl(30, 75%, 60%)",
				label: "Orange",
			},
			{
				color: "hsl(60, 75%, 60%)",
				label: "Yellow",
			},
			{
				color: "hsl(90, 75%, 60%)",
				label: "Light green",
			},
			{
				color: "hsl(120, 75%, 60%)",
				label: "Green",
			},

			// ...
		],
	},
	codeBlock: {
		languages: [
			// Do not render the CSS class for the plain text code blocks.
			{ language: 'plaintext', label: 'Plain text', class: '' },

			// Use the "php-code" class for PHP code blocks.
			{ language: 'php', label: 'PHP', class: 'php-code' },

			// Use the "js" class for JavaScript code blocks.
			// Note that only the first ("js") class will determine the language of the block when loading data.
			{ language: 'javascript', label: 'JavaScript', class: 'js javascript js-code' },

			// Python code blocks will have the default "language-python" CSS class.
			{ language: 'python', label: 'Python' }
		]
	},
	table: {
		contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "en",
};
