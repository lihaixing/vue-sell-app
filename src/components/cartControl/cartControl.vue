<template>
  <div class="cart-control">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">
        <i class="icon-remove_circle_outline"></i>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click="addCart">
      <i class="icon-add_circle"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  // import Bus from '../Bus'
  export default {
    name: 'cart-control',
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart (event) {
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
        this.$emit('add-goods', event.target)
        // 非父子组件之间的通信
        // Bus.$emit('tran', event.target)
      },
      decreaseCart () {
        this.food.count--
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  /*动画*/
  .move-enter, .move-leave-to {
    opacity: 0;
    /*transform-origin:center center;*/
    transform: translate3d(24px, 0, 0) rotateZ(180deg);
  }

  .move-enter-active, .move-leave-active {
    transition: all 0.5s linear;
  }

  .cart-control {
    font-size: 0;
    .cart-decrease,
    .cart-add {
      display: inline-block;
      padding: 6px;
      font-size: 24px;
      line-height: 24px;
      color: rgb(0, 160, 220)
    }
    .cart-add {

    }
    .cart-count {
      display: inline-block;
      font-size: 10px;
      width: 12px;
      line-height: 24px;
      text-align: center;
      color: rgb(147, 153, 159);
      vertical-align: top;
      margin-top: 6px;

    }
    .cart-add {

    }
  }
</style>
