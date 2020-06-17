<template>
  <div>
    <div class="container my-4">
        <div class="row text-center justify-content-center">
            <div class="col-md-10">
              <div
                  class="alert alert-warning border-rounded"
                  role="alert"
              >
                  <h5>輸入訂單資料</h5>
              </div>
            </div>
        </div>
    </div>

    <!-- 訂購人資訊 -->
    <div class="container">
        <div class="row d-flex justify-content-center mt-3">
            <div class="col-md-10">
              <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(createOrder)">
                    <div class="h4 text-center mb-3">
                        訂購人資訊
                    </div>
                    <hr>
                    <div class="form-row text-left">
                        <div class="form-group col-md-4">
                            <label for="#name">姓名</label>
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
                            <label for="#email">Email</label>
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
                                <span>{{ errors[0]}}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="#tel">聯繫方式</label>
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
                              <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="form-group  text-left">
                        <label for="inputAddress">地址</label>
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
                    <div class="d-flex justify-content-end my-3">
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

export default {
  name: 'CheckOut',
  data() {
    return {
      cart: {
        carts: [],
      },
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
  methods: {
    getCart() {
      const api = 'https://vue-course-api.hexschool.io/api/fan630/cart';
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.cart = response.data.data;
        this.isLoading = false;
      });
    },
    createOrder() {
      const api = 'https://vue-course-api.hexschool.io/api/fan630/order';
      const order = this.form;
      this.isLoading = true;
      this.$http.post(api, { data: order }).then((response) => {
        this.$bus.$emit('message:push', response.data.message, 'warning');
        console.log(response.data);
        this.$router.push(`/checkout_pay/${response.data.orderId}`);
        this.getCart();
        this.isLoading = false;
      });
    },
  },
};
</script>

<style scoped lang="scss">

</style>
