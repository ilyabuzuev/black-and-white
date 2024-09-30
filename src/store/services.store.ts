import { defineStore } from "pinia";
import type { Models } from "appwrite";
import { db } from "@/utils/appwrite";
import { DB_ID, COLLECTION_SERVICES } from '@/app.constants';

interface Service extends Models.Document {
  description?: string;
  img_url?: string;
  price?: number;
  title?: string;
}

interface Services {
  loader: boolean;
  services: Service[]
}

const deafultServicesState: Services = {
  loader: false,
  services: []
}

export const useServicesStore = defineStore('servicesStore', {
  state: () => (deafultServicesState),
  actions: {
    async getServices() {
      this.loader = true;

      const response = await db.listDocuments(DB_ID, COLLECTION_SERVICES);
      const data = response;

      this.services = data.documents;      
      this.loader = false;
    }
  }
});