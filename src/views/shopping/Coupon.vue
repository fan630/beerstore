<template>
    <div class="coupon">
        <div class="container">
            <div class="title my-5">Click one and get for your coupon</div>
                <div class="row">
                    <div class="col-md-4 mb-4" v-for="item in collection" :key="item.id">
                    <div class="card">
                        <vue-flipcard
                            :width="343"
                            ref="flipcard"
                            disable="disable" direction="vertical">
                            <div class="card-body front bg-cover" slot="front" @click="onManualFlip(item.id, isFlip, item.coupon.couponCode)"
                                style="height:100%; width:100%"
                                :style="{backgroundImage: `url(${item.img})`}"
                                >
                            </div>
                            <div class="card-body content back" slot="back" @click="onManualFlip(item.id)"
                                style="height:100%; width:100%"
                                >
                                <div class="card-title text-center">
                                        <h1>恭喜你！</h1>
                                        <p>您的coupon優惠碼為:{{item.coupon.couponCode}}</p>
                                        <strong :class="[ Number(item.coupon.discount) > 25 ? 'red': '']">折扣幅度:{{item.coupon.discount}}%</strong>
                                        <div>
                                            <button
                                                class="btn btn-outline-success mr-2"
                                                @click="backtocustomer"
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

export default {
  name: 'Coupon',
  data(){
      return{
          collection:[], 
          lists:[], 
          isFlip: false, 
          couponCode:''
      }
  }, 
  computed:{
      couponList(){
            this.collection.forEach(item => {
                return this.lists.push(item.coupon)
            })
            // console.log(this.lists.sort(() => Math.random() - 0.5))
            return this.lists.sort(() => Math.random() - 0.5)
      }
  }, 
  methods: {
    onManualFlip (index, isFlip, couponItem) {
      if(this.isFlip === false){
          this.$refs.flipcard[index -1].flip()
          this.isFlip = true
          this.couponCode = couponItem
      }else{
          alert('已經抽過一次囉~')
          return
      }
    },
    getCollection(){
        axios.get('/data.json').then(res => {
          this.collection = res.data
      })
    }, 
    checkVal(val){
        this.couponCode = val
    }, 
    backtocustomer(){
        this.$router.push('/cart');
    }
  }, 
  created(){
      this.getCollection()
  },
}
</script>

<style lang="scss">
  .title {
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    font-family: 'Merriweather', serif;
  }
  .desc {
    font-size: 16px;
    color: #555;
    text-align: center;
    margin-bottom: 30px;
  }
  .content {
    padding: 10px 10px;
    text-align: left;
  }

  @media screen and (max-width:768px){
      .vue-flipcard{
          width:100% !important;
      }
  }

</style>