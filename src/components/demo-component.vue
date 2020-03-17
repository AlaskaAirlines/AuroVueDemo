<template>
  <div>
    <ods-button>Toast</ods-button>
    <ods-inputoptions
        ref={inputOptionsRef}
        id="rdo"
        type="checkbox"
        name="rdo"
        label="This is a label"
        onInput={handleInput}
        for="radio1" componentData="[]"></ods-inputoptions>
    <ods-button @click="alertApp">Change Toaster</ods-button>
  </div>
</template>

<script>
export default {
  name: 'DemoComponent',
  label: 'Your Choice',
  methods: {
    alertApp() {
      console.log('Alert'); 
    }
  }
}
</script>
