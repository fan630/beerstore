<template>
    <div>
        <div class="container">
            <h1 class="text-center">今朝有酒今朝醉</h1>
                <!-- 購買商品 -->
                <div class="row d-flex justify-content-center">
                    <div class="col-md-12">
                        <div
                            class="table-responsive"
                        >
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th width="100">選項</th>
                                        <th class="text-center">商品圖片</th>
                                        <th class="text-right">商品名稱</th>
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
                                        <td class="align-middle text-right"  >{{item.product.title}}</td>
                                        <td class="align-middle text-right">{{item.qty}}</td>
                                        <td class="align-middle text-right">${{item.product.price}}</td>
                                        <td class="align-middle text-right">
                                            <strong>${{item.final_total}}</strong>
                                        </td>
                                    </tr>
                                    <tr v-if="cart.final_total">
                                        <td colspan="5" class="text-right">
                                            合計
                                        </td>
                                        <td class="text-right">
                                            <strong>{{ cart.final_total }}</strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>  
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'OrderList', 
    data(){
        return{
            isLoading: false, 
        }
    }, 
    props:['cart'], 
    methods:{
        removeCartItem(id){
            const api = `https://vue-course-api.hexschool.io/api/fan630/cart/${id}`
            this.isLoading = true;
            this.$http.delete(api).then((response) => {
                this.getCart()
                this.isLoading = false
            })
        }, 
        getCart(){
            const api = `https://vue-course-api.hexschool.io/api/fan630/cart`
            this.isLoading = true;
            this.$http.get(api).then((response) => {
                this.cart = response.data.data
                console.log(this.cart)
                this.isLoading = false
            })
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