<template>
  <HeaderComponent :name="dataRef.name" :jobTitle="dataRef.jobTitle" :gender="dataRef.gender"
    :birthdate="dataRef.birthdate" :university="dataRef.university" :degree="dataRef.degree"
    :graduationYear="dataRef.graduationYear" :experienceYears="dataRef.experienceYears" />

  <ExperienceComponent :experiences="dataRef.experiences" />
  <ProjectComponent :projects="dataRef.projects" />
  <div class="footer">
    <a class="footer-link" href="https://webkubor.github.io/resume/">GitHub Pages上</a>
    <a href="/resume.pdf">下载 PDF</a>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ExperienceComponent from '@/components/ExperienceComponent.vue';
import ProjectComponent from '@/components/ProjectComponent.vue';
import data from '@/config/user.json'; // 导入 JSON 文件

const dataRef = ref(data); // 使用 JSON 数据
</script>

