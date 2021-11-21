<template>
  <div class="ratings" ref="rateView">
    <div class="ratings-wrapper">
      <div class="overview">
        <div class="overview-left">
          <div class="comment-score">
            <p class="score">{{ratings.comment_score}}</p>
            <p class="text">Merchant Rating</p>
          </div>
          <div class="other-score">
            <div class="quality-score item">
              <span class="text">taste</span>
              <Star :score="ratings.quality_score" class='star'></Star>
              <span class="score"></span>
            </div>
            <div class="pack-score item">
              <span class="text">Package</span>
              <Star :score="ratings.pack_score" class='star'></Star>
              <span class="score"></span>
            </div>
          </div>
        </div>
        <div class="overview-right">
          <div class="delivery-score">
            <p class="score">{{ratings.delivery_score}}</p>
            <p class="text">Delivery score</p>
          </div>
        </div>
      </div>

      <Split></Split>

      <div class="content">
        <div class="rating-select" v-if="ratings.tab">
          <span
            class="item"
            :class="{'active':selectType==2}"
            @click="selectTypeFn(2)">
            {{ratings.tab[0].comment_score_title}}
          </span>
          <span
            class="item"
            :class="{'active':selectType==1}"
            @click="selectTypeFn(1)">
            {{ratings.tab[1].comment_score_title}}
          </span>
          <span
            class="item"
            :class="{'active':selectType==0}"
            @click="selectTypeFn(0)">
            <img v-show="selectType != 0" src="./img/icon_sub_tab_dp_normal@2x.png"/>
            <img v-show="selectType == 0" src="./img/icon_sub_tab_dp_highlighted@2x.png"/>
            {{ratings.tab[2].comment_score_title}}
          </span>
        </div>

        <div class="labels-view">
          <span
            class="item"
            v-for="(item,index) in ratings.labels"
            :key="index"
            :class="{'heigligh':item.label_star>0}"
          >
            {{item.content}}{{item.label_count}}
          </span>
        </div>

        <ul class="rating-list">
          <li
            v-for="(comment,index) in selectComments"
            :key="index"
            class="comment-item"
          >
            <div class="comment-header">
              <img :src="comment.user_pic_url" v-if="comment.user_pic_url" />
              <img src="./img/anonymity.png" v-if="!comment.user_pic_url"  />
            </div>
            <div class="comment-main">
              <div class="user">
                {{comment.user_name}}
              </div>
              <div class="time">
                {{formatDate(comment.comment_time)}}
              </div>
              <div class="star-wrapper">
                <span class="text">score</span>
                <Star :score="comment.order_comment_score" class="star"></Star>
              </div>
              <div class="content">
                {{comment.comment}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./ratings.js"></script>
<style scoped src="./ratings.css></style>
