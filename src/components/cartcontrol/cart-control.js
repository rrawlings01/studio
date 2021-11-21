import Vue from 'vue'

export default {
  data() {
    return {}
  },
  props: {
    food: {
      type: Object,
      default: {}
    }
  },
  methods: {
    decreaseCart() {
      this.food.count--;
    },
    increaseCart() {
      if (!this.food.count) {
        Vue.set(this.food, "count", 1)
      } else {
        this.food.count++;
      }
    }
  }
};
