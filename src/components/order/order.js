import axios from 'axios';

export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
      var that = this;
          axios.post('http://localhost:6166/payment/page',{
          
        })
        .then((res) => {
              if (res.data.code === 200) {
                that.list = res.data.data;
                that.finished = true;
              } else {
              }
            })
    },
  },
};
