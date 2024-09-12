<template>
  <div>
    <p class="last-modified">最后更新于2022年1月</p>
    <a class="download-pdf" href="/resume.pdf">下载 PDF</a>
  </div>
   
    <HeaderComponent
      :name="dataRef.name"
      :jobTitle="dataRef.jobTitle"
      :gender="dataRef.gender"
      :birthdate="dataRef.birthdate"
      :university="dataRef.university"
      :degree="dataRef.degree"
      :graduationYear="dataRef.graduationYear"
      :experienceYears="dataRef.experienceYears"
    />
    <ExperienceComponent :experiences="dataRef.experiences" />
    <ProjectComponent :projects="dataRef.projects" />
    <footer class="github-footer">
      <a class="footer-link" href="https://web-kubor.gitee.io/resume/">页面托管在Gitee Pages上</a>
    </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ExperienceComponent from '@/components/ExperienceComponent.vue';
import ProjectComponent from '@/components/ProjectComponent.vue';
import data from '@/config/user.json'; // 导入 JSON 文件

const dataRef = ref(data); // 使用 JSON 数据

</script>

<style lang="scss">
@import "@/styles/index.scss";
</style>
