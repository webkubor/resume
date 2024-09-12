<!-- 自我介绍 -->
<template>
    <header class="content-hd">
      <section class="title">
        <div class="name">
          <h1>{{ User.name }}</h1>
          <span class="last-modified">最后更新于{{ lastUpdated }}</span>
        </div>
        <div class="job">
          <h2>{{ User.jobTitle }}</h2>
        </div>
      </section>
      <section class="info">
        <ul>
          <li>{{ User.gender }} / {{ User.birthdate }}</li>
          <li>{{ User.university }}</li>
          <li>{{ User.degree }} / {{ User.graduationYear }}年毕业</li>
          <li>工作经验: {{ new Date().getFullYear() - Number(User.graduationYear) }}年</li>
        </ul>
      </section>
      <section class="contact">
        <ul>
          <li v-for="(contact, index) in User.contacts" :key="index">
            <a :href="contact.href">
              <span class="contact-link">{{ contact.text }}</span>
              <span class="iconfont" v-html="contact.icon"></span>
            </a>
          </li>
        </ul>
      </section>
    </header>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';
import User from '@/config/user.json'; // 导入 JSON 文件

const lastUpdated = ref(null);



  onMounted(() => {
  fetchGit()
})





function fetchGit() {
  const repo = "webkubor/resume"; 
  const url = `https://api.github.com/repos/${repo}/commits`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      lastUpdated.value = data[0].commit.committer.date
    })
    .catch(error => {
      console.error('Error fetching GitHub commits:', error);
    });
}
  </script>
  
