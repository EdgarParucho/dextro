<template>
  <Disclosure
    as="nav"
    v-slot="{ open }"
    class="top-0 z-10 py-1 sticky bg-primary-lighter dark:bg-primary-darker">
    <div>
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white text-secondary-dark dark:text-secondary-light hover:bg-primary-light hover:dark:bg-primary-dark">
            <span class="sr-only">Abrir menú</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center mx-auto">
            <img class="block h-8 w-auto lg:hidden rounded-full" src="../../assets/dextro-logo.jpg" alt="Your Company" />
            <img class="hidden h-12 w-auto lg:block rounded-full" src="../../assets/dextro-logo.jpg" alt="Your Company" />
            <h1 class="text-2xl ml-4 font-mono text-primary-darker dark:text-primary-lighter">
              Dextro
            </h1>
          </div>
        </div>

      </div>
      <div class="flex flex-1 items-center justify-center mt-4">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <button
                v-for="item in navigation"
                @click="navigateTo(item.href)"
                :key="item.name"
                class="text-secondary-dark dark:text-secondary-light hover:bg-primary-light hover:dark:bg-primary-dark px-3 py-2 rounded-md text-sm font-medium"
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
        <DisclosureButton
          v-for="item in navigation"
          @click="navigateTo(item.href)"
          :key="item.name"
          as="button"
          :href="item.href"
          class="text-secondary-dark dark:text-secondary-light hover:bg-primary-light hover:dark:bg-primary-dark block px-3 py-2 rounded-md text-base font-medium"
        >
            {{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Nosotros', href: '#us' },
  { name: 'Contacto', href: '#contact' },
  { name: 'Blog', href: '#blog' },
]

const navigateTo = (id) => {
  const section = document.querySelector(id)
  section.scrollIntoView({ behavior: 'smooth' })
}
</script>