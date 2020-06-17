<template>
  <div>
    <loading :active.sync="isLoading"></loading>
     <div class="container">
         <h2 class="my-3">訂單列表</h2>
         <div class="row">
             <div class="col-md-12">
                 <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>購買日期</th>
                                <th class="d-md-block d-none">訂單編號</th>
                                <th width="300px">訂單內容</th>
                                <th class="d-md-block d-none">總金額</th>
                                <th>付款狀態</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in orders" :key="item.id">
                                <td>{{item.paid_date | date}}</td>
                                <td class="d-md-block d-none">{{item.id}}</td>
                                <td>
                                    <ul>
                                        <li v-for="(product, i) in item.products" :key="i">
                                            {{ product.product.title }} 數量：{{ product.qty }}
                                            {{ product.product.unit }}
                                        </li>
                                    </ul>
                                </td>
                                <td class="d-md-block d-none">{{item.total}}</td>
                                <td :class="item.is_paid ? 'green': 'red'"
                                    >{{item.is_paid ? '已付款': '尚未付款'}}</td>
                            </tr>
                        </tbody>
                    </table>
                 </div>
                <Page :pagination="pagination" @changePage="getOrderList"></Page>
             </div>
         </div>
     </div>
  </div>
</template>

<script>
import Page from '../../components/Page.vue';

export default {
  name: 'MyOrder',
  components: {
    Page,
  },
  data() {
    return {
      orders: [
      ],
      pagination: {
      },
      isLoading: false,
    };
  },
  created() {
    this.getOrderList();
  },
  methods: {
    getOrderList(page = 1) {
      const api = `https://vue-course-api.hexschool.io/api/fan630/orders?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        this.orders = response.data.orders;
        this.pagination = response.data.pagination;
      });
    },
  },
};
</script>

<style scoped lang="scss">
    .table thead th{
        border-bottom:0px;
    }
</style>
