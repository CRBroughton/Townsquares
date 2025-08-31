<script setup lang="ts">
const theme = useColorMode()

const themes = ['light', 'dark']

function setTheme(selectedTheme: string) {
  theme.preference = selectedTheme
}
</script>

<template>
  <div class="inline-block relative">
    <select
      class="py-sm px-md rounded-sm bg-primary text-secondary"
      :value="theme.value"
      @change="setTheme(($event.target as HTMLSelectElement).value)"
    >
      <option v-for="t in themes" :key="t" :value="t">
        {{ t }}
      </option>
    </select>
  </div>
</template>
