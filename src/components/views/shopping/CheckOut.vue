<template>
  <div>
    <div class="container my-4">
        <!-- <div class="h1 text-center">今朝有酒今朝醉</div> -->
        <div class="row text-center">
                <div class="col-md-4">
                  <div
                      class="alert alert-success border-rounded"
                      role="alert"
                  >
                      1.輸入訂單資料
                  </div>
                </div>
                <div class="col-md-4">
                  <div
                      class="alert alert-primary border-rounded"
                      role="alert"
                  >
                      2.金流付款
                  </div>
                </div>
                <div class="col-md-4">
                  <div
                      class="alert alert-light border-rounded"
                      role="alert"
                  >
                      3.完成
                  </div>
                </div>
        </div>
    </div>

    <!-- 訂購人資訊 -->
    <div class="container">
        <div class="row d-flex justify-content-center mt-3">
            <div class="col-md-10">
                <form
                    class="needs-validation"
                    @submit.prevent="createOrder"
                    novalidate
                >
                    <div class="h4 card-header text-center mb-3">
                        訂購人資訊
                    </div>
                    <div class="form-row text-left">
                        <div class="form-group col-md-4">
                            <label for="#name">姓名</label>
                            <ValidationProvider rules="required|secret" 
                                immediate v-slot="{ errors }"
                              >
                              <input
                                  type="name"
                                  class="form-control"
                                  id="name"
                                  placeholder="姓名"
                                  required
                                  v-model="form.user.name"
                              >
                            <span>{{ errors[0] }}</span>
                            </ValidationProvider>
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
                    <!-- <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="#country">國家</label>
                            <select
                                class="form-control"
                                id="country"
                                required
                            >
                                <option
                                    selected
                                    disabled
                                    value=""
                                >Choose...</option>
                                <option>台灣</option>
                                <option disabled>中國</option>
                            </select>
                            <div class="invalid-feedback">
                                Please provide your country
                            </div>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="#city">城市</label>
                            <select
                                class="form-control"
                                id="city"
                                required
                            >
                                <option
                                    selected
                                    disabled
                                    value=""
                                >Choose...</option>
                                <option>台北市</option>
                                <option>台南市</option>
                                <option>高雄市</option>
                            </select>
                            <div class="invalid-feedback">
                                Please provide your city
                            </div>
                        </div>
                    </div> -->
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
                    <div class="d-flex justify-content-end ">
                        <button
                            type="submit"
                            class="btn btn-primary"
                        >送出訂單
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckOut',
  data(){
    return{
      form:{
        user:{
          name: "",
          email: "",
          tel: "",
          address: ""
        }, 
        message: ""
      }
    }
  }, 
  methods:{
    createOrder(){
        const api = `https://vue-course-api.hexschool.io/api/fan630/order`
        const order = this.form
        // this.isLoading = true;
        this.$http.post(api, {data: order}).then((response) => {
            console.log('訂單已建立',response)
            // this.getCart()
            // this.isLoading = false
        })
    }
    /*createOrder () {
      const vm = this
      const url = `https://vue-course-api.hexschool.io/api/fan630/order`
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.$http.post(url, { data: vm.form }).then((response) => {
            if (response.data.success) {
              console.log('訂單已建立',response)
            }
          })
        } else {
          console.log('欄位不完整')
        }
      })
    }*/
  }
}
</script>

<style scoped lang="scss">

</style>