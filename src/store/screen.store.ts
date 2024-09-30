import { defineStore } from "pinia";

export const useScreenStore = defineStore('screenStore', {
  state: () => ({
    width: window.innerWidth
  }),
  actions: {
    set(state: number) {
      this.width = state;
    }
  }
})