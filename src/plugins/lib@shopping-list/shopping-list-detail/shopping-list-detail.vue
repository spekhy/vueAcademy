<template>

    <div>
        
      <input v-model="input" @keyup.enter="addItem()" class="border-[2px] border-black rounded-[5px] m-[10px]">
      <button @click="addItem()" class="border-[1px] border-white rounded-[5px] mx-[5px] px-[5px]">Add to list</button>

      <hr class="my-[10px]">

      <h1 class="ml-[10px] font-semibold">Polozky</h1>
      <ul>
        <li v-for="item in validItems" :key="`item-${item.id}`">
          <span @click="deleteItem(item)" class="mx-[20px]">X</span>
          {{ item.text }}
        </li>
      </ul>

      <hr class="my-[10px]">

      <ul>
        <li v-for="item in deletedItems" :key="`item-${item.id}`" class="mx-[20px]">
          <s><span> - </span>{{ item.text }}</s>
        </li>
      </ul>

    </div>

    <hr  class="my-[10px]">

    <div class="flex">
      <div class="w-[50%] h-screen bg-neutral-700">
          
        <input v-model="inputt" @keyup.enter="addCart()" class="border-[2px] border-black rounded-[5px] m-[10px]">
        <button @click="addCart()" class="bg-amber-[800]">Add cart</button>
          
        <ul>
          <li v-for="cart in addedCarts" :key="`cart-${cart.id}`" class="mx-[20px] text-white">
            {{ cart.text }}
          </li>
        </ul>
            
      </div>
        
      <div class="w-[50%] h-screen bg-neutral-800">
        <h1>nie</h1>
      </div>

    </div>

    <dialog id="d">
      
      <button onclick="d.openCartWin()">Open dialog win</button>

      <div>
        <button onclick="addCart()">Open dialog win</button>
      </div>

    </dialog>
    
</template>
 
<script>
  export default {
    data() {
      return {
        items: [],
        input: "",
        cart: [],
        inputt: ""
      }
    },

    methods: {
      addItem() {
        
        if (this.input.length===0) return
        
        this.items.push({
          id: this.items.lenght+1,
          text: this.input,
          is_deleted: false
        })
        this.input = ""
      },

      deleteItem(item) {
        item.is_deleted = true
      },

      addCart() {

        if (this.inputt.length===0) return

        this.cart.push({
          id: this.cart.lenght+1,
          text: this.inputt,
          is_deleted: false
        })
        this.inputt = ""
      }
    },

    computed: {
      validItems() {
        return this.items.filter(item => !item.is_deleted)
      },

      addedCarts() {
        return this.cart.filter(cart => !cart.is_deleted)
      },

      deletedItems() {
        return this.items.filter(item => item.is_deleted)
      }
    }
  }
</script>

<style>

  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.095);
  }


</style>
