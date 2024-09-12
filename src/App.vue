<template>
  <HeaderComponent :name="dataRef.name" :jobTitle="dataRef.jobTitle" :gender="dataRef.gender"
    :birthdate="dataRef.birthdate" :university="dataRef.university" :degree="dataRef.degree"
    :graduationYear="dataRef.graduationYear"  />

  <ExperienceComponent :experiences="dataRef.experience" />
  <ProjectComponent :projects="dataRef.projects" />
  <AdvantagesComponent :data="dataRef.skills" />
  <div class="footer">
    <a class="footer-link" href="https://webkubor.github.io/resume/">GitHub Pages上</a>
    <a class="down-link"  :href="dataRef.pdf" >下载 PDF</a>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ExperienceComponent from '@/components/ExperienceComponent.vue';
import ProjectComponent from '@/components/ProjectComponent.vue';
import AdvantagesComponent from '@/components/AdvantagesComponent.vue'; 
import data from '@/config/user.json'; // 导入 JSON 文件

import faviconUrl from "@/assets/favicon.ico"
const dataRef = ref(data); // 使用 JSON 数据
document.title = dataRef.value.name +'- 个人简历'
setWebsiteLogo(faviconUrl)
// function onDown() {
//   let repository = dataRef.value.repository
//   let url =  repository +  '/raw/master/public/resume.pdf'
// }
function setWebsiteLogo(faviconUrl) {
  var link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");

  link.type = "image/x-icon";

  link.rel = "shortcut icon";

  link.href = faviconUrl;

  document.getElementsByTagName("head")[0].appendChild(link);
}
</script>
