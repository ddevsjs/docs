<script setup lang="ts">
const $l = useLocalePath();
</script>

<template>
  <header
    class="flex flex-row items-center justify-around w-screen h-16 border-b"
  >
    <h4 class="text-2xl font-extrabold font-mono">DDevsJS</h4>
    <nav class="flex flex-row items-center justify-center gap-4">
      <NuxtLink
        class="text-lg font-semibold uppercase font-mono"
        :to="$l('index')"
        >{{ $t("header.navbar.home") }}</NuxtLink
      >
      <NuxtLink
        class="text-lg font-semibold uppercase font-mono"
        :to="$l('docs')"
        >{{ $t("header.navbar.docs") }}</NuxtLink
      >
      <NuxtLink
        class="text-lg font-semibold uppercase font-mono"
        :to="$l('support')"
        >{{ $t("header.navbar.support") }}</NuxtLink
      >
    </nav>
  </header>
</template>
