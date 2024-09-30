import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebarStore', {
  state: () => ({
    sidebar: {
      opened: false
    },
  }),
  getters: {
    isOpened(): boolean {
      return this.sidebar.opened;
    },
  },
  actions: {
    set(state: boolean): void {
      this.sidebar.opened = state;
    },
  }
});