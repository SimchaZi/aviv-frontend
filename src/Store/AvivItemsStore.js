import { defineStore } from 'pinia';
import axios from 'axios';

export const itemsStore = defineStore('AvivItemsStore', {
  state: () => ({
    data: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchData() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get('http://localhost:3000/api/data');
        this.data = response.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});