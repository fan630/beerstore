<template>
  <div>
      <!--時間軸-->
      <div class="container">
          <div class="timeline-section">
              <div class="row my-3 timeline-pointer">
                  <div class="col-sm-6">
                      <h3 class="text-gold">2014年3月汐止釀酒廠成立</h3>
                      <p>研釀生技股份有限公司成立，致力於精釀啤酒的在地釀製與生產。</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas fugiat quis deleniti
                          rem blanditiis
                          quasi pariatur aliquam architecto ducimus, eum ad asperiores maiores ab vitae voluptatum tempore
                          libero esse!</p>
                  </div>
                  <div class="col-sm-6">
                      <div class="box shadow bg-cover" style="background-image:url(https://images.unsplash.com/photo-1554381187-1461fabe0905?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"></div>
                  </div>
              </div>
              <div class="row my-3 timeline-pointer d-flex flex-sm-row-reverse">
                  <div class="col-sm-6">
                      <h3>2015年5月成立首家直營啤酒吧</h3>
                      <p>於台北市永康商圈開設第一家掌門精釀啤酒TAP ROOM!</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas fugiat quis deleniti
                          rem blanditiis
                          quasi pariatur aliquam architecto ducimus, eum ad asperiores maiores ab vitae voluptatum tempore
                          libero esse!</p>
                  </div>
                  <div class="col-sm-6">
                      <div class="box shadow bg-cover" style="background-image:url(https://images.unsplash.com/photo-1517159906085-dd4f2277d4d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"></div>
                  </div>
              </div>
              <div class="row my-3 timeline-pointer">
                  <div class="col-sm-6">
                      <h3 class="text-gold">2014年3月汐止釀酒廠成立</h3>
                      <p>研釀生技股份有限公司成立，致力於精釀啤酒的在地釀製與生產。</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas fugiat quis deleniti
                          rem blanditiis
                          quasi pariatur aliquam architecto ducimus, eum ad asperiores maiores ab vitae voluptatum tempore
                          libero esse!</p>
                  </div>
                  <div class="col-sm-6">
                      <div class="box shadow bg-cover" style="background-image:url(https://images.unsplash.com/photo-1554381187-1461fabe0905?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"></div>
                  </div>
              </div>
              <div class="row my-3 timeline-pointer d-flex flex-sm-row-reverse">
                  <div class="col-sm-6">
                      <h3>2015年5月成立首家直營啤酒吧</h3>
                      <p>於台北市永康商圈開設第一家掌門精釀啤酒TAP ROOM!</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas fugiat quis deleniti
                          rem blanditiis
                          quasi pariatur aliquam architecto ducimus, eum ad asperiores maiores ab vitae voluptatum tempore
                          libero esse!</p>
                  </div>
                  <div class="col-sm-6">
                      <div class="box shadow bg-cover" style="background-image:url(https://images.unsplash.com/photo-1517159906085-dd4f2277d4d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped lang="scss">
    .box {
        width: 100%;
        height: 300px;
    }
    .timeline-section{
        position: relative;
    }
    .timeline-section::after{
        content: ""; 
        position: absolute;
        top:0; 
        bottom: 0; 
        left:50%;
        transform: translateX(-50%);
        border: 2px solid#dba377;
    }
    .timeline-pointer{
        position: relative;
    }
    .timeline-pointer::after{
        content: ""; 
        position: absolute;
        width: 10px; 
        height:10px; 
        top:0; 
        bottom: 0; 
        left:50%;
        border-radius: 50%;
        transform: translateX(-50%);
        border: 1px solid#3333;
        background-color: white;
        z-index:1;
    }
    @media screen and (max-width:576px){
        .timeline-section::after,
        .timeline-pointer::after{
            display: none;
        }
    }
</style>