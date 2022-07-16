<script setup lang="ts">
defineProps<{
    name: string;
}>();
</script>

<template>
    <i :class="[`icons icons-${name}`]" />
</template>
