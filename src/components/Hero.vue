<template>
  <div class="mt-2 lg:flex lg:justify-around">
    <div class="">
      <div class=" pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
        <main class="px-2">
          <div class="">
            <h1 class="font-bold tracking-tight sm:text-5xl md:text-6xl text-4xl lg:text-left text-center text-primary-darker dark:text-primary-lighter">
              <span class="">Más que repuestos</span>
              <span class="text-accent block xl:inline">
                somos soluciones
              </span>
            </h1>
            <p class="mt-3 text-base md:mt-5 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:text-xl lg:mx-0 text-secondary-dark dark:text-secondary-light">
              En Dextro nos ocupamos de que cuentes con las mejores opciones para tu vehículo y economía.
              Visítanos en Caracas o solicita el envío de tu pedido, la atención siempre será la mejor.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="flex w-full gap-1 items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg text-primary-light bg-accent hover:bg-accent-darker dark:bg-accent-darker hover:dark:bg-accent shadow-md">
                  <svg-icon class="" type="mdi" :path="mdiWhatsapp"></svg-icon>
                  Contáctanos
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <button
                  @click="navigateTo('#us')"
                  class="flex w-full gap-1 items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg text-primary-dark bg-neutral-50 hover:bg-primary-light dark:bg-primary-dark hover:dark:bg-secondary-dark dark:text-primary-light shadow-md">
                  <svg-icon class="" type="mdi" :path="mdiMagnify" />
                  Conocénos
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:inset-y-0 lg:right-0 lg:w-1/2 px-2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96" src="https://images.pexels.com/photos/6407568/pexels-photo-6407568.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
  </div>
</template>

<script setup>
import { mdiMagnify, mdiWhatsapp } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

const navigateTo = (id) => {
  const section = document.querySelector(id)
  section.scrollIntoView({ behavior: 'smooth' })
}
</script>
