<template>
    <div>
      <h1>My Items</h1>
      
      <div v-if="store.loading">Loading...</div>
      <div v-if="store.error">{{ store.error }}</div>
      <div v-if="categories.length">
        Search 
        <input style="height:20px;margin-bottom:20px;" v-model="searchText" />
        <div style="border:1px solid grey;border-radius:5px; padding: 10px; margin: 10px 50px;" v-for="cat in filteredCategories" :key="cat.id">
          <CategoryCard :category="cat" />
      </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted, ref } from 'vue';
  import { itemsStore } from '../Store/AvivItemsStore.js'
  import CategoryCard from './CategoryCard.vue';
  const searchText = ref('');
  const store = itemsStore();
  const categories = computed(()=> store.data || []);
  onMounted(() => {
    store.fetchData();
  });

  const filteredCategories = computed(() => {
      if (!searchText.value) return categories.value;

      // Search function
      const search = (items) => {
        return items.filter(item => {
          // Check if the item matches the search text
          const matchesItem = item.name.toLowerCase().includes(searchText.value.toLowerCase()) ||
                              item.details.toLowerCase().includes(searchText.value.toLowerCase());
          
          // Check if any subitems match the search text
          const matchesSubitems = item.subitems && item.subitems.some(subitem => 
            subitem.name.toLowerCase().includes(searchText.value.toLowerCase()) ||
            subitem.details.toLowerCase().includes(searchText.value.toLowerCase())
          );

          return matchesItem || matchesSubitems;
        });
      };

      return categories.value
        .map(category => ({
          ...category,
          items: search(category.items) // Filter items for the category
        }))
        .filter(category => category.items.length > 0); // Only include categories that have matching items
    });

  </script>