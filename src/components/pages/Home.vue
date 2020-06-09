<template>
    <div>
        <Nav />
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from "./Nav";

export default {
    name:'Home', 
    components:{
        Nav
    }
}
</script>

