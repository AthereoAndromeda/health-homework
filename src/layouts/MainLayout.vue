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

        <div class="my-end-toolbar-text">9P-B01 | Q4W3 Health Homework</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>

        <router-link
          v-for="route in routerLinks"
          :key="route"
          :to="route.link"
          class="myRouter"
        >
          <q-item clickable tag="a">
            <q-item-section avatar>
              <q-icon :name="route.icon" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ route.title }} </q-item-label>
              <q-item-label caption>{{ route.caption }} </q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

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
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

const linksList = [
  {
    title: 'Code',
    caption: 'Code used for website',
    icon: 'code',
    link: 'https://github.com/redstripez08/health-homework',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);

    const routerLinks = [
      {
        title: 'Home',
        caption: 'Main Page',
        icon: 'home',
        link: '/',
      },
      {
        title: 'Sources',
        caption: 'Sources used',
        icon: 'source',
        link: '/sources',
      },
    ];

    function toggleDarkMode() {
      $q.dark.toggle();
    }

    return {
      toggleDarkMode,
      routerLinks,
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
div.my-end-toolbar-text {
  font-family: 'Poppins';
}

.q-drawer--light,
.q-drawer--standard {
  background: $grey-3;
  transition: 0.3s;
}

.q-drawer--dark {
  background: #1e1e1e;
  transition: 0.3s;
}

.myRouter {
  color: $grey-9;
  text-decoration: none;
}
</style>
