<template>
    <div style="text-align: left;">
      {{props.subItem.name}}
    </div>
  </template>
  
  <script setup>

    const props = defineProps(['subItem'])
    
  </script>