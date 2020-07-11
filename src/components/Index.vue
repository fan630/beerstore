<template>
    <div>
        <Nav />
            <AlertMessage></AlertMessage>
            <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
import Nav from './Nav.vue';
import AlertMessage from './AlertMessage.vue';
import Footer from './Footer.vue';

export default {
  name: 'Index',
  data() {
    return {

    };
  },
  components: {
    Nav,
    AlertMessage,
    Footer,
  },
};
</script>
