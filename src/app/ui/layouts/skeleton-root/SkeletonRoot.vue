<template>
  <section class="app-layout">
    <RouterView v-slot="{ Component, route: { meta: type } }" name="content">
      <component :is="Component" :key="type" />
    </RouterView>
  </section>
</template>
