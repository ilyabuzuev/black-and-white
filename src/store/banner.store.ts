import { defineStore } from "pinia";

interface IBanner {
  id: number;
  title: string;
  description: string;
}

interface IBanners {
  _banners: IBanner[]
}

const defaultBannerState: IBanners = {
  _banners: []
};

export const useBannerStore = defineStore('bannerStore', {
  state: () => (defaultBannerState),
  actions: {
    set(banner: IBanner) {
      this._banners.push(banner);
    }
  }
});