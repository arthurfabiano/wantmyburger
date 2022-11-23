<template>
  <nav id="nav">
    <router-link to="/" id="logo_url">
      <img :src="logo" id="logo" :alt="alt">
    </router-link>
    <router-link to="/">HOME</router-link>
    <router-link to="/pedidosview">PEDIDOS</router-link>
  </nav>
</template>

<script>
  export default {
    name: "compNavbar",
    props: ["logo", "alt"],
  }
</script>
<style>
  #nav {
    background-color: #222;
    border-bottom: 4px solid #FCBA03;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #nav #logo_url {
    margin: auto;
    margin-left: 0;
  }
  #logo {
    width: 40px;
    height: 40px;
  }
  #nav a {
    color: #FCBA03;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
    font-size: 14px;
    font-weight: bold;
  }
  #nav a:hover {
    color: #FFF;
  }
</style>