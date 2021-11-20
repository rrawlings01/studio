import Star from '../star/Star';

export default {
  data(){
    return {
      isShow:false
    }
  },
  components:{
    "app-star":Star
  },
  props:{
    poiInfo:{
      type:Object,
      default:{}
    }
  },
  computed:{
    head_pic_url(){
      return "background-image: url(" + this.poiInfo.head_pic_url + ");"
    },
    head_bg(){
      return "background-image: url(" + this.poiInfo.pic_url + ");"
    },
    detail_bg(){
      return "background-image: url(" + this.poiInfo.poi_back_pic_url + ");"
    }
  },
  methods:{
    showBulletin(){
      this.isShow = true
    },
    closeBulletin(){
      this.isShow = false
    }
  }
};
