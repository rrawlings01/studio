import Split from '../split/Split'
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      seller: {}
    }
  },
  created() {
    fetch("/api/seller")
      .then(res => {
        return res.json()
      })
      .then(response => {
        if (response.code == 0) {
          this.seller = response.data
          this.$nextTick(() => {
            if (this.seller.poi_env.thumbnails_url_list) {
              let imgW = this.$refs.picsItem[0].clientWidth
              let marginR = 11
              let width = (imgW + marginR) * this.seller.poi_env.thumbnails_url_list.length
              this.$refs.picsList.style.width = width + "px"
              this.scroll = new BScroll(this.$refs.picsView, {
                scrollX: true
              })
            }
            this.sellerView = new BScroll(this.$refs.sellerView)
          })

        }
      })
  },
  components: {
    Split
  }
};
