import "./bootstrap";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import FileSystemPage from "./components/FileSystemPage.vue";

import "vuetify/styles";
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
    components,
    directives,
});

createApp(FileSystemPage)
    .use(vuetify)
    .mount("#app");
