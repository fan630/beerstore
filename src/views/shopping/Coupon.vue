<template>
    <div class="coupon">
        <div class="container">
            <div class="title my-5">Click one and get your coupon</div>
                <div class="row">
                    <div class="col-md-4 mb-4" v-for="item in collection" :key="item.id">
                    <div class="card"
                        >
                            <vue-flipcard
                                :width="343"
                                ref="flipcard"
                                disable="disable" direction="vertical">
                                <div class="card-body front bg-cover" slot="front" 
                                    @click="onManualFlip(item.id, isFlip, item.coupon.couponCode)"
                                    style="height:100%; width:100%"
                                    :style="{backgroundImage: `url(${item.img})`}"
                                    >
                                </div>
                                <div class="card-body back" slot="back" 
                                    @click="onManualFlip(item.id)"
                                    style="height:100%; width:100%"
                                    >
                                    <div class="card-text text-center">
                                        <div class="title">恭喜你！</div>
                                        <p>您的coupon優惠碼為:{{item.coupon.couponCode}}</p>
                                        <span>
                                            <strong :class="[ Number(item.coupon.discount) > 25 ? 'red': '']">折扣幅度:{{item.coupon.discount}}%</strong>
                                        </span>
                                        <div class="mt-3">                             
                                            <button class="btn btn-outline-success mr-2" @click.stop ="backtocustomer"
                                                >我要使用優惠券
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </vue-flipcard>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { eventBus } from "../../main.js";

export default {
  name: 'Coupon',
  data(){
      return{
          collection:[
                {
                    "id": 1, 
                    "img": "https://source.unsplash.com/250x250/?beer",
                    "coupon":{
                        "couponCode": "beer", 
                        "discount": "10"
                    }
                }, 
                {
                    "id": 2,
                    "img": "https://source.unsplash.com/250x250/?bottle",
                    "coupon": {
                        "couponCode": "bottle",
                        "discount": "30"
                    }
                },
                {
                    "id": 3,
                    "img": "https://source.unsplash.com/250x250/?pub",
                    "coupon": {
                        "couponCode": "longtimenosee",
                        "discount": "40"
                    }
                },
                {
                    "id": 4,
                    "img": "https://source.unsplash.com/250x250/?brewery",
                    "coupon": {
                        "couponCode": "brewery",
                        "discount": "30"
                    }
                },
                {
                    "id": 5,
                    "img": "https://source.unsplash.com/250x250/?doll",
                    "coupon": {
                        "couponCode": "doll",
                        "discount": "50"
                    }
                },
                {
                    "id": 6,
                    "img": "https://source.unsplash.com/250x250/?poker",
                    "coupon": {
                        "couponCode": "game",
                        "discount": "30"
                    }
                },
                {
                    "id": 7,
                    "img": "https://source.unsplash.com/250x250/?movie",
                    "coupon": {
                        "couponCode": "movie",
                        "discount": "20"
                    }
                },
                {
                    "id": 8,
                    "img": "https://source.unsplash.com/250x250/?taipei",
                    "coupon": {
                        "couponCode": "taipei",
                        "discount": "30"
                    }
                },
                {
                    "id": 9,
                    "img": "https://source.unsplash.com/250x250/?basketball",
                    "coupon": {
                        "couponCode": "fanbeer",
                        "discount": "50"
                    }
                }
          ],
          lists:[], 
          isFlip: false, 
          couponCode:'',
      }
  }, 
  computed:{
      couponList(){
            this.collection.forEach(item => {
                return this.lists.push(item.coupon)
            })
            return this.lists.sort(() => Math.random() - 0.5)
      }
  }, 
  methods: {
    onManualFlip (index, isFlip, getcouponItem) {
      if(this.isFlip === false){
          this.$refs.flipcard[index -1].flip()
          this.isFlip = true
          this.couponCode = getcouponItem
      }else{
          this.$bus.$emit('message:push', '已經抽過一次囉~', 'danger');
          return
      }
    },
    backtocustomer(){
        setTimeout(() => {
            eventBus.$emit('getCouponed', this.couponCode)
        }, 1000);
        this.$router.push('/cart');
    },
  },
}
</script>

<style lang="scss" scoped>
  @media screen and (max-width:768px){
      .vue-flipcard{
          width:100% !important;
      }
  }
  @media (min-width: 768px) and (max-width: 1200px) { 
      .vue-flipcard{
          width:100% !important;
      }
  }
  .card-text{
      padding-top:50px;
  }
  .card:hover{
     animation: shake 0.5s;
  }
  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}
  
</style>