<template>
    <section class="skill">
      <header class="section-hd">
        <span class="section-title-l"></span>
        <h2 class="section-title">优势</h2>
        <span class="section-title-r"></span>
      </header>
      <div class="section-bd">
        <!--优势-->
        <div class="item">
          <header class="item-hd">
            <span class="item-time">{{advantages.title}}</span>
          </header>
          <div class="item-bd">
            <ul class="section-content">
              <li v-for="(advantage, index) in advantages.points" :key="index">
                {{ advantage }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    computed: {
      advantages() {
        return this.data || {};
      }
    }
  };
  </script>
