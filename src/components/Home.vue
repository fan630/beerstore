<template>
    <div>
        <Nav />
        <AlertMessage></AlertMessage>
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from "./Nav";
import AlertMessage from "./AlertMessage"
import CustomOrder from "./views/shopping/CustomOrder";

export default {
    name:'Home', 
    components:{
        Nav,
        AlertMessage, 
        CustomOrder
    }
}
</script>

