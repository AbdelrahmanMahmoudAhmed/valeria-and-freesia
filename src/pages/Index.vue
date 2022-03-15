<template>
  <search-input />
  <q-separator inset />

  <dashboard :data="data" />
</template>

<script>
import Credential from "./CredentialBee.vue";
import { defineComponent, ref } from "vue";
import Dashboard from "src/components/admen-components/Dashboard.vue";

import { theCollection } from "../boot/firebase";
import { getDocs } from "firebase/firestore";
import SearchInput from "src/components/admen-components/SearchInput.vue";

export default defineComponent({
  components: { Credential, Dashboard, SearchInput },
  name: "PageIndex",
  setup() {
    const data = ref("");
    getDocs(theCollection)
      .then((snapshot) => {
        let info = [];
        snapshot.docs.forEach((item) => {
          info.push({ ...item.data(), id: item.id });
        });
        data.value = info;
      })
      .catch((err) => {
        console.log(err.message);
      });

    return {
      data,
    };
  },
});
</script>
