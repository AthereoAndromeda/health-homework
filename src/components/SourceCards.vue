<template>
  <q-item
    clickable
    tag="a"
    :href="content.link"
    target="_blank"
    class="q-pa-none"
  >
    <q-card
      bordered
      @mouseenter="expanded = true"
      @mouseleave="expanded = false"
    >
      <!-- Title area -->
      <q-card-section>
        <div class="text-h6">{{ content.title }}</div>
      </q-card-section>

      <q-separator dark inset />
      <q-slide-transition>
        <div v-show="expanded">
          <q-card-section class="text-subtitle2">
            {{ content.author }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </q-item>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { SourceCard } from './models';

export default defineComponent({
  name: 'SourceCards',

  props: {
    content: {
      type: Object as () => SourceCard,
      required: true,
    },
  },

  setup() {
    return {
      expanded: ref(false),
    };
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

.q-item {
  transition: 0.3s;
}

.q-card {
  background: $grey-4;
  transition: 0.3s;

  &:hover {
    box-shadow: 3px 3px 15px $accent;
  }
}

.q-card--dark {
  background: $dark;
  transition: 0.3s;
}
</style>
