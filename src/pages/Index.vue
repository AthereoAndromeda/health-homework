<template>
  <q-page class="">
    <div class="q-pt-none">
      <q-carousel
        animated
        v-model="slide"
        thumbnails
        infinite
        :autoplay="true"
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
          img-src="https://insidearabia.com/wp-content/uploads/2021/04/042721-In-this-July-22-2014-file-photo-smoke-and-fire-from-a-devastating-Israeli-airstrike-rise-over-Gaza-City-during-the-holy-month-of-Ramadan.-AP-Photo-Hatem-Moussa-1280x640.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://www.helpguide.org/wp-content/uploads/domestic-abuse-768.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://media.sciencephoto.com/image/h2000445/800wm"
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
        acts of terror or terrorism. Many deaths occur in the Philippines, even
        with a population of {{ population }}, it is important to know the
        various ways we may get harmed.
      </p>
    </div>

    <hr />

    <h3 class="text-center">Types of Intentional Injuries</h3>

    <section>
      <InjurySection
        v-for="content of injuries"
        :key="content.title"
        :content="content"
      />
    </section>
  </q-page>
</template>

<script lang="ts">
import { ref, defineComponent, onBeforeMount } from 'vue';
import InjurySection from 'components/InjurySection.vue';
import { Injury } from 'src/components/models';
import { countryAPI } from 'src/boot/axios';
import { AxiosResponse } from 'axios';

const injuries: Injury[] = [
  {
    title: 'Suicide',
    imgUrl: 'https://d.newsweek.com/en/full/1355243/noose.jpg',
    caption: "Hangman's Noose",
    description: `
      Suicide is the act of intentionally causing one's own death. There are many ways
      and methods to commit suicide, with the most common being hanging, poisoning, and
      jumping off buildings, and self-inflicted gunshot wounds. Suicide is one of the most
      common causes of death, resulting with 828,000 global deaths in 2015, making it the
      10th leading cause of death worldwide.
    `,
    speed: 1.4,
  },
  {
    title: 'Terrorism',
    imgUrl:
      'https://cdn.britannica.com/33/129733-050-AF95D301/Smoke-flames-twin-towers-attacks-World-Trade-September-11-2001.jpg',
    caption: 'September 11 Attacks',
    description: `
      Terrorism is the use of intentional violence to achieve political aims. It is usually used
      in the context of violence against non-combatants during a  war. Terrorism is used to strike
      fear to the publics and produce terror in the memories of people. The effectiveness
      of  these acts relies not in the act itself, but rather the public's or government's 
      reaction to the act.
    `,
    speed: 1.2,
  },
  {
    title: 'Fraternity Hazing',
    imgUrl:
      'https://mlgmjdmz2q1t.i.optimole.com/HHnvME4--aY3y28g/w:1000/h:986/q:75/https://tfnlgroup.com/wp-content/uploads/2019/07/fraternities.jpg',
    caption: 'Hazing Ritual',
    description: `
      A fraternity is a group of people with similar backgrounds, occupations, interests,
      or tastes. Some of these fraternities may require a hazing ritual to become a member.
      These rituals are often symbolic and to show your commitment and dedication to the group.
      Hazing rituals can sometimes be extreme, and have led to the deaths of some
      students.
    `,
    speed: 2,
  },
  {
    title: 'Assault',
    imgUrl:
      'https://images.theconversation.com/files/69377/original/image-20150119-14472-g0sz8l.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
    caption: 'Domestic Abuse',
    description: `
      Assault is when a person harms another with intent. Assault is broad and can range from
      causing serious bodily injury to another, or cause bodily harm by reckless operation
      of a motor vehicle. Other common forms are domestic abuse, and penalties for this are
      often proportional to the severity of the attack.
    `,
    speed: 1.5,
  },
  {
    title: 'Gang',
    imgUrl:
      'https://montecristomagazine.com/wp-content/uploads/2020/10/ClarkParkGangMain.jpg',
    caption: "East Vancouver's Youth Gang, 1970's",
    description: `
      Gangs are a relatively tough, mostly street-based group of young people who regard themselves
      and may be seen by others as a group who engages in criminal activity and violence. Many young
      people often join gangs for fun, protection, and to obtain a sense of identitiy. Some well-known
      examples are the Crips, Bloods, Money Gang Mafia, Almighty Vice Lord Nation, MS-13, and Los Zetas
    `,
  },
];

interface Response extends AxiosResponse {
  data: {
    population: number;
  }[];
}

export default defineComponent({
  name: 'PageIndex',

  components: {
    InjurySection,
  },

  setup() {
    const population = ref('<Loading...>');

    onBeforeMount(async () => {
      try {
        const res: Response = await countryAPI.get('/capital/manila');
        population.value = res.data[0].population.toString();
      } catch (error) {
        population.value = '<API CALL FAILED, RESTART PAGE TO FIX>';
      }
    });

    return {
      injuries,
      population,
      slide: ref(1),
    };
  },
});
</script>

<style lang="scss" scoped>
h2,
h3,
.text-h3,
.text-h2 {
  font-family: 'Montserrat';
}

p {
  text-indent: 5em;
}
</style>
