<template>
  <div class="goods">
    <!--分类列表-->
    <div class="menu-wrapper" ref="menuScroll">
      <ul>
        <li
          class="menu-item"
          :class="{ current: currentIndex === 0 }"
          @click="selectMenu(0)"
        >
          <p class="text">
            <img
              class="icon"
              :src="container.tag_icon"
              v-if="container.tag_icon"
            />
            {{ container.tag_name }}
          </p>
        </li>

        <li
          class="menu-item"
          :class="{ current: currentIndex === index + 1 }"
          v-for="(item, index) in goods"
          :key="index"
          @click="selectMenu(index + 1)"
        >
          <p class="text">
            <img class="icon" :src="item.icon" v-if="item.icon" />
            {{ item.name }}
          </p>
          <i class="num" v-show="calculateCount(item.spus)">
            {{ calculateCount(item.spus) }}
          </i>
        </li>
      </ul>
    </div>

    <!--商品列表-->
    <div class="foods-wrapper" ref="foodScroll">
      <ul>
        <!--专场-->
        <li class="container-list food-list-hook">
          <div
            v-for="(item, index) in container.operation_source_list"
            :key="index"
          >
            <img :src="item.pic_url" />
          </div>
        </li>
        <!-- 具体分类 -->
        <li
          v-for="(item, index) in goods"
          :key="index"
          class="food-list food-list-hook"
        >
          <h3 class="title">{{ item.name }}</h3>
          <!-- 具体的商品列表 -->
          <ul>
            <li
              v-for="(food, index) in item.spus"
              :key="index"
             
              class="food-item"
            >
              <div class="icon" :style="head_bg(food.picture)"></div>
              <div class="content">
                <h3 class="name">{{ food.name }}</h3>
                <p class="desc" v-if="food.description || food.desc">
                  {{ food.description }}
                </p>
                <div class="extra">
                  <span class="saled">{{ food.month_saled_content }}</span>
                  <span class="praise">{{ food.praise_content }}</span>
                </div>
                <img class="product" :src="food.product_label_picture || food.price" alt="" />
                <p class="price">
                  <span class="text">${{ food.min_price || food.price}}</span>
                  <span class="unit">/{{ food.unit }}</span>
                </p>
              </div>
              <div class="cartcontrol-wrapper">
                <app-cart-control :food="food"></app-cart-control>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!--购物车-->
    <app-shopcart :poiInfo="poiInfo" :selectFoods="selectFoods"></app-shopcart>
    <!-- 商品详情 -->
    <app-product-detail :food="selectFood" ref="foodView"></app-product-detail>
  </div>
</template>

<script src="./goods.js"></script>
<style scoped src="./goods.css></style>
