<template>
    <section class="skill">
      <div class="section-hd">
        <span class="section-title-l"></span>
        <h2 class="section-title">优势</h2>
        <span class="section-title-r"></span>
     </div>
      <div class="section-bd">
        <!--优势-->
        <div class="item">
          <div class="item-hd">
            <span class="item-time">{{advantages.title}}</span>
         </div>
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
