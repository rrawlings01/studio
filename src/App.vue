<template>
  <div id="app">
    <!--头部-->
    <app-header :poiInfo="poiInfo"></app-header>

    <!--导航-->
    <app-nav :commentNum="commentNum"></app-nav>

    <!--内容-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script src="./app.js"></script>
