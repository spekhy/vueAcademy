<template class="bg-black">
  <input v-model="input" @keyup.enter="addItem()" class="border-[2px] border-black rounded-[5px] bg-stone-700 m-[10px]">
  <button @click="addItem()" class="border-[1px] border-white rounded-[5px] mx-[5px] px-[5px]">Add to list</button>

  <hr class="my-[10px]">

  <h1 class="ml-[10px] font-semibold">Polozky</h1>
  <ul>
    <li v-for="item in validItems" :key="`item-${item.id}`">
      <span @click="deleteItem(item)" class="mx-[20px]">X</span>
      {{ item.text }}
    </li>
  </ul>

  <hr  class="my-[10px]">

  <ul>
    <li v-for="item in deletedItems" :key="`item-${item.id}`" class="mx-[20px]">
      <s><span> - </span>{{ item.text }}</s>
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

  body {
    background-color: black;
    color: white;
  }

</style>
