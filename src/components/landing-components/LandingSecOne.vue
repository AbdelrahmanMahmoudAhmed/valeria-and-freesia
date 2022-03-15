<template>
  <div class="sec-one">
    <div class="sec-one-content container">
      <h1>
        اغتنم واحده من افضل عروض
        <span class="logo">
          <img src="../../assets/imgs/logo.png" alt="" />
        </span>
        <span> اليوم !</span>
      </h1>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sec-one {
  direction: rtl;
  background-image: url("../../assets/imgs/main.jpg");
  height: 100vh;
  background-size: cover;
  //   color: #fff;

  .sec-one-content {
    text-align: center;
    padding-top: 150px;
    h1 {
      .logo {
        width: 25%;
        display: inline-block;
        position: relative;
        top: 20px;
        > img {
          width: 100%;
          display: block;
        }
        @media (max-width: 600px) {
          top: 10px;
        }
      }
      margin-bottom: 30px;
      @media (max-width: 992px) {
        font-size: 52px;
      }
      @media (max-width: 576px) {
        font-size: 36px;
      }
      span {
        font-weight: 900;
      }
    }
  }
}
</style>
