<template>
  <div>
    <v-container>
      <h1 class="text-center">Параметры котельных</h1>
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
