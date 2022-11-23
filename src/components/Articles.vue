<template>
  <div class="">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-primary-darker dark:text-primary-lighter">
          Nuestro Blog
        </h2>
        <p class="mt-4 sm:text-lg md:text-xl leading-8 text-secondary-dark dark:text-secondary-light">
          Si te interesa saber más sobre las piezas, el origen de una falla o recibir tips,
          Dextro prepara breves artículos para que aprendas sin dolor y te lleves mejor con tu vehículo.
        </p>

        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div v-for="callout in callouts" :key="callout.name" class="group relative">
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-neutral-900 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img :src="callout.imageSrc" :alt="callout.imageAlt" class="h-full w-full object-cover object-center" />
            </div>
            <p class="mt-6 text-base font-semibold text-primary-darker dark:text-primary-lighter">
              {{ callout.description }}
            </p>
            <h3 class="text-sm text-secondary-dark dark:text-secondary-light">
              <a :href="callout.href">
                <span class="absolute inset-0" />
                {{ callout.name }}
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const callouts = [
  {
    name: '3 hábitos sencillos para mantenerlo como nuevo',
    description: 'Alarga la vida del motor',
    imageSrc: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwZml4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Man filling the engine with oil.',
    href: '#',
  },
  {
    name: '¿Las tienes en tu vehículo?',
    description: '5 Herramientas indispensables',
    imageSrc: 'https://plus.unsplash.com/premium_photo-1661962910391-cfe1ea4dfe90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRvb2xib3h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'A table with tools',
    href: '#',
  },
  {
    name: 'Descubre las principales causas',
    description: '¿Alto consumo de gasolina en tu vehículo?',
    imageSrc: 'https://images.unsplash.com/photo-1594310381486-59abdfe96b37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]
</script>
