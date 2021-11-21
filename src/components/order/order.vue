<template>
  <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="(item,index) in list" :key="index" :title="item.name" >
      <span>{{'X' + item.count}}</span>
  </van-cell>
  
</van-list>
</template>

<script src="./order.js"></script>
<style src="./order.css></style>
