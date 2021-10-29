<template>
  <div id="app">
    <h3>Do you like tacos?</h3>

    <input v-model="tacos" value="yes" type="radio" id="yes" />
    <label for="yes"> yes</label><br />

    <input v-model="tacos" value="no" type="radio" id="no" />
    <label for="no"> no</label><br />

    <p v-if="tacos === 'yes'" class="thumbs">👍</p>
    <p v-else-if="tacos === 'no'">you're a monster</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tacos: ''
    }
  }
};
</script>