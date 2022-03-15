<template>
  <div class="products" v-if="products">
    <div class="block-holder" v-for="(block, i) in products" :key="i">
      <div class="type-one item container">
        <div class="content">
          <h3>{{ block.productOne.header }}</h3>
          <p>{{ block.productOne.content }}</p>
        </div>
        <div class="product-img">
          <div class="bg-one"></div>
          <div class="bg-two"></div>
          <div class="bg-img">
            <img
              :src="require(`../../assets/imgs/${block.productOne.img}`)"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="type-two item">
        <div class="product-img">
          <div class="bg-one"></div>
          <div class="bg-two"></div>
          <div class="bg-img">
            <img
              :src="require(`../../assets/imgs/${block.productTwo.img}`)"
              alt=""
            />
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
            "إقضى على تساقط الشعر بزيت فريزيا بخير الطبيعة من مجموعة الزيوت النادرة لوقف تساقط الشعر و علاج الفراغات و التنعيم و إطالة اللشعر فى وقت قصير",
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
  direction: rtl;
  padding: 100px 0 70px 0;
  .block-holder {
    .type-one {
      margin-bottom: 180px;
      .product-img {
        .bg-one {
          //   margin: 102px auto 0 -20px;
          left: 15%;
          top: 8%;
          width: 90%;
          height: 100%;
        }
        .bg-two {
          //   margin-top: -468px;
          //   margin-right: -40px;
          left: 10%;
          top: 15%;
          width: 80%;
          height: 80%;
        }
        .bg-img {
        }
      }
      @media (max-width: 600px) {
        left: -8%;
      }
    }
    .type-two {
      .product-img {
        .bg-one {
          //   margin: 102px auto 0 -20px;
          left: 3%;
          top: 20%;
          width: 80%;
          height: 70%;
          z-index: 9;
        }
        .bg-two {
          //   margin-top: -468px;
          //   margin-right: -40px;
          right: 3%;
          top: -13%;
          height: 98%;
          width: 80%;
        }
        .bg-img {
          right: 50px;
        }
      }
    }
    .item {
      display: flex;
      position: relative;

      .content {
        width: 50%;
        padding: 10px 30px;
        > h3 {
          will-change: transform, opacity;
          animation-duration: 1000ms;
          line-height: 46.8px;
          font-weight: 700;
        }
        > p {
          padding-top: 20px;
          font-weight: 300;
          font-size: 25px;
          line-height: 1.2;
        }
      }
      .product-img {
        width: 50%;

        position: relative;
        .bg-one {
          background-color: $secondary;
          position: absolute;
        }
        .bg-two {
          background-color: $accent;
          position: absolute;
        }
        .bg-img {
          width: 80%;
          z-index: 99;
          position: relative;
          img {
            display: block;
            width: 100%;
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
