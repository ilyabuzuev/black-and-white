import { defineStore } from 'pinia';

export const useLoaderStore = defineStore('loaderStore', {
  state: () => ({
    status1: false,
  }),
  getters: {
    status(): boolean {
      return this.status1
    }
  },
  actions: {
    set(state: boolean) {
      this.status1 = state;
    },
  },
});