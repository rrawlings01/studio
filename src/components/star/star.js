// 星星长度 
const LENGTH = 5

// 星星的状态
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'

export default{
  props:{
    score:{
      type:Number
    }
  },
  computed:{
    itemClasses(){
      let result = []

      // 4.7 
      let score = Math.floor(this.score * 2) / 2

      // 半星
      let hasDecimal = score % 1 !== 0

      // 全星
      let integer = Math.floor(score)

      // 遍历全星
      for(let i = 0; i < integer; i++){
        result.push(CLS_ON)
      }

      // 处理半星
      if(hasDecimal){
        result.push(CLS_HALF)
      }

      // 补齐
      while(result.length < LENGTH){
        result.push(CLS_OFF)
      }

      return result
    }
  }
};
