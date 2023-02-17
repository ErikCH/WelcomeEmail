import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

import "./assets/main.css";

createApp(App).mount("#app");
