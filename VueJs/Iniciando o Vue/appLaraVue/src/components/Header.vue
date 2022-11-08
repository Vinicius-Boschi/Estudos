<template>
  <header class="header">
    <h1 v-if="$slots.title" class="title">
      <slot name="title" />
    </h1>

    <div class="description">
      <slot name="description" />
    </div>

    <div class="content">
      <slot />
    </div>

  </header>
</template>

<script>
  export default {
    name: 'Header',
    // mounted() {
    //   window.addEventListener('resize', this.resize)
    // },
    // beforeUnmount() {
    //   // Destrói o conteúdo.
    //   console.log('beforeUnmount')
    //   window.removeEventListener('resize', this.resize)
    // },
    // unmounted() {
    //   console.log('unmounted')
    // },
    // methods: {
    //   resize($event) {
    //     console.log($event)
    //   }
    // }
  }
</script>

<style>

  .header {
    background-color: #000;
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
    padding: 2rem;
  }

  p {
    font-size: 16px;
    font-weight: normal;
    color: #D8D3D3;
  }
  
</style>