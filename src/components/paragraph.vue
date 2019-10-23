<template>
  <div>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    value: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
