<template>
  <Disclosure as="nav" v-slot="{ open }" class="dark:bg-neutral-900 fixed top-0 z-10 py-1">
    <div class="max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-neutral-800 hover:bg-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Abrir menú</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center mx-auto">
            <img class="block h-8 w-auto lg:hidden rounded-full" src="../../assets/dextro-logo.jpg" alt="Your Company" />
            <img class="hidden h-12 w-auto lg:block rounded-full" src="../../assets/dextro-logo.jpg" alt="Your Company" />
            <h1 class="text-2xl ml-4 font-mono text-primary-light dark:text-primary-dark">
              Dextro
            </h1>
          </div>
        </div>

      </div>
      <div class="flex flex-1 items-center justify-center mt-4">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <button
                @click="navigateTo(item.href)"
                v-for="item in navigation"
                :key="item.name"
                :class="['text-secondary-light dark:text-secondary-dark hover:bg-neutral-800 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium'
                ]"
                :aria-current="item.current ? 'page' : undefined"
              >
                {{ item.name }}
              </button>
            </div>
          </div>
        </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-neutral-800 text-white' : 'text-gray-300 hover:bg-neutral-800 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Nosotros', href: '#us', current: false },
  { name: 'Contacto', href: '#contact', current: false },
  { name: 'Blog', href: '#blog', current: false },
]

const navigateTo = (id) => {
  const section = document.querySelector(id)
  section.scrollIntoView({ behavior: 'smooth' })
}
</script>