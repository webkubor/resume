<!-- 经历 -->
<template>
    <section class="practice">
      <header class="section-hd">
        <span class="section-title-l"></span>
        <h2 class="section-title">经历</h2>
        <span class="section-title-r"></span>
      </header>
      <div class="section-bd">
        <div class="item" v-for="(item, index) in experiences" :key="index">
          <header class="item-hd">
            <h3 class="item-name">{{ item.company }}</h3>
            <span class="item-time">{{ item.period }}</span>
            <span class="btn item-more">{{ item.type }}</span>
          </header>
          <div class="item-bd">
            <p class="item-des">简介: {{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ExperienceComponent',
    props: {
      experiences: Array
    }
  }
  </script>
  