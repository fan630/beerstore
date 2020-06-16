<template>
  <div>
    <footer class="py-3 mt-5"
        >
        <div class="container d-flex justify-content-center text-white">
            <p>資料、圖片來源皆來自網路，僅用來做為學習用途</p>
            <a href="https://github.com/fan630/beerstore" class=" text-white ml-3"><i class="fab fa-github"></i></a>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped lang="scss">
    $gray-700: #495057;
    p{
      	margin-bottom: 0;
    }
    footer{
      // position: fixed;
      // bottom: 0;
      // clear: both;
      background-color: $gray-700;
      // width: 100%;
      // height:50px;
    }
</style>