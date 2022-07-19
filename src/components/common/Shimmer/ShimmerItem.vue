<script setup lang="ts">
type Props = {
    // shape and style
    shape?: string;
    borderRadius?: number | string;

    // size
    width?: string;
    height?: string;

    // margins
    marginTop?: string;
    marginLeft?: string;
    marginRight?: string;
    marginBottom?: string;
};
const props = defineProps<Props>();
</script>

<template>
    <div
        class="shimmer-item"
        :data-shape="props.shape"
        :style="{
            width: props.width,
            height: props.height,
            borderRadius: props.borderRadius,
            marginBottom: props.marginBottom,
            marginTop: props.marginTop,
            marginRight: props.marginRight,
            marginLeft: props.marginLeft,
        }"
    ></div>
</template>

<style lang="scss">
@import "../../../assets/styles/mixins";
.shimmer {
    &-item {
        border-radius: 5px;
        height: 16px;
        animation: shimmer linear 3s infinite;
        background-image: linear-gradient(
            to right,
            rgba($color-dark, 0.1) 4%,
            rgba($color-dark, 0.2) 25%,
            rgba($color-dark, 0.1) 36%
        );
        background-size: 1000px 100%;
        &[data-shape="circle"] {
            border-radius: 100%;
        }
    }
}
</style>
