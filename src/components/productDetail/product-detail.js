import BScroll from 'better-scroll'
import Split from '../split/Split'
import CartControl from '../cartcontrol/CartControl'
import Vue from "vue"

export default {
  data() {
    return {
      showFlag: false
    }
  },
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addProduct() {
      if (!this.food.count) {
        Vue.set(this.food, "count", 1)
      }
    },
    showView() {
      this.showFlag = true
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.foodView, {
            click: true
          })
        } else {
          this.scroll.refresh()
        }
      })
    },
    closeView() {
      this.showFlag = false
    }


  },
  components: {
    CartControl: CartControl,
    Split: Split
  }
};
