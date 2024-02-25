<template>
    <section class="component-name">
       {{ t('message', { name: 'base component' }) }}
    </section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n({
    inheritLocale: true,
    useScope: 'local'
})
</script>
<style scoped src="./ComponentName.scss"></style>