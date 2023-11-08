<template>
    <div id="app">
      <ButtonExample /> <!-- 引入 ButtonExample 组件 -->
      <div class="container">
        <!-- 其他内容 -->
      </div>
    </div>
  </template>
  
  <script>
  import ButtonExample from '../components/ButtonExample.vue'; // 引入 ButtonExample 组件
  
  export default {
    name: 'home',
    components: {
      ButtonExample // 注册 ButtonExample 组件
    }
  }
  </script>
  
  <style>
  /* 样式 */
  </style>
  