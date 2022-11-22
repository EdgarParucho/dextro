<template>
  <div class="">
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2 class="text-3xl font-bold tracking-tight text-primary-darker dark:text-primary-light sm:text-4xl">
        <span class="block">
          ¿Necesitas ayuda?
        </span>
        <span class="block text-accent">
          Contacta a Dextro
        </span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a href="https://wa.me/+584149107346" class="inline-flex gap-1 items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-red-700">
            <svg-icon class="" type="mdi" :path="mdiWhatsapp"></svg-icon>
            Escríbenos
          </a>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <a href="https://www.google.com/maps/place/Dextro+Repuestos/data=!3m1!4b1!4m2!3m1!1s0x8c2a5f30008fc757:0xa591c0edeba348c6" class="inline-flex gap-1 items-center justify-center rounded-md border border-transparent px-5 py-3 text-base font-medium bg-neutral-50 hover:bg-primary-light dark:text-white dark:bg-primary-dark hover:dark:bg-secondary-dark">
            <svg-icon class="" type="mdi" :path="mdiGoogleMaps"></svg-icon>
            Localízanos
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { mdiWhatsapp, mdiGoogleMaps } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

</script>