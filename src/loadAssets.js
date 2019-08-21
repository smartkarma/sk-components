import "../src/index.css";

const AntDesign = require("react-native-vector-icons/Fonts/AntDesign.ttf");
const Entypo = require("react-native-vector-icons/Fonts/Entypo.ttf");
const EvilIcons = require("react-native-vector-icons/Fonts/EvilIcons.ttf");
const Feather = require("react-native-vector-icons/Fonts/Feather.ttf");
const FontAwesome = require("react-native-vector-icons/Fonts/FontAwesome.ttf");
const Foundation = require("react-native-vector-icons/Fonts/Foundation.ttf");
const Ionicons = require("react-native-vector-icons/Fonts/Ionicons.ttf");
const MaterialCommunityIcons = require("react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf");
const MaterialIcons = require("react-native-vector-icons/Fonts/MaterialIcons.ttf");
const Octicons = require("react-native-vector-icons/Fonts/Octicons.ttf");
const SimpleLineIcons = require("react-native-vector-icons/Fonts/SimpleLineIcons.ttf");
const Zocial = require("react-native-vector-icons/Fonts/Zocial.ttf");

const iconFontStyles = `
@font-face {
  src: url(${AntDesign}) format('truetype');
  font-family: 'AntDesign';
}
@font-face {
  src: url(${Entypo}) format('truetype');
  font-family: 'Entypo';
}
@font-face {
  src: url(${EvilIcons}) format('truetype');
  font-family: 'EvilIcons';
}
@font-face {
  src: url(${Feather}) format('truetype');
  font-family: 'Feather';
}
@font-face {
  src: url(${FontAwesome}) format('truetype');
  font-family: 'FontAwesome';
}
@font-face {
  src: url(${Foundation}) format('truetype');
  font-family: 'Foundation';
}
@font-face {
  src: url(${Ionicons}) format('truetype');
  font-family: 'Ionicons';
}
@font-face {
  src: url(${MaterialCommunityIcons}) format('truetype');
  font-family: 'MaterialCommunityIcons';
}
@font-face {
  src: url(${MaterialIcons}) format('truetype');
  font-family: 'MaterialIcons';
}
@font-face {
  src: url(${Octicons}) format('truetype');
  font-family: 'Octicons';
}
@font-face {
  src: url(${SimpleLineIcons}) format('truetype');
  font-family: 'SimpleLineIcons';
}
@font-face {
  src: url(${Zocial}) format('truetype');
  font-family: 'Zocial';
}
`;

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
