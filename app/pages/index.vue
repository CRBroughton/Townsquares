<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

// const online = useOnline()

const { locales, setLocale } = useI18n()
</script>

<template>
  <div>
    <Logos mb-6 />
    <div>
      <Button
        v-for="locale in locales"
        :key="locale.name"
        @click="setLocale(locale.code)"
      >
        {{ locale.name }}
      </Button>
      <h1>{{ $t('welcome') }}</h1>
    </div>
    <ThemeSelector />
  </div>
</template>
