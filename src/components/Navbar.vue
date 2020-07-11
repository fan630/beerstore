<template>
    <div class="top">
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow-lg">
            <router-link to="/" class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
                <img src=".././assets/images/logo.png"
                    alt="" srcset="" height="35px" width="200px"
                    style="vertical-align: middle;"
                />
            </router-link>
            <button class="navbar-toggler position-absolute d-md-none collapsed"
                    type="button" data-toggle="collapse"
                    data-target="#sidebarMenu" aria-controls="sidebarMenu"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
            <input class="form-control form-control-lg form-control-dark w-100" type="text"
                    placeholder="Search" aria-label="Search"/>
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                     <a class="nav-link" href="#" @click.prevent="signout">登出</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {},
  methods: {
    signout() {
      const api = 'https://vue-course-api.hexschool.io/logout';
      this.$http.post(api).then((response) => {
        if (response.data.success) {
          this.$router.push('/login');
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
    .nav{
        box-shadow: 0 0px 5px 2px rgba(33, 37, 41, 0.4);
    }
    .navbar-brand {
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-size: 1rem;
        background-color: rgba(0, 0, 0, .25);
    }

    .navbar .navbar-toggler {
      top: .25rem;
      right: 1rem;
    }

    .navbar .form-control {
        padding: 2rem 1rem;
        border-width: 0;
        border-radius: 0;
    }
    .top{
        margin-top:-66px;
    }
    @media screen and (max-width:768px){
    .top{
        padding-top: -36px;
     }
    }
</style>
