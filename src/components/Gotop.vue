<template>
  <div>
    <i
      class="fas fa-chevron-circle-up arrow fa-2x"
      @click.prevent="goTop"
    />
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'GoTop',
  data() {
    return {

    };
  },
  methods: {
    goTop() {
      $('html,body').animate({ scrollTop: 0 }, 'slow');
    },
  },
};
</script>

<style lang="scss" scoped>
    .arrow{
        position: absolute;
        bottom:70px;
        right: 10px;
    }
</style>
