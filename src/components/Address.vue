<template>
  <div class="">
    <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-primary-darker dark:text-primary-lighter">
          Ubícanos
        </h2>
        <p class="mt-4 max-w-2xl sm:text-lg md:text-xl leading-8 text-secondary-dark dark:text-secondary-light">
          Estamos en Caracas, en la avenida Puente Hierro, a una cuadra de la panaderia Q'Tal, diagonal a la referencia principal.
        </p>
        <p class="mt-4 max-w-2xl sm:text-lg md:text-xl leading-8 text-secondary-dark dark:text-secondary-light">
          Abrimos de lunes a viernes de 8:00 AM a 6:00 PM y los sábados de 9:00 AM a 4:00 PM.
        </p>

        <div class="flex gap-2 mt-12">
          <div v-for="feature in features" :key="feature.name" class="flex">
            <a
              target="_blank"
              :href="feature.link"
              class="flex h-10 w-10 items-center justify-center rounded-xl text-white bg-accent hover:bg-accent-darker"
            >
              <svg-icon class="" type="mdi" :path="feature.icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 w-full h-3/4">
        <img src="https://maps.googleapis.com/maps/api/staticmap?scale=1&size=1600x900&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visibility:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=es&region=VE&markers=color:0x48487f|10.4927958,-66.9134256&zoom=16&client=google-presto&signature=jMy3IxG7wn7ynyo_CucabqkMqVg" class="rounded-lg bg-neutral-800 w-full" />
        <div class="" />
        <div class="" />
        <img src="https://images.unsplash.com/photo-1571974448718-ac26a9af7d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RvcmVmcm9udHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="Tienda Dextro, parte frontal." class="rounded-lg bg-neutral-800 w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { mdiGoogleMaps, mdiInstagram, mdiMagnify, mdiPhone, mdiWhatsapp } from '@mdi/js';
import svgIcon from '@jamescoyle/vue-icon';

const features = [
{
    icon: mdiPhone,
    link: 'tel:+58-414-9107346'
  },
  {
    icon: mdiWhatsapp,
    link: 'https://wa.me/+584149107346'
  },
  {
    icon: mdiInstagram,
    link: 'https://www.instagram.com/dextrorepuestos'
  },
  {
    icon: mdiGoogleMaps,
    link: 'https://www.google.com/maps/place/Dextro+Repuestos/data=!3m1!4b1!4m2!3m1!1s0x8c2a5f30008fc757:0xa591c0edeba348c6'
  }
]
</script>

<!-- <h3 class="text-3xl">Ubícanos</h3>
Estamos en Caracas, en la avenida Puente Hierro, cerca de la panaderia Q'Tal, frente a la clínica
src="../assets/dextro-store.jpeg"
<a
  href="https://www.google.com/maps/place/Dextro+Repuestos/data=!3m1!4b1!4m2!3m1!1s0x8c2a5f30008fc757:0xa591c0edeba348c6"
  target="_blank"
>
  <img
    class="rounded-md mx-auto h-2/4"
    src="https://maps.googleapis.com/maps/api/staticmap?scale=1&size=1600x900&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visibility:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=es&region=VE&markers=color:0x48487f|10.4927958,-66.9134256&zoom=16&client=google-presto&signature=jMy3IxG7wn7ynyo_CucabqkMqVg"
    alt=""
    target="_blank"
  >
</a> -->