<template>
  <div>
    <input v-model="content" @input="handle">
  </div>
</template>

<script>
export default {
  name: 'editParagraph',
  props:['value'],
  data(){
    return{
      content: this.value
    }
  },
  methods:{
    handle(){
      this.$emit('input', this.content)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
