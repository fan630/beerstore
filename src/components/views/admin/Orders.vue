<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <!-- <div class="text-right my-2">
            <button class="btn btn-info btn-sm" @click="openModal(true)">
                建立新的優惠券
            </button>
        </div> -->
        <div class="table-responsive">
            <table class="table table-hover table-bordered">
                <!-- <caption>總共{{itemList}}張優惠券</caption> -->
                <thead>
                    <tr>
                        <th class="text-left">名稱</th>
                        <th width="150px" class="text-right">折扣碼</th>
                        <th width="150px" class="text-right">折扣幅度</th>
                        <th width="150px" class="text-right">到期時間</th>
                        <th width="100px" class="text-right">是否啟用</th>
                        <th width="200px" class="text-center">折扣Id</th>
                        <th width="150px" class="text-center">操作優惠券</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item) in orders" :key="item.id">
                        <td class="text-left">{{item.title}}</td>
                        <td class="text-right">
                            {{item.code}}
                        </td>
                        <td class="text-right">
                            {{item.percent}}
                        </td>
                        <td class="text-right">
                            {{item.due_date}}
                        </td>
                        <td class="text-right">
                            <span v-if="item.is_paid > 0" class="text-success">已付款</span>
                            <span v-else>未付款</span>
                        </td>
                        <td class="text-right">
                            {{item.id}}
                        </td>
                        <td class="text-center">
                              <div class="btn-group btn-group-sm " role="group" aria-label="Second group">
                                <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal(false, item.products.id)">編輯</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- modal -->
            <div class="modal fade" id="orderModal" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title" id="exampleModalLabel">
                    <span>修改優惠券</span>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                        <label for="title">標題</label>
                        <input type="text" class="form-control" id="title" v-model="tempOrder.created_at"
                            placeholder="請輸入標題">
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="percent">折扣</label>
                                <input type="number" class="form-control" id="percent" v-model="tempOrder.percent"
                                placeholder="請輸入折扣幅度">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="message">留言</label>
                                <input type="string" class="form-control" id="message" v-model="tempOrder.message"
                                placeholder="請輸入留言">
                            </div>
                            <!-- 這邊可以改成select -->
                            <div class="form-group col-md-6">
                                <label for="payment">付款方式</label>
                                <input type="string" class="form-control" id="payment" v-model="tempOrder.payment_method"
                                placeholder="請輸入付款方式">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="dueDate">到期時間</label>
                                <input type="date" class="form-control" id="dueDate" v-model="tempOrder.due_date"
                                placeholder="請輸入到期時間">
                            </div>
                        </div>                        
                        <div class="form-group">
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
                        </div>
                    </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click="updateOrder()">確認</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        <nav aria-label="Page navigation example" class="text-center">
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
        </nav>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data(){
        return{
            orders:[], 
            pagination:{

            }, 
            // 新增要送出的欄位內容
            tempOrder:{}, 
            isNew: false, 
            isLoading: false, 
        }
    }, 
    created(){
        this.getOrders()
    }, 
    methods:{
        getOrders(page = 1){
            const api = `https://vue-course-api.hexschool.io/api/fan630/admin/coupons?page=${page}`
            this.isLoading = true
            this.$http.get(api).then((response) => {
                this.isLoading = false
                this.orders = response.data.orders
                this.pagination = response.data.pagination  
            })
        }, 
        // isNew這份資料是新的還是舊的
        openModal(isNew, id){
            if(isNew){
                this.tempOrder = {}
                this.isNew = true;
            }else{
                // 因為物件傳參考的特性會是一樣, 所以用這個方法淺複製
                this.tempOrder = Object.assign({}, item)
                this.isNew = false
            }
            $('#orderModal').modal('show')
        }, 

        updateOrder(){
            // let api = 'https://vue-course-api.hexschool.io/api/fan630/admin/coupon'
            // let httpMethods = 'post'

            if(!this.isNew){
                api = `https://vue-course-api.hexschool.io/api/fan630/admin/order/${this.tempOrder.id}`
                // console.log(this.tempOrder.id)
                httpMethods = 'put'
            }

            this.$http[httpMethods](api, {data: this.tempOrder}).then((response) => {
                if(response.data.success){
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
    
</style>