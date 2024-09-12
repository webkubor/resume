<!-- 项目 -->
<template>
  <section class="project">
    <div class="section-hd">
      <span class="section-title-l"></span>
      <h2 class="section-title">项目</h2>
      <span class="section-title-r"></span>
    </div>
    <div class="section-bd">
      <div class="item" v-for="(project, index) in projects" :key="index">
        <div class="item-hd">
          <h3 class="item-name">{{ project.name }}</h3>
          <span class="item-time">{{ project.type }}</span>
        </div>
        <div class="item-bd">
          <p class="item-des">简介: {{ project.description }}</p>
          <div v-if="project.link">
            <a :href="project.link" target="_blank">项目地址: {{ project.link }}</a>
          </div>
          <ul>
            <li v-for="(point, idx) in project.details" :key="idx">{{ point }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

defineProps({
  projects: Array
})

</script>