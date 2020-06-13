<template>
  <div>
    <div class="container my-4">
        <div class="row text-center justify-content-center">
                <div class="col-md-4">
                  <div
                      v-if="!order.is_paid"
                      class="alert alert-warning border-rounded"
                      role="alert"
                  >
                      付款
                  </div>
                  <div
                      v-else
                      class="alert alert-light border-rounded"
                      role="alert"
                  >
                      付款
                  </div>
                </div>
                <div class="col-md-4">
                  <div
                      v-if="order.is_paid"
                      class="alert alert-warning border-rounded"
                      role="alert"
                  >
                      完成
                  </div>
                  <div
                      v-else
                      class="alert alert-light border-rounded"
                      role="alert"
                  >
                      完成
                  </div>
                </div>
        </div>
    </div>

    <!-- 購買商品資訊 -->
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-md-8">
                <h3 class="text-center my-4">購買資訊</h3>
                <table class="table text-right">
                    <thead>
                        <th>產品</th>
                        <th>數量</th>
                        <th>單價</th>
                        <th>單價</th>
                    </thead>
                    <tbody>
                        <tr v-for="item in order.products" :key="item.id">
                            <td style="height: 150px; background-size: cover; background-position: center; padding:2px 0;"
                                :style = "{backgroundImage: `url(${item.product.imageUrl})`}"
                            >
                            </td>
                            <td class="align-middle">{{ item.product.title }}</td>
                            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                            <td class="align-middle">{{ item.final_total }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3" class="align-middle">總計</td>
                            <td>
                                <strong>{{ order.total }}</strong>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
    <!-- 訂購人資訊-->
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-md-8">
                <h3 class="text-center my-3">個人資料</h3>
                <div class="table-responsive">
                    <table class="table text-right">
                        <tbody>
                            <tr>
                                <th scope="row">Email</th>
                                <td>{{order.user.email}}</td>
                            </tr>
                            <tr>
                                <th scope="row">姓名</th>
                                <td>{{order.user.name}}</td>
                            </tr>
                            <tr>
                                <th scope="row">電話</th>
                                <td>{{order.user.tel}}</td>
                            </tr>
                            <tr>
                                <th scope="row">地址</th>
                                <td>{{order.user.address}}</td>
                            </tr>
                             <tr>
                                <th scope="row">付款狀態</th>
                                <td v-if="!order.is_paid">尚未付款</td>
                                <td v-else class="text-success">付款完成</td>
                            </tr>       
                        </tbody>
                    </table>
                </div>
                <div class="d-flex justify-content-center my-5">
                    <button
                        v-if="!order.is_paid"
                        class="btn btn-primary text-white btn-lg"
                        @click="payOrder"
                    >確認付款
                    </button>
                    <button
                        v-else
                        class="btn btn-outline-success mr-2 btn-lg"
                        @click="backtocustomer"
                    >繼續選購
                    </button>
                </div>
            </div>
        </div>
    </div>


  </div>
</template>

<script>

export default {
  name: 'CheckOutPay',
  data(){
    return{
        orderId: '',
        order:{
            user:{}
        }
    }
  }, 
  methods:{
    getOrder(){
        const api = `https://vue-course-api.hexschool.io/api/fan630/order/${this.orderId}`
        this.isLoading = true;
        this.$http.get(api).then((response) => {
            if(response.data.success){
                this.order = response.data.order
            }else{
                this.$bus.$emit('message:push', response.data.message, 'warning')
            }
            this.isLoading = false  
        })
    }, 
    payOrder(){
        const api = `https://vue-course-api.hexschool.io/api/fan630/pay/${this.orderId}`
        this.isLoading = true;
        this.$http.post(api).then((response) => {
            if(response.data.success){
                this.getOrder()
            }
            this.isLoading = false  
        })
    }, 
    backtocustomer(){
        this.$router.push(`/shop`)
    }
  },
  created(){
    this.orderId = this.$route.params.orderId;
    this.getOrder()
  },
}
</script>

<style scoped lang="scss">

</style>