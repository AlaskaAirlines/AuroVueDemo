<template>
  <div>
    <ods-button @click="handleClick">Toast</ods-button>
    <ods-inputoptions
        ref={inputOptionsRef}
        id="rdo"
        type="checkbox"
        name="rdo"
        label="Static label"
        onInput={handleInput}
        for="radio1" componentData="[]"></ods-inputoptions>
    <ods-button @click="updateToastMsg">Change Toaster</ods-button>
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
</style>
