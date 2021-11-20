<template>
  <div class="header">
    <!-- {{poiInfo.name}} -->
    <!-- 顶部通栏 开始 -->
    <div class="top-wrapper">
      <!-- <div class="back-wrapper">
        <span class="icon-arrow_lift"></span>
      </div> -->

      <!-- <form class="search-wrapper">
        <span class="search-icon"></span>
        <input class="search-bar" type="text" placeholder="Search for in-store items" />
      </form> -->

      <!-- <div class="more-wrapper">
        <a class="spelling-bt" href="#">Fight order</a>
        <div class="more-bt">
          <i class="s-radius"></i>
          <i class="s-radius"></i>
          <i class="s-radius"></i>
        </div>
      </div> -->
    </div>

    <!-- 顶部通栏 结束 -->


    <!-- 主题内容 开始 -->
    <div class="content-wrapper">
      <div class="icon" :style="head_bg">
        <!--<img :src="poiInfo.pic_url" />-->
      </div>
      <div class="name">
        <h3>{{poiInfo.name}}</h3>
      </div>
      <!-- <div class="collect">
        <img src="./img/star.png" />
        <span>collect</span>
      </div> -->
    </div>

    <!-- 主题内容 结束 -->


    <!-- 公告内容 开始 -->
    <div class="bulletin-wrapper">
      <img class="icon" v-if="poiInfo.discounts2" :src="poiInfo.discounts2[0].icon_url" />

      <span class="text" v-if="poiInfo.discounts2">{{poiInfo.discounts2[0].info}}</span>
      <div class="detail" v-if="poiInfo.discounts2" @click="showBulletin">
        {{poiInfo.discounts2.length}}Events
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>

    <!-- 公告内容 结束 -->


    <!-- 背景内容 开始 -->
    <div class="bg-wrapper" :style="head_pic_url">
      <!-- <img :src="poiInfo.head_pic_url" /> -->
    </div>

    <!-- 背景内容 结束 -->

    <!-- 公告详情 开始 -->
    <transition name="bulletin-detail">
      <div class="bulletin-detail" v-show="isShow">
        <div class="detail-wrapper">
          <!-- 相关内容容器 -->
          <div class="main-wrapper" :style="detail_bg">
            <div class="icon" :style="head_bg"></div>
            <h3 class="name">{{poiInfo.name}}</h3>
            <!-- 星级评价 -->
            <div class="score">
              <app-star :score="poiInfo.wm_poi_score"></app-star>
              <span>{{poiInfo.wm_poi_score}}</span>
            </div>

            <p class="tip">
              {{poiInfo.min_price_tip}} <i>|</i> {{poiInfo.shipping_fee_tip}} <i>|</i> {{poiInfo.delivery_time_tip}}
            </p>

            <p class="time">
              Delivery Time: {{poiInfo.shipping_time}}
            </p>

            <div class="discounts" v-if="poiInfo.discounts2">
              <p>
                <img :src="poiInfo.discounts2[0].icon_url" />
                <span>{{poiInfo.discounts2[0].info}}</span>
              </p>
            </div>
          </div>

          <!-- 关闭内容容器 -->
          <div class="close-wrapper">
            <span class="icon-close" @click="closeBulletin"></span>
          </div>
        </div>
      </div>
    </transition>
 

    <!-- 公告详情 结束 -->
  </div>
</template>

<script src="./header.js"></script>
<style scoped src="./header.css></style>
