<script setup lang="ts">
import { ref, watch } from "vue";

type Props = {
    isShow: boolean;
};
const props = defineProps<Props>();

const el = ref<HTMLElement>();
const isShowing = ref<boolean>();
const isAnimating = ref<boolean>();

watch(
    () => props.isShow,
    () => {
        const element = el.value as HTMLElement;
        if (element) {
            const height: number = props.isShow ? element.scrollHeight : 0;

            if (height > 0) {
                isShowing.value = true;
                setTimeout(() => (isShowing.value = false), 400); // double the animation speed, to cover the opacity transtion as well.
            }

            isAnimating.value = true;
            setTimeout(() => (isAnimating.value = false), 200);
            element.style.height = `${height}px`;
        }
    },
);
</script>

<template>
    <div
        :class="`with-slide-effect ${isShowing ? 'is-fadein' : ''} ${isAnimating ? 'is-animating' : ''} ${
            props.isShow ? '' : 'is-hide'
        }`"
        ref="el"
    >
        <slot></slot>
    </div>
</template>

<style lang="scss">
@import "../../assets/styles/mixins";
.with-slide-effect {
    transition: height 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    &.is-hide {
        height: 0;
        overflow: hidden;
    }
    &.is-animating {
        overflow: hidden;
    }
    &.is-fadein {
        animation: fadeIn 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
        animation-delay: 0.2s;
        opacity: 0;
    }
}
</style>
