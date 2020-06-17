<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="text-right my-2">
            <button class="btn btn-info btn-sm" @click="openModal(true)">
                建立新的產品
            </button>
        </div>
        <div class="table-responsive">
            <table class="table table-hover table-bordered">
                <caption>總共{{itemList}}樣產品</caption>
                <thead>
                    <tr>
                        <th width="10%">分類</th>
                        <th class="text-left">名稱</th>
                        <th width="120px" class="text-right">原價</th>
                        <th width="120px" class="text-right">售價</th>
                        <th width="100px" class="text-right">是否啟用</th>
                        <th width="120px" class="text-center">操作訂單</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item) in products" :key="item.id">
                        <td>{{item.category}}</td>
                        <td class="text-left">{{item.title}}</td>
                        <td class="text-right">
                            {{item.origin_price ? currencyItem(item.origin_price) : '未輸入原價'}}
                        </td>
                        <td class="text-right">
                            {{item.price ? currencyItem(item.price) : '未輸入特價'}}
                        </td>
                        <td class="text-right">
                            <span v-if="item.is_enabled > 0" class="text-success">啟用</span>
                            <span v-else>未啟用</span>
                        </td>
                        <td class="text-center">
                              <div class="btn-group btn-group-sm"
                                    role="group"
                                    aria-label="Second group">
                                <button type="button"
                                    class="btn btn-outline-primary btn-sm"
                                    @click="openModal(false, item)">編輯
                                    </button>
                                <button type="button"
                                    class="btn btn-outline-danger btn-sm"
                                    @click="deleteProduct(item)">刪除
                                    </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- modal -->
            <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title" id="exampleModalLabel">
                    <span v-if="isNew">新增產品</span>
                    <span v-else>編輯產品</span>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="image">輸入圖片網址</label>
                            <input type="text" class="form-control"
                                id="image"
                                v-model="tempProduct.imageUrl"
                                placeholder="請輸入圖片連結">
                        </div>
                        <div class="form-group">
                            <label for="customFile">或 上傳圖片
                                <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
                                <!-- <i class="fa fa-refresh fa-spin fa-3x fa-fw" ></i> -->
                            </label>
                            <input type="file" id="customFile" class="form-control"
                                ref="files" @change="uploadFile">
                        </div>
                        <img
                            img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                            :src="tempProduct.imageUrl"
                            class="img-fluid" alt="">
                    </div>

                    <div class="col-sm-8">
                        <div class="form-group">
                        <label for="title">標題</label>
                        <input type="text" class="form-control"
                            id="title"
                            v-model="tempProduct.title"
                            placeholder="請輸入標題">
                        </div>

                        <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="category">分類</label>
                            <input type="text" class="form-control"
                            id="category"
                            v-model="tempProduct.category"
                            placeholder="請輸入分類">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="price">單位</label>
                            <input type="unit" class="form-control"
                            id="unit"
                            v-model="tempProduct.unit"
                            placeholder="請輸入單位">
                        </div>
                        </div>

                        <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="origin_price">原價</label>
                            <input type="number" class="form-control"
                              id="origin_price"
                              v-model="tempProduct.origin_price"
                              placeholder="請輸入原價">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="price">售價</label>
                            <input type="number" class="form-control"
                              id="price"
                              v-model="tempProduct.price"
                              placeholder="請輸入售價">
                        </div>
                        </div>
                        <hr>

                        <div class="form-group">
                        <label for="description">產品描述</label>
                        <textarea type="text" class="form-control"
                            id="description"
                            v-model="tempProduct.description"
                            placeholder="請輸入產品描述"></textarea>
                        </div>
                        <div class="form-group">
                        <label for="content">說明內容</label>
                        <textarea type="text" class="form-control" id="content"
                            v-model="tempProduct.content"
                            placeholder="請輸入產品說明內容"></textarea>
                        </div>
                        <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                            v-model="tempProduct.is_enabled"
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
                    <button type="button"
                        class="btn btn-outline-secondary"
                        data-dismiss="modal">取消
                        </button>
                    <button type="button"
                       class="btn btn-primary"
                       @click="updateProduct">確認
                       </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        <Page :pagination="pagination" @changePage="getProducts"></Page>
    </div>
</template>

<script>
import $ from 'jquery';
import Page from '../../components/Page.vue';

export default {
  name: 'Products',
  components: {
    Page,
  },
  data() {
    return {
      products: [],
      pagination: {

      },
      // 新增要送出的欄位內容
      tempProduct: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      },
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      const api = `https://vue-course-api.hexschool.io/api/fan630/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        this.products = response.data.products;
        this.pagination = response.data.pagination;
      });
    },
    // isNew這份資料是新的還是舊的
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        // 因為物件傳參考的特性會是一樣, 所以用這個方法淺複製
        this.tempProduct = { ...item };
        this.isNew = false;
      }
      $('#productModal').modal('show');
    },
    updateProduct() {
      let api = 'https://vue-course-api.hexschool.io/api/fan630/admin/product';
      let httpMethods = 'post';

      if (!this.isNew) {
        api = `https://vue-course-api.hexschool.io/api/fan630/admin/product/${this.tempProduct.id}`;
        // console.log(this.tempProduct.id)
        httpMethods = 'put';
      }

      this.$http[httpMethods](api, { data: this.tempProduct }).then((response) => {
        if (response.data.success) {
          $('#productModal').modal('hide');
          this.getProducts();
        } else {
          $('#productModal').modal('hide');
          this.getProducts();
          console.log('新增失敗');
        }
      });
    },
    deleteProduct(item) {
      const api = `https://vue-course-api.hexschool.io/api/fan630/admin/product/${item.id}`;
      this.$http.delete(api).then((response) => {
        if (response.data.success) {
          $('#productModal').modal('hide');
          // window.confirm('確認刪除?')
          this.getProducts();
        } else {
          $('#productModal').modal('hide');
          this.getProducts();
          console.log('刪除失敗');
        }
      });
    },
    uploadFile() {
      const uploadedFile = this.$refs.files.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const api = 'https://vue-course-api.hexschool.io/api/fan630/admin/upload';
      this.status.fileUploading = true;
      this.$http.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          this.status.fileUploading = false;
          this.$set(this.tempProduct, 'imageUrl', response.data.imageUrl);
        } else {
          this.$bus.$emit('message:push', response.data.message, 'danger');
        }
      });
    },
    currencyItem(num) {
      const n = Number(num);
      return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
        const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c);
        return currency;
      })}`;
    },
  },
  computed: {
    itemList() {
      return Object.keys(this.products).length;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
