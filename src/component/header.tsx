import { defineComponent } from "vue";
import { css } from "@emotion/css";
export default defineComponent({
  setup() {
    return () => <div class={css`
      background-color: pink;
      color: green;
      &:hover{
        background-color: aqua;
        color: chartreuse;
      }
      @media (min-width: 420px) {
        font-size: 50px;
      }
      @media (min-width: 760px) {
        font-size: 60px;
      }
      @media (min-width: 1280px) {
        font-size: 80px;
      }
    `}>header</div>;
  },
});
