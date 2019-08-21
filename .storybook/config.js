import { addParameters, configure } from "@storybook/react";
import { create } from "@storybook/theming";
import { Colors } from "../src/constants";
import "../src/index.css";

const req = require.context("../stories", true, /\.stories\.tsx$/);

const iconFont = require("react-native-vector-icons/Fonts/FontAwesome.ttf");
const iconFontStyles = `@font-face {
  src: url('${iconFont}') format('truetype');
  font-family: 'FontAwesome';
}`;

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\./,
    theme: create({
      barSelectedColor: Colors.SECONDARY,
      colorSecondary: Colors.PRIMARY,
      brandTitle: "Smartkarma UI Kit",
      brandUrl: "https://github.com/smartkarma/sk-components.git",
      brandImage: "https://user-images.githubusercontent.com/12580174/61519614-86523080-aa36-11e9-92cb-19804e9435dd.png"
    })
  }
});

configure(loadStories, module);

// Create stylesheet
const style = document.createElement("style");
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}
// Inject stylesheet
document.head.appendChild(style);
