<template>
  <section class="q-pa-md q-ma-sm">
    <div class="row justify-between">
      <q-parallax :src="content.imgUrl" :speed="content.speed">
        <h1 class="text-white">{{ content.title }}</h1>
      </q-parallax>
    </div>

    <q-card>
      <q-card-section>
        <div class="text-h5 q-pa-sm">{{ content.caption }}</div>
        <q-separator />
        <div class="q-pt-md">
          <p class="text-body1 q-pa-none">{{ content.description }}</p>
        </div>
      </q-card-section>
    </q-card>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Injury } from './models';

export default defineComponent({
  name: 'InjurySection',

  props: {
    content: {
      type: Object as PropType<Injury>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
h2,
.text-h2 {
  font-family: 'Raleway';
}

h5,
.text-h5 {
  font-family: 'Montserrat';
}

p {
  text-indent: 3.5em;
}
</style>
