<template>
  <div class="input-field col s6">
    <input
      type="text"
      placeholder="Placeholder"
      :id="uid"
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)">
    <textarea
      type="textarea"
      placeholder="Placeholder"
      :id="uid"
      class="materialize-textarea"
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"></textarea>
      <label :for="uid"><slot /></label>  
  </div>  
</template>





<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    },
    uid: {
      type: String,
      default: ''
    }    
  },
  created() {
    console.log(this.uid)
  }
}
</script>

<style scoped>
.input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  padding: 5px;
}

.input-control input:focus,
.input-control textarea:focus {
  background-color: #eee;
  outline: none;
}
</style>


