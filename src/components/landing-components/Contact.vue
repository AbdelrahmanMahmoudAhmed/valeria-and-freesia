<template>
  <div class="contact">
    <div class="line"></div>
    <form class="content-form" v-if="!thanks" @submit.prevent="addInfo">
      <h5>دعنا نتواصل معك</h5>
      <q-input
        required
        v-model="name"
        label="الاسم"
        placeholder=" اكتب اسمك هنا"
        hint="يشرفنا ان نتواصل معك"
        :dense="dense"
      />
      <q-input
        class="telephone"
        required
        v-model="tel"
        label="الهاتف"
        placeholder="اكتب رقم هاتفك "
        hint="سوف نتصل بك  فى أقرب وقت "
        :dense="dense"
        mask="(###) ### - #####"
      />
      <q-btn class="q-mt-sm" label="إرسال" color="primary" type="submit" />
    </form>
    <div class="content-form" v-if="thanks">
      <h5>جزيل الشكر لك</h5>
      <span>{{ currentName }} </span>
      <p>سوف نقوم بالاتصال بك فى أقرب وقت ممكن .</p>
    </div>
  </div>
</template>

<script>
import { addDoc, serverTimestamp } from "firebase/firestore";
import { theCollection } from "../../boot/firebase";
import { ref } from "vue";

export default {
  setup() {
    const form = ref(null);
    const name = ref("");
    const tel = ref("");
    const thanks = ref(false);
    const currentName = ref("");
    console.log(name.value);

    const addInfo = () => {
      const today = new Date();
      const realDay =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
      const realTime =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      addDoc(theCollection, {
        name: name.value,
        phone: tel.value,
        day: realDay,
        time: realTime,
        currentDate: serverTimestamp(),
      })
        .then(() => {
          currentName.value = name.value;
          console.log(name.value, tel.value);
          name.value = "";
          tel.value = "";
          thanks.value = true;
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    return {
      addInfo,
      text: ref(""),
      dense: ref(false),
      name,
      tel,
      form,
      thanks,
      currentName,
    };
  },
};
</script>

<style lang="scss">
.contact {
  direction: rtl;
  height: 100vh;
  position: relative;
  .line {
    height: 228px;
    width: 100%;
    background-color: #6b7e3c;
    will-change: transform, opacity;
    animation-duration: 1000ms;
    // margin: 246px auto 0 0;
    position: absolute;
    left: 0;
    top: calc(50% - 115px);
    z-index: 1;
  }

  .content-form {
    .telephone {
      direction: ltr;
      text-align: right;
    }
    > p,
    span {
      font-size: 18px;
    }
    > span {
      color: #fff;
      background-color: $primary;
      padding: 5px;
      border-radius: 3px;
    }
    > h5 {
      font-size: 2.25rem;
    }
    position: absolute;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: 5px 5px 20px 0 rgb(0 0 0 / 40%);
    background-color: #fff;
    // margin: 50px auto;
    padding: 20px;
    text-align: center;
    min-height: 490px;
    z-index: 9;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 992px) {
      width: 60%;
    }
    @media (max-width: 600px) {
      width: 90%;
    }
    .q-field__messages.col {
      > div {
        text-align: right;
      }
    }
    .q-field__label.no-pointer-events.absolute.ellipsis {
      left: unset;
      right: 0;
    }
    span.q-btn__content.text-center.col.items-center.q-anchor--skip.justify-center.row {
      padding: 15px;
    }
  }
  span.block {
    font-size: 20px;
  }
  .q-field__native.q-placeholder {
    text-align: right;
  }
}
</style>
