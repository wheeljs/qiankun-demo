<template>
  <div class="home">
    <img v-if="user != null" :src="user.avatar" alt="User's avatar">
    <img v-else alt="Vue logo" src="../assets/logo.png">

    <HelloWorld :msg="'Welcome to Your Vue.js App' + (user != null ? user.username : '')" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>
