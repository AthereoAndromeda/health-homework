<template>
  <q-page>
    <q-img :src="imgSrc" fit="cover" height="50vh">
      <div class="absolute-full flex flex-center">
        <h1>Sources Used</h1>
      </div>
    </q-img>

    <hr />

    <section class="q-pa-md row q-gutter-md">
      <SourceCards
        v-for="content of contents"
        :key="content.title"
        :content="content"
      />
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SourceCards from 'components/SourceCards.vue';
import { SourceCard } from 'src/components/models';

export default defineComponent({
  name: 'Sources',
  components: {
    SourceCards,
  },
  setup() {
    const contents: SourceCard[] = [
      {
        title: 'Classifications of Injury',
        author: 'World Health Organization',
        link: 'https://www.who.int/classifications/icd/adaptations/iceci/en/',
      },
      {
        title:
          "Do Terrorists Win? Rebels's use of Terrorism and Civil War Outcomes",
        author: 'Fortnam, Virginia Page',
        link: 'https://kb.osu.edu/handle/1811/52898',
      },
      {
        title: 'Torture, Terrorism, and the Use of Violence',
        author: 'Wisnewski, J. Jeremy',
        link: 'https://books.google.com/books?id=QbALBwAAQBAJ&pg=PA175',
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
