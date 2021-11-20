<template>
  <div class="seller" ref="sellerView">
    <div class="seller-wrapper">
      <Split></Split>
      <div class="seller-view">
        <div class="address-wrapper">
          <div class="address-left">
            {{seller.address}}
          </div>
          <div class="address-right">
            <div class="content"></div>
          </div>
        </div>

        <div class="pics-wrapper" v-if="seller.poi_env" ref="picsView">
          <ul class="pics-list" ref="picsList">
            <li
              ref="picsItem"
              class="pics-item"
              v-for="(imgurl,index) in seller.poi_env.thumbnails_url_list"
              :key="index"
            >
              <img :src="imgurl">
            </li>
          </ul>
        </div>

        <div class="safety-wrapper">
          View Food Safety File
          <span class="icon-keyboard_arrow_right"></span>
        </div>
      </div>

      <Split></Split>
      <div class="tip-wrapper">
        <div class="delivery-wrapper">
          Delivery service: {{seller.app_delivery_tip}}
        </div>

        <div class="shipping-wrapper">
          Delivery Time: {{seller.shipping_time}}
        </div>
      </div>

      <Split></Split>
      <div class="other-wrapper">
        <div class="server-wrapper">
          Merchant Service
          <div
            class="poi-server"
            v-for="(item,index) in seller.poi_service"
            :key="index"
          >
            <img :src="item.icon"> {{item.content}}
          </div>
        </div>
        <div class="discounts-wrapper">
          <div
            class="discounts-item"
            v-for="(item,index) in seller.discounts2"
            :key="index"
          >
            <div class="icon">
              <img :src="item.icon_url">
            </div>
            <div class="text">
              {{item.info}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./seller.js"></script>
<style scoped src="./seller.css></style>

