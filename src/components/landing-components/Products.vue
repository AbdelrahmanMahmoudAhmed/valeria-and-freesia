<template>
  <div class="products" v-if="products">
    <div class="block-holder" v-for="(block, i) in products" :key="i">
      <div class="type-one item container">
        <div class="content">
          <h3>{{ block.productOne.header }}</h3>
          <p>{{ block.productOne.content }}</p>
        </div>
        <div class="product-img">
          <div class="bg-one">
            <div class="bg-two">
              <div class="bg-img">
                <img
                  :src="require(`../../assets/imgs/${block.productOne.img}`)"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="type-two item container">
        <div class="product-img">
          <div class="bg-one">
            <div class="bg-two">
              <div class="bg-img">
                <img
                  :src="require(`../../assets/imgs/${block.productTwo.img}`)"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <h3>{{ block.productTwo.header }}</h3>
          <p>{{ block.productTwo.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const products = {
      blockOne: {
        productOne: {
          header: "زيت فاليريا هيريحك",
          content:
            "ريح نفسك بزيت فاليريا بخير الطبيعة من مجموعة الزيوت النادرة و الأعشاب المعالجة لإلتهاب و ألم المفاصل , قدر يريّح ألاف من مرضى خشونة الركبة فى مصر و الوطن العربى  ",
          img: "valeria.jpg",
        },
        productTwo: {
          header: "زيت فريزيا هيشرفك",
          content:
            "إقضى على تساقط الشعر بزيت فريزيا بخير الطبيعة من مجموعة الزيوت النادرة لوقف تساقط الشعر و علاج الفراغات و التنعيم و إطالة الشعر فى وقت قصير",
          img: "freesia.jpg",
        },
      },
    };

    return {
      products,
    };
  },
};
</script>

<style lang="scss">
.products {
    background-image: linear-gradient(to bottom, #eaf3d4, #e9e4e4);
      direction: rtl;
  padding-top: 100px ;
  @media (max-width: 567px) {
      padding: 0;
    }
  .block-holder {
    @media (min-width: 1199px) {
      display: flex;
    }
    .type-one {
      // margin-bottom: 180px;
      .product-img {
        .bg-one {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .bg-two {
            width: 95%;
            height: 95%;
            display: flex;
            justify-content: center;
            align-items: center;

            .bg-img {
              width: 95%;
              height: 95%;
            }
          }
        }
      }
    
    }
    .type-two {
        @media (max-width: 576px) { 
            flex-direction: column-reverse !important;
      }
      .product-img {
        .bg-one {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .bg-two {
            width: 95%;
            height: 95%;
            display: flex;
            justify-content: center;
            align-items: center;

            .bg-img {
              width: 95%;
              height: 95%;
            }
          }
        }
      }
    }
    .item {
      display: flex;
      position: relative;
      padding: 10px 0;
      @media (min-width: 1199px) {
        padding: 5px;
      }

      .content {
        width: 50%;
        padding: 10px 30px;
         @media (max-width: 576px) { 
            text-align: center;
          }
           @media (min-width: 1199px) { 
            text-align: center;
          }
        > h3 {
          will-change: transform, opacity;
          animation-duration: 1000ms;
          line-height: 46.8px;
          font-weight: 700;
                      color: #73722b;

        }
        > p {
          padding-top: 20px;
          font-weight: 300;
          font-size: 25px;
          line-height: 1.2;
                      color: #73722b;

          @media (min-width: 992px) and (max-width: 1199px) {
            font-size: 36px;
            line-height: 1.5;
          }
         
        }
      }
      .product-img {
        width: 50%;

        position: relative;
        .bg-one {
          background-color: $secondary;
        }
        .bg-two {
          background-color: $accent;
        }
        .bg-img {
          width: 80%;
          z-index: 99;
          position: relative;
          img {
            display: block;
            width: 100%;
            height: 100%;
            box-shadow: 2px 2px 40px 0 rgb(26 26 26 / 40%);
          }
        }
      }
      @media (max-width: 600px) {
        flex-direction: column;

        .content {
          width: 100%;
        }
        .product-img {
          width: 100%;
        }
      }
    }

  }
}
</style>
