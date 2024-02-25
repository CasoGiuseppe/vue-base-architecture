<script setup lang="ts">
</script>

<template>
  <Suspense>
    <section class="app">
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </section>
  </Suspense>
</template>

<style scoped lang="scss">
.app {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}
</style>
