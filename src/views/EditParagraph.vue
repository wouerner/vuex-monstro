<template>
  <div class="home">
     Edit Paragraph

      <!-- Editam as informações cadastradas -->
      <!-- Como ter acesso e como editar os valores do paragrafo -->
      <editParagraph v-model="paragraphLocal"/>

      <!-- Com vuex-->
      <p>com vue ex</p>
      <editParagraph v-model="paragraph"/>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

import editParagraph from '@/components/editParagraph.vue'

export default {
  name: 'EditParagraph',
  components: {
    editParagraph
  },
  data(){
    return {
      paragraphLocal: ''
    }
  },
  computed:{
    ...mapGetters({
      getParagraph: 'paragraph/get'
    }),
    paragraph: {
      get(){
        return this.getParagraph
      },
      set(val){
        this.updateAction(val)
      }
    }
  },
  methods:{
    ...mapActions({
      updateAction: 'paragraph/updateAction'
    })
  }
}
</script>
