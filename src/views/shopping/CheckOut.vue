<template>
  <div>
    <div class="container my-4">
        <div class="row text-center justify-content-center">
                <div class="col-md-8 mb-3 md-mb-0">
                    <div class="row">
                          <div class="col-md-4">
                          <div
                            class="alert alert-warning border-rounded"
                            role="alert"
                        >
                            輸入訂單資料
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div
                            class="alert alert-light border-rounded"
                            role="alert"
                        >
                            付款
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div
                            class="alert alert-light border-rounded"
                            role="alert"
                        >
                            完成
                        </div>
                      </div>
                    </div>
                </div>
          </div>
    </div>
    <div class="container">
        <div class="row d-flex justify-content-center mt-3 flex-row-reverse">
            <!-- 訂單摘要 -->
            <div class="col-md-4 mb-5 md-mb-0">
                <div class="card">
                    <div class="card-body text-white">
                        <div class="cart-title h4">訂單摘要</div>
                          <table class="table table-sm">
                            <tbody v-for="item in cart.carts" :key="item.id">
                              <tr>
                                  <td class="align-middle text-center">
                                  <a href="#"
                                      @click.prevent="removeCartItem(item.id)">
                                      <i class="fas fa-trash-alt" aria-hidden="true"></i>
                                  </a>
                                  </td>
                                  <td class="align-middle">{{ item.product.title }}</td>
                                  <td class="align-middle">{{ item.qty }}{{item.product.unit}}</td>
                                  <td class="align-middle text-right">{{item.total}}</td>
                              </tr>
                            </tbody>
                          </table>
                    </div>
                    <div class="card-footer">
                          <div class="d-flex justify-content-between mr-1">
                              <span>小計</span>
                              <span>{{cart.total}}</span>
                          </div>
                          <div class="d-flex justify-content-between mr-1 text-success">
                              <span>折扣後優惠</span>
                              <span>{{cart.final_total}}</span>
                          </div>
                    </div>
                </div>
            </div>
            <!-- 訂購人資訊 -->
            <div class="col-md-8">
              <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(createOrder)">
                    <div class="h4 text-center mb-3">
                        訂購人資訊
                    </div>
                    <hr>
                    <div class="text-right">*為必填欄位</div>
                    <div class="form-row text-left">
                        <div class="form-group col-md-4">
                            <label for="#name">*姓名</label>
                                <input
                                    type="name"
                                    class="form-control"
                                    id="name"
                                    placeholder="姓名"
                                    v-model="form.user.name"
                                    required
                                >
                        </div>
                        <div class="form-group col-md-4">
                            <label for="#email">*Email</label>
                             <ValidationProvider rules="email"
                                  immediate v-slot="{ errors }"
                                >
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="Email"
                                    v-model="form.user.email"
                                    required
                                >
                                <span v-show="form.user.email.length > 0"
                                  class="text-danger"
                                  >{{ errors[0]}}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="#tel">*聯繫方式</label>
                              <ValidationProvider rules="min:10|max:10"
                                immediate v-slot="{ errors }"
                              >
                              <input
                                  type="tel"
                                  class="form-control"
                                  id="tel"
                                  placeholder="手機聯繫方式"
                                  v-model="form.user.tel"
                                  required
                              >
                              <span v-show="form.user.tel.length > 0"
                                class="text-danger">
                                {{ errors[0] }}
                              </span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="form-group  text-left">
                        <label for="inputAddress">*地址</label>
                        <input
                            type="text"
                            class="form-control"
                            id="inputAddress"
                            placeholder="請輸入地址"
                            v-model= "form.user.address"
                            required
                        >
                    </div>
                    <div class="form-group my-3 text-left">
                      <label for="exampleFormControlTextarea1">留言給我們</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                        v-model="form.message"
                      ></textarea>
                    </div>
                    <div class="d-flex justify-content-center my-3">
                        <button
                            type="submit"
                            class="btn btn-primary text-white"
                        >送出訂單
                        </button>
                    </div>
                </form>
                </ValidationObserver>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CheckOut',
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  computed: {
    ...mapGetters(['cart', 'isLoading']),
  },
  methods: {
    ...mapActions(['getCart', 'updateLoading']),
    removeCartItem(id) {
      this.$store.dispatch('removeCartItem', id);
    },
    createOrder() {
      const api = 'https://vue-course-api.hexschool.io/api/fan630/order';
      const order = this.form;
      this.$store.dispatch('updateLoading', true);
      this.$http.post(api, { data: order }).then((response) => {
        this.$bus.$emit('message:push', response.data.message, 'warning');
        this.$router.push(`/checkout_pay/${response.data.orderId}`);
        this.getCart();
        this.$store.dispatch('updateLoading', false);
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style scoped lang="scss">
    $gray-700: #495057;
    .card{
      background-color:$gray-700;
    }
    .card-body{
      padding-bottom: 0rem;
    }
    .card-footer{
      padding: 0.5rem 1.25rem;
    }
</style>
