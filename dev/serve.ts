import { createApp } from "vue";
import { ElInput } from "element-plus";
import Dev from "./serve.vue";
import "element-plus/dist/index.css";

const app = createApp(Dev);
app.use(ElInput);
app.mount("#app");
