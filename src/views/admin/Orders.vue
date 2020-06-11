<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="table-responsive">
            <table class="table table-hover table-bordered my-4">
                <!-- <caption>總共{{itemList}}張優惠券</caption> -->
                <thead>
                    <tr>
                        <th width="150px">購買日期</th>
                        <th width="230px">訂單編號</th>
                        <th width="100px">留言內容</th>
                        <th width="300px">訂單內容</th>
                        <!-- <th width="100px">總金額</th> -->
                        <th width="150px">付款狀態</th>
                        <th width="150px">操作訂單</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in orders" :key="item.id">
                        <td>{{item.paid_date | date}}</td>
                        <td>{{item.id}}</td>
                        <td>{{item.message}}</td>
                        <td>
                            <ul>
                                <li v-for="(item, i) in item.products" :key="i">
                                    {{item.product.num}}
                                    {{ item.product.title }} 數量：{{ item.product.num}}
                                    <!-- <span :class="item.product.num !== item.num ? 'red': ''">
                                        {{ item.product.num}}
                                    </span> -->
                                    {{ item.product.unit }} * {{item.product.origin_price}}
                                </li>
                            </ul>
                        </td>
                        <!-- <td>{{item.products}}</td> -->
                        <!-- <td>{{item.product.unit * item.product.origin_price}}</td> -->
                        <td :class="item.is_paid ? 'green': 'red'">
                            {{item.is_paid ? '已付款': '尚未付款'}}
                        </td>
                        <td class="text-center">
                              <div class="btn-group btn-group-sm " role="group" aria-label="Second group">
                                <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal(item)">編輯</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- modal -->
            <div class="modal fade" id="orderModal" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title" id="exampleModalLabel">
                    <span>修改訂單</span>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                    <div class="col-sm-12">
                        <div class="form-row">
                            <div class="form-group col text-left">
                                <label for="message">留言</label>
                                <input type="string" class="form-control" id="message" v-model="tempOrder.message"
                                placeholder="請輸入留言">
                            </div>
                            <div class="form-group col text-left">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check">
                                        <input class="form-check-input" 
                                            v-model="tempOrder.is_paid"
                                            type="radio" name="gridRadios" id="gridRadios1" value="true">
                                        <label class="form-check-label" for="gridRadios1">
                                            已付款
                                        </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" 
                                                v-model="tempOrder.is_paid"
                                                type="radio" name="gridRadios" id="gridRadios2" value="false">
                                            <label class="form-check-label" for="gridRadios2">
                                                尚未付款
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-row" v-for="(item) in tempOrder.products" :key="item.id">
                            <div class="form-group col text-left">
                                <label for="num">{{item.product.title}}</label>
                                <input type="number" class="form-control" id="num" v-model="item.product.num"
                                placeholder="請輸入更改數量">
                            </div>
                        </div>
                        <!-- <div class="form-row">
                            <div class="form-group col-md-12">
                         ｀       <label for="dueDate">到期時間</label>
                                <input type="date" class="form-control" id="dueDate" v-model="tempOrder.due_date"
                                placeholder="請輸入到期時間">
                            </div>
                        </div>                         -->
                        <!-- <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox"
                                v-model="tempOrder.is_paid"
                                :true-value="1"
                                :false-value="0"
                                id="is_paid">
                                <label class="form-check-label" for="is_paid">
                                是否啟用
                                </label>
                            </div>
                        </div> -->
                    </div>
                    </div>
                </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="updateOrder">確認</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <!-- <nav aria-label="Page navigation example" class="text-center">
            <ul class="pagination">
                <li class="page-item" :class="{'disabled':!pagination.has_pre}">
                    <a class="page-link" href="#" aria-label="Previous"
                        @click.prevent="getOrders(pagination.current_page -1)"
                        >
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" 
                    :class="{'active': pagination.current_page === true}"
                    v-for="page in pagination.total_pages" :key="page"
                    >
                    <a class="page-link" href="#" @click.prevent="getOrders(page)">
                        {{page}}
                    </a>
                </li>
                <li class="page-item" :class="{'disabled':!pagination.has_next}">
                    <a class="page-link" href="#" aria-label="Next"
                        @click.prevent="getOrders(pagination.current_page +1)"
                        >
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav> -->
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data(){
        return{
            orders:[
            ], 
            pagination:{

            }, 
            tempOrder:{
                products:{
                }
            }, 
            //isNew: false,
            isLoading: false, 
        }
    }, 
    created(){
        this.getOrders()
    }, 
    methods:{
        getOrders(page = 1){
            const api = `https://vue-course-api.hexschool.io/api/fan630/admin/orders?page=${page}`
            this.isLoading = true
            this.$http.get(api).then((response) => {
                this.isLoading = false
                this.orders = response.data.orders
                this.pagination = response.data.pagination  
            })
        }, 
        openModal(item){
            this.tempOrder = JSON.parse(JSON.stringify(item));
            $('#orderModal').modal('show')
        }, 

        updateOrder(){
            let api = `https://vue-course-api.hexschool.io/api/fan630/admin/order/${this.tempOrder.id}`
            this.$http.put(api, {data: this.tempOrder}).then((response) => {
                if(response.data.success){
                    // console.log(response.data) success
                    $('#orderModal').modal('hide')
                    this.getOrders()
                }else{
                    $('#orderModal').modal('hide')
                    this.getOrders()
                    console.log('新增失敗')
                }
            })
        }, 
    }, 
    // computed:{
    //     itemList(){
    //         return Object.keys(this.orders).length;
    //     }
    // }
}
</script>

<style lang="scss" scoped>
    .red{
        color: red;
    }
    .green{
        color: green;
    }
</style>