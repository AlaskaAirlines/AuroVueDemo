<template>
  <div class="Toaster">
    <ods-button class="Toaster-btn" @click="handleClick">Toast</ods-button>
    <ods-button class="Toaster-btn" @click="updateToastMsg">Change Toaster</ods-button>
  </div>
</template>

<script>
import Swipe from "@alaskaairux/ods-toast/dist/swipe.js";
import Toaster from "@alaskaairux/ods-toast/dist/toaster";

window.Swipe = Swipe;
const toaster = new Toaster();

export default {
  name: 'DemoComponent',
  label: 'Your Choice',
  data: function() {
    return {
      toastMsg: "Hello!"
    }
  },
  methods: {
    handleClick() {
      toaster.add(this.toastMsg);
    },
    updateToastMsg() {
      this.toastMsg = "Hola!";
    }
  }
}
</script>

<style scoped>
@import "../../node_modules/@alaskaairux/ods-toast/dist/toaster.css";

.Toaster-btn {
  display: block;
  margin-bottom: 10px;
}
</style>
