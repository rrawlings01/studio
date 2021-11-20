import BScroll from 'better-scroll'
import CartControl from '../cartcontrol/CartControl'
import axios from 'axios';

export default {
  data() {
    return {
      fold: true,
      show:false,
    }
  },
  props: {
    poiInfo: {
      type: Object,
      default: {}
    },
    selectFoods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    totalCount() {
      let num = 0
      this.selectFoods.forEach((food) => {
        num += food.count
      })
      return num;
    },
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach((food) => {
        total += food.count * (food.min_price || food.price)
      })
      return total;
    },
    payStr() {
      if (this.totalCount > 0) {
        return "Check Out"
      } else {
        return this.poiInfo.min_price_tip
      }
    },
    listShow() {
      if (!this.totalCount) {
        this.fold = true;
        return false
      }
      let show = !this.fold;
      if (show) {
        this.$nextTick(() => {
            if (!this.shopScroll) {
              this.shopScroll = new BScroll(this.$refs.listContent, {
                click: true
              })
            } else {
              this.shopScroll.refresh()
            }
          }
        )
      }
      return show

    }
  },
  methods: {
    submitPayment(){
        axios.post('http://localhost:6166/payment/add',this.selectFoods)
      .then((res) => {
            if (res.data.code === 200) {
              debugger
            } else {
            }
          })
    },
    payment(){
      if(this.totalCount){

        this.show = true;
      }
    },
    toggleList() {
      if (!this.totalCount) {
        return;
      }
      this.fold = !this.fold
    },
    clearAll() {
      this.selectFoods.forEach((food) => {
        food.count = 0;
      })
    },
    hideMask() {
      this.fold = true;
    }

  },
  components: {
    "app-cart-control": CartControl
  }
};
