<template>
  <transition name="food-detail">
    <div class="food" ref="foodView" v-show="showFlag">
      <div class="food-wrapper">
        <div class="food-content">
          <div class="img-wrapper">
            <img class="food-img" :src="food.picture"/>
            <span
              class="close-bt icon-close" @click="closeView"
            ></span>
            <img class="share-bt" src="./img/share.png"/>
            <img class="more-bt" src="./img/more.png"/>
          </div>
          <div class="content-wrapper">
            <h3 class="name">{{food.name}}</h3>
            <p class="saled">{{food.month_saled_content}}</p>
            <img class="product" v-show="food.product_label_picture" :src="food.product_label_picture"/>
            <p class="price">
              <span class="text">${{food.min_price}}</span>
              <span class="unit">/{{food.unit}}</span>
            </p>
            <div class="cartcontrol-wrapper">
              <CartControl :food="food"></CartControl>
            </div>
            <div class="buy" @click="addProduct" v-show="!food.count||food.count==0">
              选规格
            </div>
          </div>
        </div>
        <Split></Split>
        <!--外卖评价-->
        <div class="rating-wrapper">
          <!--评价头部-->
          <div class="rating-title">
            <div class="like-ratio" v-if="food.rating">
              <span class="title">{{food.rating.title}}</span>
              <span class="retio">
                (
                {{food.rating.like_ratio_desc}}
                 <i>{{food.rating.like_ratio}}</i>
                )
              </span>
            </div>
            <div class="snd-title" v-if="food.rating">
              <span class="text">{{food.rating.snd_title}}</span>
              <span class="icon icon-keyboard_arrow_right"></span>
            </div>
          </div>
          <ul class="rating-content" v-if="food.rating">
            <li
              v-for="(comment,index) in food.rating.comment_list"
              :key="index"
              class="comment-item"
            >
              <div class="comment-header">
                <img :src="comment.user_icon" v-if="comment.user_icon"/>
                <img src="./img/anonymity.png" v-if="!comment.user_icon"/>
              </div>
              <div class="comment-main">
                <div class="user">
                  {{comment.user_name}}
                </div>
                <div class="time">
                  {{comment.comment_time}}
                </div>
                <div class="content">
                  {{comment.comment_content}}
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./product-detail.js"></script>
<style src="./product-detail.css></style>
