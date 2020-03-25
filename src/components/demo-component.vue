<template>
  <div class="Toaster">
      <ods-inputoptions
        ref="inputOptions"
        id="cbx"
        type="checkbox"
        name="Yes/no"
        :label="checkBoxSelections"
        @input="handleInput"
        for="cbx"
        componentData='[]'></ods-inputoptions>
    <ods-button class="Toaster-btn" @click="updateToastMsg">Change the Toast Message: {{this.toastMsg}}</ods-button>
    <ods-button class="Toaster-btn" @click="handleClick">Show me a Toast</ods-button>
  </div>
</template>

<script>
import Swipe from "@alaskaairux/ods-toast/dist/swipe.js";
import Toaster from "@alaskaairux/ods-toast/dist/toaster";

window.Swipe = Swipe;
const toaster = new Toaster();

export default {
  name: 'DemoComponent',
  data: function() {
    return {
      toastMsg: "Hello!",
      inputSelection: null,
      inputOptionsLabel: "Your Choice:",
      componentData: [
        {
          "id": "radio1",
          "value": "yes",
          "label": "Yes",
          "checked": false
        },
        {
          "id": "radio2",
          "value": "no",
          "label": "No",
          "checked": false
        }
      ]
    }
  },
  mounted() {
    this.$refs.inputOptions.componentData = this.componentData;
  },
  methods: {
    handleClick() {
      toaster.add(this.toastMsg);
    },
    handleInput(e) {
      const inputValue = e.target.value;
      this.inputSelection = inputValue;
      let updatedComponentData = this.componentData.map(option => inputValue.includes(option.value) ?
          { ...option, checked: true } :
          { ...option, checked: false });
      this.componentData = updatedComponentData;
    },
    updateToastMsg() {
      if (this.toastMsg === "Hello!") {
        this.toastMsg = "Hola!";
      } else {
        this.toastMsg = "Hello!";
      }
    }
  },
  computed: {
    checkBoxString: function() {
      return JSON.stringify(this.componentData);
    },
    checkBoxSelections: function() {
      return this.inputOptionsLabel + JSON.stringify(this.inputSelection);
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
