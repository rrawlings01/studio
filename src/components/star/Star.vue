<template>
  <div class="star">
    <span class="star-item" v-for="(itemClass,index) in itemClasses" :key="index" :class="itemClass"></span>
  </div>
</template>

<script src="./star.js"></script>
<style src="./star.css></style>
