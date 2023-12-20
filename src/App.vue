<template>
  <input v-model="input" @keyup.enter="addItem()">
  <button @click="addItem()">Add to list</button>

  <h2>Polozky</h2>
  <ul>
    <li v-for="item in validItems" :key="`item-${item.id}`">
      <span @click="deleteItem(item)" style="margin-right: 15px">X</span>
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        items: [],
        input: ""
      }
    },

    methods: {
      addItem() {
        
        if (this.input.length===0) return;
        
        this.items.push({
          id: this.items.lenght+1,
          text: this.input,
          is_deleted: false
        })
        this.input = ""
      },

      deleteItem(item) {
        item.is_deleted = true
      }
    },

    computed: {
      validItems() {
        return this.items.filter(item => !item.is_deleted)
      },

      deletedItems() {
        return this.items.filter(item => item.is_deleted)
      }
    }
  }
</script>

<style>



</style>
