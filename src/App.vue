<template>
  <input v-model="input">
  <button @click="addItem()">Add to list</button>

  <h2>Polozky</h2>
  <ul>
    <li v-for="item in validItems" :key="`item-${item.id}`">
      <span @click="deleteItem(item)" style="margin-right: 15px">X</span>
      <span>Nazov polozky</span>
      {{ item.text }}
    </li>
  </ul>
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
      },

      deleteItem(item) {
        item.is_deleted=true
      }
    },

    computed: {
      validItems() {
        return this.items.filter(item => item.is_deleted)
      }
    }
  }
</script>

<style>



</style>
