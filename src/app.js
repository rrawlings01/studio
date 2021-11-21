import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      poiInfo: {},
      commentNum: 0
    }
  },
  components: {
    "app-header": Header,
    "app-nav": Nav
  },
  created() {
      axios.post('http://localhost:6166/user/login',{
        us: "ceshi@ceshi.com",
        ps: "ceshi",
      })
      .then((res) => {
            if (res.data.code === 200) {
              window.sessionStorage.setItem("token", res.data.token);
            } else {
            }
          })
    fetch("/api/goods")
      .then(res => res.json())
      .then(response => {
        if (response.code == 0) {
          this.poiInfo = response.data.poi_info
        }
      })

    fetch("/api/ratings")
      .then(res => res.json())
      .then(response => {
        if (response.code == 0) {
          this.commentNum = response.data.comment_num
        }
      })
  }
};
