<template>
  <div class="shopcart" :class="{'highligh':totalCount>0}">
    <div class="shopcart-wrapper">
      <!--底部左侧-->
      <div class="content-left">
        <div class="logo-wrapper" :class="{'highligh':totalCount>0}">
          <span class="icon-shopping_cart logo" :class="{'highligh':totalCount>0}" @click="toggleList"></span>
          <i class="num" v-show="totalCount">{{totalCount}}</i>
        </div>
        <div class="desc-wrapper">
          <p class="total-price" v-show="totalCount">${{totalPrice}}</p>
          <p class="tip" :class="{'highligh':totalCount>0}"> Total {{poiInfo.shipping_fee_tip}}</p>
        </div>
      </div>
      <!--底部右侧-->
      <div class="content-right" :class="{'highligh':totalCount>0}" @click="payment">
        {{payStr}}
      </div>
      <!-- 购物车列表 -->
      <div class="shopcart-list" v-show="listShow" :class="{'show':listShow}">
        <div class="list-top" v-if="poiInfo.discounts2">
          {{poiInfo.discounts2[0].info}}

        </div>
        <div class="list-header">
          <h3 class="title">Pocket 1</h3>
          <div class="empty" @click="clearAll">
            <img src="./img/ash_bin.png"/>
            <span>Empty shopping cart</span>
          </div>
        </div>
        <div class="list-content" ref="listContent">
          <ul>
            <li class="food-item" v-for="(food,index) in selectFoods" :key="index">
              <div class="desc-wrapper">
                <div class="desc-left">
                  <div class="name">{{food.name}}</div>
                  <div class="unit" v-show="!food.description">{{food.unit}}</div>
                  <div class="description" v-show="!food.unit">{{food.description}}</div>
                </div>
                <div class="desc-right">${{food.min_price || food.price}}</div>
              </div>
              <div class="cartcontrol-wrapper">
                <app-cart-control :food="food"></app-cart-control>
              </div>
            </li>
          </ul>
        </div>
        <div class="list-bottom"></div>
      </div>
    </div>
    <div class="shopcart-mask" v-show="listShow" @click="hideMask"></div>
    <van-dialog v-model="show" :title="'确认支付' + (totalCount + 9) + '$'" show-cancel-button @confirm="submitPayment">
     
</van-dialog>
  </div>
  
</template>

<script src="./shopcart.js"></script>
<style src="./shopcart.css></style>
