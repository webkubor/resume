<!-- 经历 -->
<template>
    <section class="practice">
      <div class="section-hd">
        <span class="section-title-l"></span>
        <h2 class="section-title">经历</h2>
        <span class="section-title-r"></span>
     </div>
      <div class="section-bd">
        <div class="item" v-for="(item, index) in experiences" :key="index">
          <div class="item-hd">
            <h3 class="item-name company">{{ item.company }}</h3>
            <span class=" item-more industry">{{ item.industry }} </span>

            <span class="item-time time">{{ item.time }}</span>
            <span class="item-time position">{{ item.position }}</span>
         </div>
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
  <style lang="scss">
   .time {
    color: darken($color-blue, 2%);
    margin: 0 5px;
    }

    .position {
      color: darken($color-blue, 2%);
      margin: 0 5px;
    }

    .company {
      color: $color-blue;
    }
    .industry {
      background: darken($color-blue, 2%);
      color: aliceblue;
      display: inline-block;
      padding:  2px;
    }

</style>