<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>

  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      Header,
      Main,
      Footer
    }
  }
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
  #app {
    background-image: url('https://user-images.githubusercontent.com/74377158/189697378-43d1687c-6d63-434c-a759-f08047499dd8.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    font-family: 'Inter', serif;
  }
</style>
