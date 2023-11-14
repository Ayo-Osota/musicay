<template>
  <div class="max-md:hidden mx-auto fixed left-5">
    <nav>
      <ul class="py-6.5 px-4 bg-primary-900 rounded-4xl flex flex-col gap-7.5">
        <li v-for="item in menuItems" :key="item.id" @click.prevent="sidenavStore.close">
          <router-link :to="item.route">
            <component :is="item.icon"></component>
          </router-link>
        </li>
      </ul>

      <ul class="py-6.5 px-4 bg-primary-900 rounded-4xl flex flex-col gap-7.5 mt-5">
        <li>
          <button type="button">
            <icon-profile />
          </button>
        </li>
        <li>
          <button type="button">
            <icon-logout />
          </button>
        </li>
      </ul>
    </nav>
  </div>

  <div
    class="md:hidden fixed top-0 left-0 bg-primary-900 h-full pt-20 px-8 w-10/12 max-w-[340px] transition-transform duration-300 z-40"
    :class="sidenavStore.hiddenClass"
  >
    <nav class="mt-5 ml-1.5 h-1/2 max-h-[423px]">
      <ul class="flex flex-col h-full justify-between">
        <li v-for="item in menuItems" :key="item.id" @click.prevent="sidenavStore.close">
          <router-link :to="item.route" class="link-item">
            <component :is="item.icon" class="max-md:w-7"></component>
            <span class="text-primary-100/25 text-base font-bold">{{ item.name }}</span>
          </router-link>
        </li>
        <li>
          <button type="button" class="link-item">
            <icon-profile class="max-md:w-7" />
            <span class="text-primary-100/25 text-base font-bold">Profile</span>
          </button>
        </li>
        <li>
          <button type="button" class="link-item">
            <icon-logout class="max-md:w-7" />
            <span class="text-primary-100/25 text-base font-bold">Log out</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import IconHome from './icons/IconHome.vue'
import type { NavLinkInterface } from '../interfaces/navLink'
import IconPlaylist from './icons/IconPlaylist.vue'
import IconRadio from './icons/IconRadio.vue'
import IconVideo from './icons/IconVideo.vue'
import { useSidenavStore } from '../stores/sidenav'

const sidenavStore = useSidenavStore()

const menuItems: NavLinkInterface[] = [
  {
    id: '1',
    name: 'Home',
    route: { name: 'Home' },
    icon: IconHome
  },
  {
    id: '2',
    name: 'My collections',
    route: { name: 'Collections' },
    icon: IconPlaylist
  },
  {
    id: '3',
    name: 'Radio',
    route: { name: 'Radio' },
    icon: IconRadio
  },
  {
    id: '4',
    name: 'Music videos',
    route: { name: 'Videos' },
    icon: IconVideo
  }
  //   {
  //     id: '5',
  //     name: 'Profile',
  //     route: { name: 'Profile' },
  //     icon: IconHome
  //   },
  //   {
  //     id: '6',
  //     name: 'Home',
  //     route: { name: 'Home' },
  //     icon: IconHome
  //   },
]
</script>

<style scoped>
.link-item {
  display: flex;
  align-items: center;
  gap: 27px;
}

.router-link-active span {
  color: var(--white);
}

.router-link-active svg {
  fill: #facd66;
  filter: drop-shadow(0px 5.232876777648926px 5.232876777648926px rgba(0, 0, 0, 0.25));
}
</style>
