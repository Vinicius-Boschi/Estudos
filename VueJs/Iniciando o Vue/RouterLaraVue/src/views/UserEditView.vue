<template>
    <div class="user">
      <h1>This is an user page</h1>
      <pre>
        {{ $route.params.id }} Usuário <br>
        
        <button @click="login()">Login</button>

       </pre>
    </div>
  </template>

<script>
  export default {
    methods: {
      login() {
        this.$router.push('/about')
        console.log('Logou!')
      }
    }
  }
</script>
  
<style>
  @media (min-width: 1024px) {
    .user {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>