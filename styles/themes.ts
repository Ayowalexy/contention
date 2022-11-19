import { extendTheme } from "@chakra-ui/react";


// Brand Theming
let colors = {
  brand: {
  },
};

// Fonts
const fonts = {
  heading: "Roboto",
  body: 'Poppins'
};

// Global Style
const global = {
  html: {
    fontSize: "62.5%",
  },
  body: {
    fontSize: "1.4rem",
  },
};

const theme = extendTheme({
  styles: { global },
  colors,
  fonts,
});

export { theme };
