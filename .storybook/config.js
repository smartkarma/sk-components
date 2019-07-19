import { addParameters, configure } from "@storybook/react";
import { create } from "@storybook/theming";
import { Colors } from "../src/constants";

const req = require.context("../src/components", true, /\.stories\.tsx$/);

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
