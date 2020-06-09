<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="jumbotron jumbotron-fluid bg-cover jumbotron-bg d-flex flex-column justify-content-center text-left">
            <div class="container bg-transparented">
                <h1 class="display-4">釀‧哲學</h1>
                <p class="lead">
                    最天然的不過濾，不滅菌，不添加非天然香料
                    堅持手工釀造，堅持小批量生產，堅持自然發酵
                    自有配方，自有設備，自有釀酒師，自有酵母農場
                </p>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <!--標題列-->
                <div class="col-md-3 mb-2">
                    <div
                        class="list-group sticky-top" style="top:10px"
                        id="myList"
                        role="tablist"
                    >
                        <a
                            class="list-group-item list-group-item-action active"
                            data-toggle="list"
                            href="#home"
                            role="tab"
                        >
                            <span>所有商品</span>
                        </a>
                        <a
                            class="list-group-item list-group-item-action"
                            data-toggle="list"
                            href="#profile"
                            role="tab"
                        >
                            <i class="fas fa-beer mr-1">
                            </i>
                            <span>Beer</span>
                        </a>
                        <a
                            class="list-group-item list-group-item-action"
                            data-toggle="list"
                            href="#messages"
                            role="tab"
                        >Messages</a>
                        <a
                            class="list-group-item list-group-item-action"
                            data-toggle="list"
                            href="#settings"
                            role="tab"
                        >Settings</a>
                    </div>
                </div>
                <!--標題列-->
                <!--商品內容-->
                <div class="col-md-9">
                    <div class="row row-cols-1 row-cols-md-3">
                        <div class="col mb-4" v-for="item in products" :key="item.id">
                            <div class="card border-0 shadow h-100">
                                <div style="height: 350px; background-size: cover; background-position: center"
                                    :style = "{backgroundImage: `url(${item.imageUrl})`}"
                                >
                                </div>
                                <div class="card-body">
                                    <span class="badge badge-info float-left ml-2">{{item.category}}</span>
                                    <h5 class="card-title">
                                        <a href="#" class="text-dark">{{item.title}}</a>
                                    </h5>
                                    <p class="card-text text-left">{{item.content}}</p>
                                        <div class="d-flex justify-content-between align-items-baseline">
                                            <!--顯示原價和特價-->
                                            <del class="h6 text-muted">{{item.origin_price? `原價${item.origin_price}元` : '' }}</del>
                                            <div class="h6">特價{{item.price}}元</div>
                                        </div>
                                </div>
                                <div class="card-footer d-flex">
                                    <button type="button" class="btn btn-outline-secondary btn-sm"
                                        @click="getProduct(item.id)"
                                        >
                                        <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                        查看更多
                                    </button>
                                    <button type="button" class="btn btn-outline-primary btn-sm ml-auto"
                                        @click="addtoCart(item.id)">
                                        <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                        加到購物車
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--商品內容-->
            </div>
                <!-- modal -->
                <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{{product.title}}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img :src="product.imageUrl" class="img-fluid" alt="">
                                <blockquote class="blockquote mt-3">
                                <p class="mb-0 text-left">{{ product.content }}</p>
                                <footer class="blockquote-footer text-right">{{ product.description }}</footer>
                                </blockquote>
                                <div class="d-flex justify-content-between align-items-baseline">
                                    <del class="h6 text-muted">{{product.origin_price? `原價${product.origin_price}元` : '' }}</del>
                                    <div class="h6">特價{{product.price}}元</div>
                                </div>
                                <select name="" class="form-control mt-3" v-model="product.num">
                                    <option :value="num" v-for="num in 5" :key="num">
                                        選購 {{num}} {{product.unit}}瓶
                                    </option>
                                </select>
                            </div>
                            <div class="modal-footer">
                                <div class="text-muted text-nowrap mr-3">
                                    小計 
                                    <strong>{{ product.num * product.price }}</strong> 元
                                </div>
                                <button type="button" class="btn btn-primary"
                                    @click="addtoCart(product.id, product.num)">
                                    <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
                                    加到購物車
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!--modal -->
        </div>
        <!-- 購買商品列表 -->
        <div class="container" v-if="Object.keys(cart).length > 1">
            <h1 class="text-center">今朝有酒今朝醉</h1>
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
                                    <!--<tr v-if="cart.final_total">
                                        <td colspan="5" class="text-right">
                                            合計
                                        </td>
                                        <td class="text-right">
                                            <strong>{{ cart.final_total }}</strong>
                                        </td>
                                    </tr>-->
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
    </div>
</template>

<script>
import $ from 'jquery';
import OrderList from "./OrderList";

export default {
    name: 'CustomOrder', 
    components:{
        OrderList
    }, 
    data(){
        return{
            products:[], 
            product:{},
            status:{
                loadingItem: ''
            }, 
            isLoading: false, 
            cart:{}, 
            coupon_code:''
        }
    }, 
    created(){
        this.getProducts()
    },
    methods:{
        getProducts(page = 1){
            const api = `https://vue-course-api.hexschool.io/api/fan630/products?page=${page}`
            this.$http.get(api).then((response) => {
                this.products = response.data.products
                this.pagination = response.data.pagination  
            })
        }, 
        getProduct(id){
            const api = `https://vue-course-api.hexschool.io/api/fan630/product/${id}`
            this.status.loadingItem = id
            this.$http.get(api).then((response) => {
                this.product = response.data.product
                $('#productModal').modal('show')
                this.status.loadingItem = ''
            })
        },
        addtoCart(id, qty = 1){
            const api = `https://vue-course-api.hexschool.io/api/fan630/cart`
            this.status.loadingItem = id
            const cart = {
                product_id: id, 
                qty,
            }
            this.$http.post(api, {data: cart}).then((response) => {
                this.status.loadingItem = ''
                this.getCart()
                $('#productModal').modal('hide')
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
        removeCartItem(id){
            const api = `https://vue-course-api.hexschool.io/api/fan630/cart/${id}`
            this.isLoading = true;
            this.$http.delete(api).then((response) => {
                this.getCart()
                this.isLoading = false
            })
        }, 
        addCouponCode(){
            const api = `https://vue-course-api.hexschool.io/api/fan630/coupon`
            let coupon = {
                code: this.coupon_code
            }
            this.isLoading = true;
            this.$http.post(api,{data: coupon}).then((response) => {
                this.getCart()
                this.isLoading = false
            })
        }, 
        created(){
            this.getProducts();
            this.getCart();
        }
    }
}
</script>

<style lang="scss" scoped>
    .jumbotron-bg{
        background-image:url(https://images.unsplash.com/photo-1554624158-c0d08d8dc6df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
        min-height: 400px;
    }
    .bg-cover{
        background-position: center center; 
        background-size: cover;
    }

    .bg-transparented{
        background-color: rgba(255, 255, 255, .5)
    }
    .box2{
        width: 160px;
        height: 200px;
    }
</style>