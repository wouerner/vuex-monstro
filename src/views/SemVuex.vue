<template>
  <div class="home">
    <h1>
      titulo: {{getTitle}}
    </h1>
      <!-- Mostram as informações cadastradas -->
      Sem Vuex
      <paragraph :value="paragraph"></paragraph>

      <!-- Editam as informações cadastradas -->
      <editParagraph v-model="paragraph"/>

      <p>Com Vuex</p>
      <paragraph :value="paragraphVuex"></paragraph>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import paragraph from '@/components/paragraph.vue'
import editParagraph from '@/components/editParagraph.vue'

export default {
  name: 'home',
  components: {
    paragraph,
    editParagraph
  },
  data(){
    return {
      title: 'Titulo',
      paragraph: 'paragraph'
    }
  },
  computed:{
    ...mapGetters({
      getParagraph: 'paragraph/get',
      getTitle: 'title/get'
    }),
    paragraphVuex() {
      return this.getParagraph
    },
  }
}
</script>
