<script setup>
import Hero from './components/Hero.vue';
import Header from './components/layout/Header.vue'
import Address from './components/Address.vue'
import Benefits from './components/Benefits.vue'
import Articles from './components/Articles.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="bg-white dark:bg-neutral-900 md:px-36">
    <Header class="" />
    <!-- <Header class="w-full fixed top-0 z-10 py-1" /> -->
    <Hero class="" />
    <Benefits id="us" />
    <Address id="contact" />
    <Articles id="blog" />
    <Contact />
  </div>
</template>
