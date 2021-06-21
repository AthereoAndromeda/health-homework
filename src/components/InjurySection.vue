<template>
  <section v-for="content of contents" :key="content" class="q-pa-lg">
    <div class="row justify-between">
      <q-parallax :src="content.imgUrl" :speed="content.speed">
        <h1 class="text-white">{{ content.title }}</h1>
      </q-parallax>
    </div>

    <q-card>
      <q-card-section>
        <div class="text-body1">{{ content.description }}</div>
      </q-card-section>
    </q-card>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Injury } from './models';

export default defineComponent({
  name: 'InjurySection',

  props: {
    contents: Array as () => Injury[],
  },

  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
h2 {
  font-family: 'Raleway';
}
</style>
