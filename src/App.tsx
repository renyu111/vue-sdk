import { defineComponent } from "vue"
import Header from "./component/header"
export default defineComponent({
  setup() {
    return () => <div><Header /></div>
  }
})