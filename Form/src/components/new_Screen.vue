<template>
  <nav>
    <ul>
      <h1>History Created by Hemant Jha</h1>
      <li><router-link to="/">View History</router-link></li>

    </ul>
  </nav>
</template>
<script>

export default {
  name:'new_Screen',
  // data: 'newusers'
}
</script>

<style scoped>
 .form-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 8px;
  }
  label {
    display: block;
    margin-top: 10px;
    font-weight: bold;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  nav{
    background: #ece8e8;
    padding:14px 0;
    margin-bottom: 40px;
  }
  .router-link-active{
    background: #0618bb;
  }
  </style>