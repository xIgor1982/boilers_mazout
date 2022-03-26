<template>
  <div>
    <v-container>
      <h1>Это обертка для отображения страницы Boilers</h1>
    </v-container>    
    <boilers></boilers>
  </div>
</template>

<script>
import Boilers from '../components/Boilers.vue';

export default {
  components: { Boilers },
  name: "BoilersView",
}

</script>
