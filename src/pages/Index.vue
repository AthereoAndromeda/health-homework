<template>
  <q-page class="">
    <div class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        thumbnails
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          :name="1"
          img-src="https://cnnphilippines.com/.imaging/mte/demo-cnn-new/750x450/dam/cnn/2019/11/07/hazing_CNNPH.jpg/jcr:content/hazing_CNNPH.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.britannica.com/33/129733-050-AF95D301/Smoke-flames-twin-towers-attacks-World-Trade-September-11-2001.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://www.helpguide.org/wp-content/uploads/domestic-abuse-768.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
      </q-carousel>
    </div>

    <div class="text-center">
      <h2>Intentional Injuries</h2>
    </div>

    <div>
      <p class="text-body1 q-pa-lg">
        Intentional injuries are common throughout the globe. There are many
        reasons for intentional injuries and how they can affect or hurt others.
        Intentional Injuries are one of the most common forms or causes of
        injury, and include acts of violence, war, or can be self-imposed.
        Intentional injuries include gangs, fraternities, kidnapping, abduction
        acts of terror or terrorism.
      </p>
    </div>

    <hr />

    <h3 class="text-center">Types of Intentional Injuries</h3>

    <InjurySection :contents="injuries" />

    <section></section>
  </q-page>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import InjurySection from 'components/InjurySection.vue';
import { Injury } from 'src/components/models';

const injuries: Injury[] = [
  {
    title: 'Terrorism',
    imgUrl:
      'https://cdn.britannica.com/33/129733-050-AF95D301/Smoke-flames-twin-towers-attacks-World-Trade-September-11-2001.jpg',
    description: `
      It
    `,
    speed: 0.8,
  },
  {
    title: 'Fraternity Hazing',
    imgUrl:
      'https://mlgmjdmz2q1t.i.optimole.com/HHnvME4--aY3y28g/w:1000/h:986/q:75/https://tfnlgroup.com/wp-content/uploads/2019/07/fraternities.jpg',
    description: `
      lorem
    `,
    speed: 2,
  },
  {
    title: 'Domestic Abuse',
    imgUrl:
      'https://images.theconversation.com/files/69377/original/image-20150119-14472-g0sz8l.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
    description: `
      ipsum
    `,
    speed: 2,
  },
];

export default defineComponent({
  name: 'PageIndex',
  components: {
    InjurySection,
  },
  setup() {
    return {
      injuries,
      slide: ref(1),
      autoplay: true,
    };
  },
});
</script>

<style lang="scss" scoped>
h2,
h3 {
  font-family: 'Montserrat';
}

p {
  text-indent: 5em;
}

section {
  height: 100vh;
}
</style>
