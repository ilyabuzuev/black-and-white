import { defineStore } from "pinia";

let theme: string; 

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  theme = 'dark';
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  theme = 'light';
}

export const useThemeStore = defineStore('themeStore', {
  state: () => ({
    _theme: theme
  }),
  getters: {
    theme(): string {
      return this._theme;
    }
  },
  actions: {
    set(state: string) {
      this._theme = state;
    }
  }
})