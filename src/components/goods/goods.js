import CartControl from "../cartcontrol/CartControl";
import BScroll from "better-scroll";
import Shopcart from "../shopcart/Shopcart";
import ProductDetail from "../productDetail/ProductDetail";
import axios from "axios";

export default {
  data() {
    return {
      container: {},
      goods: [],
      poiInfo: {},
      listHeight: [],
      menuScroll: {},
      foodScroll: {},
      scrollY: 0,
      selectFood: {},
    };
  },
  components: {
    "app-shopcart": Shopcart,
    "app-cart-control": CartControl,
    "app-product-detail": ProductDetail,
  },
  created() {
    fetch("/api/goods")
      .then((res) => res.json())
      .then((response) => {
        if (response.code == 0) {
          this.container = response.data.container_operation_source;
          this.poiInfo = response.data.poi_info;

          // this.goods = response.data.food_spu_tags;
          var that = this;

           axios.post('http://localhost:6166/food/page',{
            pageSize:100000
          },{
            headers:{
              token: window.sessionStorage.getItem('token'),
            }
          }).then((res)=>{
            var food = res.data.data;
            var indexTypeSub = {};
            food.forEach((item)=>{
              if (!indexTypeSub[item.typename]) {
                indexTypeSub[item.typename] = [];
              } 
                indexTypeSub[item.typename].push(item)
            })
            var foodandtype = [];
            for (const key in indexTypeSub) {
              if (Object.hasOwnProperty.call(indexTypeSub, key)) {
                const element = indexTypeSub[key];
                element.min_price = element.price
                foodandtype.push({
                  name : key,
                  icon : '',
                  spus:element
                })
              }
            }
            that.goods = foodandtype;
          })

       
          this.$nextTick(() => {
            // 执行滚动方法
            this.initScroll();
            // 计算分类的区间高度
            this.calculateHeight();
          });
        }
      });
  },
  methods: {
    head_bg(imgName) {
      return "background-image: url(" + imgName + ");";
    },
    initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuScroll, {
        click: true,
      });
      this.foodScroll = new BScroll(this.$refs.foodScroll, {
        probeType: 3,
        click: true,
      });
      //foodScroll监听事件
      this.foodScroll.on("scroll", (pos) => {
        this.scrollY = Math.abs(pos.y);
      });
    },
    calculateHeight() {
      let foodlist =
        this.$refs.foodScroll.getElementsByClassName("food-list-hook");

      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodlist.length; i++) {
        let item = foodlist[i];
        // 累加
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    selectMenu(index) {
      let foodlist =
        this.$refs.foodScroll.getElementsByClassName("food-list-hook");
      let element = foodlist[index];
      this.foodScroll.scrollToElement(element, 250);
    },
    calculateCount(spus) {
      let count = 0;
      if (!spus) {
        return count
      }
      spus.forEach((food) => {
        if (food.count > 0) {
          count += food.count;
        }
      });
      return count;
    },
    showDetail(food) {
      this.selectFood = food;
      this.$refs.foodView.showView();
    },
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    },
    selectFoods() {
      let foods = [];
      this.goods.forEach((item) => {
        item.spus.forEach((food) => {
          if (food.count > 0) {
            foods.push(food);
          }
        });
      });
      return foods;
    },
  },
};
