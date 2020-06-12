<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <!-- <div class="container" v-if="itemList"> -->
        <div class="container" v-if="itemList !== 0">
            <h3 class="text-center my-3">今朝有酒今朝醉</h3>
                <!-- 購買商品 -->
                <div class="row d-flex justify-content-center">
                    <div class="col-md-10">
                        <div
                            class="table-responsive"
                        >
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th width="100">選項</th>
                                        <th class="text-center">商品圖片</th>
                                        <th class="text-center">商品名稱</th>
                                        <th
                                            width="100"
                                            class="text-right"
                                        >數量</th>
                                        <th
                                            width="80"
                                            class="text-right"
                                        >單價</th>
                                        <th
                                            width="80"
                                            class="text-right"
                                        >小計</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts">
                                        <td class="align-middle text-center">
                                            <a  @click="removeCartItem(item.id)">
                                                <i class="fas fa-trash-alt"
                                                    style='font-size:16px'
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                        </td>
                                        <td
                                            class="align-middle bg-cover box2"
                                            :style = "{backgroundImage: `url(${item.product.imageUrl})`}"
                                        >
                                        </td>
                                        <td class="align-middle text-center"  >{{item.product.title}}
                                            <div class="text-success" v-if="item.coupon">
                                                已套用優惠券
                                            </div>
                                        </td>
                                        <td class="align-middle text-right">{{item.qty}}</td>
                                        <td class="align-middle text-right">${{item.product.price}}</td>
                                        <td class="align-middle text-right">
                                            <strong>${{item.final_total}}</strong>
                                        </td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr v-if="cart.total">
                                            <td colspan="5" class="text-right">合計</td>
                                            <td class="text-right">{{ cart.total }}</td>
                                        </tr>
                                        <tr v-if="cart.final_total !== cart.total">
                                            <td colspan="5" class="text-right text-success">折扣價</td>
                                            <td class="text-right text-success">{{ cart.final_total }}</td>
                                        </tr>
                                    </tfoot>
                            </table>
                            <div>✦ 輸入折扣碼「longtimenosee」，和 FanBeer 一同歡慶開幕吧！</div>
                            <div class="input-group mb-3 input-group-sm">
                                
                                <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                                        套用優惠碼
                                    </button>
                                </div>
                            </div>
                        </div>  
                  </div>
            </div>
        </div>
        <div class="h2 my-3" v-else>您目前沒有商品喔!</div>
        <router-link to="/checkout" class="btn btn-primary text-white" href="#" role="button">前往結帳</router-link>
    </div>
</template>

<script>
export default {
    name:'Cart', 
    data(){
        return{
            cart:{},
            isLoading: false, 
            coupon_code:'', 
        }
    }, 
    computed:{
        itemList(){
            return this.cart.carts.length
        }
    },
    methods:{
        removeCartItem(id){
            const api = `https://vue-course-api.hexschool.io/api/fan630/cart/${id}`
            this.isLoading = true;
            this.$http.delete(api).then((response) => {
                this.getCart()
                this.isLoading = false
                this.$bus.$emit('message:push', response.data.message, 'danger')
            })
        }, 
        getCart(){
            const api = `https://vue-course-api.hexschool.io/api/fan630/cart`
            this.isLoading = true;
            this.$http.get(api).then((response) => {
                this.cart = response.data.data
                this.isLoading = false
            })
        }, 
        addCouponCode(){
            const api = `https://vue-course-api.hexschool.io/api/fan630/coupon`
            let coupon = {
                code: this.coupon_code
            }
            this.isLoading = true;
            this.$http.post(api, {data: coupon}).then((response) => {
                this.getCart()
                this.isLoading = false
                this.$bus.$emit('message:push', response.data.message, 'success')
            })
            this.coupon_code = ''
        },
    }, 
    created(){
        this.getCart()
    }
}
</script>

<style lang="scss" scoped>
.bg-cover{
    background-position: center center; 
    background-size: cover;
}
.box2{
    width: 160px;
    height: 200px;
}
</style>