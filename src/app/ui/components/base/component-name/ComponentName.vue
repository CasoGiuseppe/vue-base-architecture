<template>
    <section>
        <select @change="setLocale" style="padding: 5px 15px;font-size: 16px;">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </section>
    <section class="component-name">
       {{ translate({key: 'message', options: {name: 'base component'} }) }}
    </section>
</template>
<script setup lang="ts">
import useTranslation from '@shared/composables/useTranslation';
const { translate, setNewTranslationLocale } = useTranslation();
const setLocale = (evt: any) => {  
    const { target: { value }} = evt || {};  
    setNewTranslationLocale( value )
}
</script>
<style scoped src="./ComponentName.scss"></style>