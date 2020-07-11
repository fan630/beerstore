<template>
    <div>
        <nav id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse text-left">
            <div class="sidebar-sticky pt-3">
                <h6
                    class="sidebar-heading
                           d-flex justify-content-between align-items-center
                           px-3 mt-4 mb-1">
                    <span>
                        <i class="fas fa-user-cog">
                            管理員
                        </i>
                    </span>
                </h6>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <router-link to="/admin/products" class="nav-link">
                            <i class="far fa-list-alt">
                                產品列表
                            </i>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin/orders" class="nav-link">
                            <i class="fas fa-briefcase">
                                訂單列表
                            </i>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin/coupon" class="nav-link">
                            <i class="fas fa-ticket-alt">
                                優惠券
                            </i>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {

    };
  },
};
</script>

<style scoped lang="scss">
</style>
