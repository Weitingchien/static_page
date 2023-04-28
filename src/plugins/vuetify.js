/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  ssr: false,
  /*
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        "my-custom-color": "#f7f1f0",
        "my-nav-color": "#c3a6a0",
      },
    },
    //defaultTheme: "dark",
  },
  */
  theme: {
    defaultTheme: "dark",
  },
});
