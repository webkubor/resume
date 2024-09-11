<template>
    <header class="content-hd">
      <section class="title">
        <div class="name">
          <h1>{{ name }}</h1>
        </div>
        <div class="job">
          <h2>{{ jobTitle }}</h2>
        </div>
      </section>
      <section class="info">
        <ul>
          <li>{{ gender }} / {{ birthdate }}</li>
          <li>{{ university }}</li>
          <li>{{ degree }} / {{ graduationYear }}年毕业</li>
          <li>工作经验: {{ experienceYears }}年</li>
        </ul>
      </section>
      <section class="contact">
        <ul>
          <li v-for="(contact, index) in contacts" :key="index">
            <a :href="contact.href">
              <span class="contact-link">{{ contact.text }}</span>
              <span class="iconfont" v-html="contact.icon"></span>
            </a>
          </li>
        </ul>
      </section>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
    props: {
      name: String,
      jobTitle: String,
      gender: String,
      birthdate: String,
      university: String,
      degree: String,
      graduationYear: String,
      experienceYears: Number,
      contacts: Array
    }
  }
  </script>
  
