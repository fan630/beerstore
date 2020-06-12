<template>
    <div>
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <router-link to="/" class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
                <img src=".././assets/images/logo.png" alt="" srcset="" height="40px" width="200px">
            </router-link>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <input class="form-control form-control-lg form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
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
  methods:{
      signout(){
      const api = 'https://vue-course-api.hexschool.io/logout'
      this.$http.post(api).then((response) => {
        if(response.data.success){
          this.$router.push('/login')
        }
      })
    } 
  }
}
</script>


<style scoped lang="scss">
    .navbar-brand{
        padding-top:4px; 
        padding-bottom:4px;
    }
</style>
