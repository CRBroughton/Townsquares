<script setup lang="ts">

</script>

<template>
  <div p-lg rounded-lg w-full h-full border-thin border-solid border-primary>
    <div flex flex-col>
      <Heading>
        <slot name="title" />
      </Heading>
      <Paragraph>
        <slot />
      </Paragraph>
    </div>
  </div>
</template>
