<template>
  <q-page>
    <q-img :src="imgSrc" fit="cover" height="50vh">
      <div class="absolute-full flex flex-center">
        <h1>Sources Used</h1>
      </div>
    </q-img>

    <hr />

    <SourceCards :contents="contents" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SourceCards from 'components/SourceCards.vue';

export default defineComponent({
  name: 'Sources',
  components: {
    SourceCards,
  },
  setup() {
    const contents = [
      {
        title: 'Classifications of Injury',
        author: 'World Health Organization',
        link: 'https://www.who.int/classifications/icd/adaptations/iceci/en/',
      },
      {
        title: 'Placeholder Title',
        author: 'Placeholder Author',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
    ];

    return {
      contents,
      imgSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    };
  },
});
</script>

<style lang="scss" scoped>
h1 {
  font-family: 'Montserrat';
}

p {
  text-indent: 3em;
}

hr {
  margin: 0;
  padding: 0;
  height: 13px;
  background-color: $accent;
}
</style>
