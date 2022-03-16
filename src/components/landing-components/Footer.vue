<template>
  <div class="footer">
    <div class="footer-container">
      <a
        href="https://www.facebook.com/groups/valeriia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
         
        </span>
         <i class="fa-brands fa-facebook"></i>
               <p>لأراء العملاء إنضم للجروب من هنا</p>

      </a>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.footer {
  background-color: #6b7e3c;
  color: #fff;
  padding: 10px;
  .footer-container {
display: flex;
justify-content: center;    
    > a {
      padding: 0;
      margin: 0;
      overflow: hidden;
      font-size: 30px;
      background-color: #e9e4e4;
      height: fit-content;
      position: relative;
      display: block;
      z-index: 4;
      display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        width: fit-content;
        border-radius: 5px;
    //   > span {
    //     background-color: #fff;
    //     height: 50%;
    //     width: 50%;
    //     position: absolute;
    //     left: 50%;
    //     top: 50%;
    //     transform: translate(-50% , -50%);
    //     z-index: 3;
       
    //   }
       > svg {
           position: relative;
           z-index: 5;
           color: #2374e1;
        }
        > p {
      margin: 0;
      padding: 0 10px;
      font-weight: bold;
      font-size: 18px;
      color: #6b7e3c;
    }
    }
  }
}
</style>