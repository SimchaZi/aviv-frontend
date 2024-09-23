<template>
    <div>
      <div style="display:flex; justify-content: space-between; font-size: large; font-weight: bold;">
        <div @click="navigateToItem(props.item.id)">
            {{props.item.name}}
        </div>
        <div v-if="hasSubItems" @click="toggleVisibility" style="margin-right:30px; cursor: pointer;">
            <span v-if="!showSubItems">+</span>
            <span v-else>-</span>
        </div>
      </div>
      <div v-if="showSubItems" v-for="subItem in props.item.subitems" :key="subItem.id">
        <SubItemCard :subItem="subItem" style="border:1px solid grey;border-radius:5px; padding: 10px; margin: 10px 50px;"/>
      </div>
    </div>
  </template>
  
  <script setup>
    import SubItemCard from './SubItemCard.vue'
    import {ref} from 'vue'
    import { useRouter } from 'vue-router';
    const props = defineProps(['item'])
    const router = useRouter();
    const showSubItems = ref(false);
    const hasSubItems = ref(props.item.subitems?.length > 0);
  
    function toggleVisibility(){
      showSubItems.value = !showSubItems.value;
    }

    const navigateToItem = (itemId) => {
       router.push({ name: 'items', params: { itemId } });
    };
  </script>