<template>
  <div class="hello">
  	<v-header :title="注册"></v-header>
    <h1>{{ msg }}</h1>
    <h2>Essential Lisadnks</h2>
    <h2>Ecosystem</h2>
    <div class="hello-center">
      <div class="hello-content">我是hosdfme</div>
    </div>
  </div>
</template>

<script>
	import Header from './header/header.vue'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
	  'v-header': Header
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.hello-center {
  width: 80%;
  height: 300px;
  margin: 0 auto;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.hello-center > .hello-content {
  width: 80%;
  height: 80%;
  border: 1px solid pink;
}
</style>
