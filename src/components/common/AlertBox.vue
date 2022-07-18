<script setup lang="ts">
type Props = {
    type: "error" | "info";
    message: string;
};
const props = defineProps<Props>();
</script>

<template>
    <div class="alert-box" :class="props.type">{{ props.message }}</div>
</template>

<style lang="scss">
@import "../../assets/styles/mixins";
.alert-box {
    position: relative;
    padding: 15px 25px;
    margin: 15px 0;
    border: 1px solid transparent;
    border-radius: 10px;
    opacity: 0;
    animation: fadeIn 0.3s linear forwards;
    animation-delay: 0.3s;
    &.info {
        color: $color-blue-dark;
        background-color: $color-blue;
        border-color: darken($color-blue, 5%);
    }
    &.error {
        color: $color-red-dark;
        background-color: $color-red;
        border-color: darken($color-red, 5%);
    }
}
</style>
