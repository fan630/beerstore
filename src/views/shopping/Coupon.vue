<template>
    <div class="coupon">
        <div class="container">
            <div class="title my-5">隨機抽取卡片拿Coupon</div>
                <div class="row">
                    <div class="col-md-4 mb-4" v-for="item in collection" :key="item.id">
                    <div class="card">
                        <vue-flipcard
                            :width="343"
                            ref="flipcard"
                            disable="disable" direction="vertical">
                            <div class="card-body front bg-cover" slot="front" @click="onManualFlip(item.id)"
                                style="height:100%; width:100%"
                                :style="{backgroundImage: `url(${item.img})`}"
                                >
                            </div>
                            <div class="card-body content back" slot="back" @click="onManualFlip(item.id)"
                                style="height:100%; width:100%"
                                >
                                <h1>背面 | Back</h1>
                                <p>这是一个自定义的翻转卡片，点击按钮以翻转</p>
                                <p>Click the button to flip manually!</p>
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
          collection:[]
      }
  }, 
  methods: {
    onManualFlip (index) {
      this.$refs.flipcard[index -1].flip()
    }
  }, 
  created(){
      axios.get('/data.json').then(res => {
          this.collection = res.data
      })
  }
}
</script>

<style lang="scss">
  .title {
    font-size: 32px;
    text-align: center;
    font-weight: bold;
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

</style>