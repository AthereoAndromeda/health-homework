<template>
  <q-item
    clickable
    tag="a"
    :href="content.link"
    target="_blank"
    class="q-pa-none"
  >
    <q-card bordered>
      <!-- Title area -->
      <q-card-section>
        <div class="text-h6">{{ content.title }}</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section class="text-subtitle2">
        {{ content.author }}
      </q-card-section>
    </q-card>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SourceCard } from './models';

export default defineComponent({
  name: 'SourceCards',
  props: {
    content: {
      type: Object as () => SourceCard,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
h6,
.text-h6 {
  font-family: 'Raleway';
}

.text-subtitle2 {
  font-family: 'Poppins';
}

a {
  text-decoration: none;
}

.q-card {
  background: $grey-4;
  transition: 0.3s;
}

.q-card--dark {
  background: $dark;
  transition: 0.3s;
}
</style>
