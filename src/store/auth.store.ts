import { defineStore } from 'pinia';

interface AuthStore {
  email: string;
  name: string;
  status: boolean;
}

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: {
      email: '',
      name: '',
      status: false,
    },
  }),
  getters: {
    isAuth(): boolean { 
      return this.user.status;
    },
    userEmail(): string {
      return this.user.email;
    }
  },
  actions: {
    clear() {
      this.user.status = false;
    },
    set(input: AuthStore) {
      this.$patch({ user: input });
    }
  }
});

export const useIsLoadingStore = defineStore('isLoading', {
  state: () => ({
    isLoading: true,
  }),
  getters: {
    status(): boolean {
      return this.isLoading
    }
  },
  actions: {
    set(state: boolean) {
      this.isLoading = state;
    },
  },
});