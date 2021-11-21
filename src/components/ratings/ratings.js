import BScroll from 'better-scroll'
import Split from '../split/Split'
import Star from '../star/Star'

const ALL = 2
const PICTURE = 1
const COMMENT = 0

export default {
  data() {
    return {
      ratings: {},
      selectType: ALL
    }
  },
  components: {
    Split,
    Star
  },
  created() {
    fetch("/api/ratings")
      .then(res => res.json())
      .then(response => {
        if (response.code == 0) {
          this.ratings = response.data
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.rateView, {
                click: true
              })
            } else {
              this.scroll.refresh()
            }
          })
        }
      })
  },
  methods: {
    selectTypeFn(type) {
      this.selectType = type;
    },
    formatDate(time) {
      let date = new Date(time * 1000);
      let fmt = 'yyyy.MM.dd';
      if (/(y+)/.test(fmt)) { // 年
        let year = date.getFullYear().toString();
        fmt = fmt.replace(RegExp.$1, year);
      }
      if (/(M+)/.test(fmt)) { // 月
        let mouth = date.getMonth() + 1;
        if (mouth < 10) {
          mouth = '0' + mouth;
        }
        fmt = fmt.replace(RegExp.$1, mouth);
      }
      if (/(d+)/.test(fmt)) { // 日
        let mydate = date.getDate();
        if (mydate < 10) {
          mydate = '0' + mydate;
        }
        fmt = fmt.replace(RegExp.$1, mydate);
      }
      return fmt;
    }
  },
  computed: {
    selectComments() {
      if (this.selectType === ALL) {
        return this.ratings.comments
      } else if (this.selectType === PICTURE) {
        let arr = []
        this.ratings.comments.forEach((comment) => {
          if (comment.comment_pics.length) {
            arr.push(comment)
          }
        })
        return arr
      } else {
        return this.ratings.comments_dp.comments
      }
    }
  }
};
