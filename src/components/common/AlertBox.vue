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
        color: #004085;
        background-color: #cce5ff;
        border-color: #b8daff;
    }
    &.error {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
    }
}
</style>
