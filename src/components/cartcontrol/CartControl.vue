<template>
  <div class="cartcontrol">
    <transition name="move">
      <div
        class="cart-decrease icon-remove_circle_outline"
        @click.stop.prevent="decreaseCart"
        v-show="food.count"
      ></div>
    </transition>
    <div class="cart-count" v-show="food.count">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="increaseCart">
      <i class="bg"></i>
    </div>
  </div>
</template>

<script src="./cart-control.js"></script>
<style src="./cart-control.css></style>
