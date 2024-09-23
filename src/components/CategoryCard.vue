<template>
    <div>
      <div style="display:flex; justify-content: space-between; font-size: large; font-weight: bold;">
        <div>
          {{props.category.name}}
        </div>
        <div @click="toggleVisibility" style="margin-right:30px; cursor: pointer;">
          <span v-if="!showItems">+</span>
          <span v-else>-</span>
        </div>
      </div>
      <div v-if="showItems" v-for="item in props.category.items" :key="item.id">
        <ItemCard :item="item" style="border:1px solid grey;border-radius:5px; padding: 10px; margin: 10px 50px;"/>
      </div>
    </div>
  </template>
  
  <script setup>
    import ItemCard from './ItemCard.vue'
    import {ref} from 'vue'
    const props = defineProps(['category'])
    const showItems = ref(false);
  
    function toggleVisibility(){
      showItems.value = !showItems.value;
    }
  </script>