import { createApp } from "vue";
import App from "./App.tsx";

declare global {
  interface Window {
    mount: (id: string) => void;
  }
}

createApp(App).mount("#app");

window.mount = (id: string) => {
  const ele = document.querySelector(`#${id}`);
  ele && createApp(App).mount(ele);
};
