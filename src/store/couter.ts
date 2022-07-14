import { defineHamiStore } from "hami-vuex";
import { vuexStore } from "@/store";

const CouterStore = defineHamiStore({
  $name: "couter",
  $state: {
    num: 0,
  },
  add() {
    this.$patch((state) => {
      state.num++;
    });
  },
});

export const counterStore = CouterStore.use(vuexStore);
