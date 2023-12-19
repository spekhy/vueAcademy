<template>

<input v-model = "input">
<button @click = "addItem()">Add to list</button>

</template>

<script>

export default {
  data() {
    return {
      input: "",
      list: []
    }
  },
  methods: {
    addItem() {
      this.list.push({
        id: this.list.lenght+1,
        text: this.input,
        is_deleted: false
      })
      this.input = ""
    }
  }
}

</script>

<style>

body {
  background-color: black;
}

</style>
