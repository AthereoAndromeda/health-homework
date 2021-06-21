<template>
  <section class="q-pa-md row items-center q-gutter-md">
    <q-card v-for="content in contents" :key="content" bordered>
      <q-card-section>
        <div class="text-h6">
          <a :href="content.link">
            {{ content.title }}
          </a>
        </div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ content.author }}
      </q-card-section>
    </q-card>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SourceCard } from './models';

export default defineComponent({
  name: 'SourceCards',
  props: {
    contents: {
      type: Array as () => SourceCard[],
      required: true,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

<style lang="scss" scoped>
.q-card {
  background: $grey-4;
  transition: 0.3s;
}

.q-card--dark {
  background: $dark;
  transition: 0.3s;
}
</style>
