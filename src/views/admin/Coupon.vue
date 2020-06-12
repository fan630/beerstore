<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="text-right my-2">
            <button class="btn btn-info btn-sm" @click="openModal(true)">
                建立新的優惠券
            </button>
        </div>
        <div class="table-responsive">
            <table class="table table-hover table-bordered">
                <caption>總共{{itemList}}張優惠券</caption>
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
                    <tr v-for="(item) in coupons" :key="item.id">
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
                            <span v-if="item.is_enabled > 0" class="text-success">啟用</span>
                            <span v-else>未啟用</span>
                        </td>
                        <td class="text-right">
                            {{item.id}}
                        </td>
                        <td class="text-center">
                              <div class="btn-group btn-group-sm " role="group" aria-label="Second group">
                                <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
                                <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteCoupon(item)">刪除</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- modal -->
            <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title" id="exampleModalLabel">
                    <span v-if="isNew">新增優惠券</span>
                    <span v-else>編輯優惠券</span>
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
                        <input type="text" class="form-control" id="title" v-model="tempCoupon.title"
                            placeholder="請輸入標題">
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="percent">折扣</label>
                                <input type="number" class="form-control" id="percent" v-model="tempCoupon.percent"
                                placeholder="請輸入折扣幅度">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="code">折扣碼</label>
                                <input type="string" class="form-control" id="code" v-model="tempCoupon.code"
                                placeholder="請輸入折扣碼">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="dueDate">到期時間</label>
                                <input type="date" class="form-control" id="dueDate" v-model="tempCoupon.due_date"
                                placeholder="請輸入到期時間">
                            </div>
                        </div>                        
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox"
                                v-model="tempCoupon.is_enabled"
                                :true-value="1"
                                :false-value="0"
                                id="is_enabled">
                                <label class="form-check-label" for="is_enabled">
                                是否啟用
                                </label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        <Page :pagination="pagination" @changePage="getCoupon"></Page>
    </div>
</template>

<script>
import $ from 'jquery';
import Page from "../../components/Page"

export default {
    name:"Coupon", 
    components:{
        Page
    }, 
    data(){
        return{
            coupons:[], 
            pagination:{

            }, 
            // 新增要送出的欄位內容
            tempCoupon:{}, 
            isNew: false, 
            isLoading: false, 
        }
    }, 
    created(){
        this.getCoupon()
    }, 
    methods:{
        getCoupon(page = 1){
            const api = `https://vue-course-api.hexschool.io/api/fan630/admin/coupons?page=${page}`
            this.isLoading = true
            this.$http.get(api).then((response) => {
                this.isLoading = false
                this.coupons = response.data.coupons
                this.pagination = response.data.pagination  

            })
        }, 
        // isNew這份資料是新的還是舊的
        openModal(isNew, item){
            if(isNew){
                this.tempCoupon = {}
                this.isNew = true;
            }else{
                // 因為物件傳參考的特性會是一樣, 所以用這個方法淺複製
                this.tempCoupon = Object.assign({}, item)
                this.isNew = false
            }
            $('#couponModal').modal('show')
        }, 

        updateProduct(){
            let api = 'https://vue-course-api.hexschool.io/api/fan630/admin/coupon'
            let httpMethods = 'post'

            if(!this.isNew){
                api = `https://vue-course-api.hexschool.io/api/fan630/admin/coupon/${this.tempCoupon.id}`
                // console.log(this.tempCoupon.id)
                httpMethods = 'put'
            }

            this.$http[httpMethods](api, {data: this.tempCoupon}).then((response) => {
                if(response.data.success){
                    $('#couponModal').modal('hide')
                    this.getCoupon()
                    this.$bus.$emit('message:push', response.data.message, 'success')
                }else{
                    $('#couponModal').modal('hide')
                    this.getCoupon()
                    console.log('新增失敗')
                }
            })
        }, 
        deleteCoupon(item){
            let api = `https://vue-course-api.hexschool.io/api/fan630/admin/coupon/${item.id}`
            this.$http.delete(api).then((response) => {
                if(response.data.success){
                    $('#couponModal').modal('hide')
                    window.confirm('確認刪除?')
                    this.$bus.$emit('message:push', response.data.message, 'danger')
                    this.getCoupon()
                }else{
                    $('#couponModal').modal('hide')
                    this.getCoupon()
                }
            })
        }, 
    }, 
    computed:{
        itemList(){
            return Object.keys(this.coupons).length;
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>