<!-- 项目 -->
<template>
    <section class="project">
      <header class="section-hd">
        <span class="section-title-l"></span>
        <h2 class="section-title">项目</h2>
        <span class="section-title-r"></span>
      </header>
      <div class="section-bd">
        <div class="item" v-for="(project, index) in projects" :key="index">
          <header class="item-hd">
            <h3 class="item-name">{{ project.name }}</h3>
            <span class="item-time">{{ project.period }}</span>
            <span class="btn item-more" @click="handleMoreClick(project.moreLink)">更多</span>
          </header>
          <div class="item-bd">
            <p class="item-des">简介: {{ project.description }}</p>
            <div v-if="project.link">
              <a :href="project.link" target="_blank">项目完整说明地址: {{ project.link }}</a>
            </div>
            <ul>
              <li v-for="(point, idx) in project.details" :key="idx">{{ point }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProjectComponent',
    props: {
      projects: Array
    },
    methods: {
      handleMoreClick(link) {
        // Handle more button click, could redirect or open link
        if (link) {
          window.open(link, '_blank');
        }
      }
    }
  }
  </script>
  

  