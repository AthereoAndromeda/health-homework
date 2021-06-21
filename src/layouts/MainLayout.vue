<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Intentional Injuries </q-toolbar-title>

        <div>Health Homework</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="">
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

        <q-toggle
          label="Dark Mode"
          v-model="first"
          color="black"
          icon="dark_mode"
          @update:model-value="toggleDarkMode"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Home',
    caption: 'Main Page',
    icon: 'home',
    link: '/#/',
    target: '_self',
  },
  {
    title: 'Sources',
    caption: 'Sources used',
    icon: 'source',
    link: '/#/sources',
    target: '_self',
  },
  {
    title: 'Code',
    caption: 'Code used for website',
    icon: 'code',
    link: 'https://github.com/redstripez08/health-homework',
  },
];

import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  // methods: {
  //   doStuff() {
  //     console.log('SWITCH!');
  //     $q.dark.toggle();
  //   },
  // },

  setup() {
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);
    // const darkMode = ref($q.dark);

    function toggleDarkMode() {
      $q.dark.toggle();
    }

    return {
      toggleDarkMode,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      first: $q.dark.isActive,
    };
  },
});
</script>

<style lang="scss">
.q-drawer--light,
.q-drawer--standard {
  background: $grey-3;
  transition: 0.3s;
}

.q-drawer--dark {
  background: #1e1e1e;
  transition: 0.3s;
}
</style>
