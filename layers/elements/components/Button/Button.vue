<script setup lang="ts">
const {
  variant = 'primary',
  fit = false,
  disabled = false,
} = defineProps<{
  variant?: 'primary' | 'secondary' | 'warning'
  fit?: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  click: [payload: MouseEvent]
}>()

const classes = computed(() => {
  return {
    'bg-primary': variant === 'primary',
    'bg-secondary': variant === 'secondary',
    'bg-warning': variant === 'warning',

    'w-fit': fit === true,

    'bg-primary/30': variant === 'primary' && disabled,
    'bg-secondary/30': variant === 'secondary' && disabled,
    'bg-warning/30': variant === 'warning' && disabled,
    'cursor-not-allowed': disabled === true,
  }
})
</script>

<template>
  <button
    px-sm rounded-md w-full border-none
    :class="classes"
    @click="(event) => emit('click', event)"
  >
    <p class="text-white">
      {{ $t('welcome') }}
    </p>
  </button>
</template>
