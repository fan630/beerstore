<template>
  <div>
    <loading :active.sync="isLoading"></loading>
     <div class="container">
         <h2>我的訂單列表</h2>
         <div class="row">
             <div class="col-md-12">
                 <div class="table-responsive-md">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">購買日期</th>
                                <th scope="col">訂單編號</th>
                                <th scope="col">訂單內容</th>
                                <th scope="col">總金額</th>
                                <th scope="col">付款狀態</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in orders" :key="item.id">
                                <td>{{item.paid_date | date}}</td>
                                <td>{{item.id}}</td>
                                <td>
                                    <ul>
                                        <li v-for="(product, i) in item.products" :key="i">
                                            {{ product.product.title }} 數量：{{ product.qty }}
                                            {{ product.product.unit }}
                                        </li>
                                    </ul>
                                </td>
                                <td>{{item.total}}</td>
                                <td>{{item.is_paid ? '已付款': '尚未付款'}}</td>
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
  name: 'MyOrder',
  data(){
      return{
          orders:[

          ], 
          pagination:{

          },
          isLoading: false, 
      }
  }, 
  created(){
        this.getOrderList()
  }, 
  methods:{
    getOrderList(page = 1){
        const api = `https://vue-course-api.hexschool.io/api/fan630/orders?page=${page}`
        this.isLoading = true
        this.$http.get(api).then((response) => {
            this.isLoading = false
            this.orders = response.data.orders
            this.pagination = response.data.pagination  
            console.log(this.orders)
        })
    },
  }
}
</script>

<style scoped lang="scss">

</style>