<template>
  <div class="py-24 sm:py-32 lg:py-40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="sm:text-center">
        <h2 class="text-lg font-semibold leading-8 text-accent">
          ¿Por qué nosotros?
        </h2>
        <p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-primary-darker dark:text-primary-lighter">
          Nuestro servicio habla por sí solo
        </p>
        <p class="mx-auto mt-4 max-w-2xl sm:text-lg md:text-xl leading-8 text-secondary-dark dark:text-secondary-light">
            Calidad y economía te prometen en cualquier lugar.
            En Dextro no solo cubrimos tu necesidad, queremos que tu experiencia sea agradable y te sientas parte del equipo.
        </p>
      </div>

      <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
        <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl sm:shrink-0 text-white bg-accent">
              <component :is="feature.icon" class="h-8 w-8" aria-hidden="true" />
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8 text-primary-darker dark:text-primary-lighter">
                {{ feature.name }}
              </p>
              <p class="mt-2 text-base leading-7 text-secondary-dark dark:text-secondary-light">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BoltIcon, DevicePhoneMobileIcon, BuildingStorefrontIcon, ScaleIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Tienda física y virtual',
    description:
      '¿Nos visitas o te lo llevamos? Como mejor te funcione, además te ofrecemos distintas formas de pago.',
    icon: BuildingStorefrontIcon,
  },
  {
    name: 'Valor y Costo',
    description:
      'Tenemos un amplio catálogo para diferentes marcas de alta calidad a precios justos.',
    icon: ScaleIcon,
  },
  {
    name: 'Entregas para ayer',
    description:
      'Tenemos servicio de delivery para Caracas. Compártenos tu ubicación y recibe comodamente a la brevedad.',
    icon: BoltIcon,
  },
  {
    name: 'Al alcance de un WhatsApp',
    description:
      '¿Tienes una consulta? ¿Buscas un presupuesto? Estas a un WhatsApp de tener la respuesta.',
    icon: DevicePhoneMobileIcon,
  },
]
</script>