<script setup lang="ts">
import { onMounted, ref } from "vue";
import { debounce } from "@/helpers/utils";

const refEl = ref<HTMLElement>();
const isLeft = ref<boolean>(false);
const isRight = ref<boolean>(false);

const scrollHandlerCompute = () => {
    const el = (refEl?.value as HTMLElement) || null;
    const parentEl = el?.parentElement || null;
    if (parentEl) {
        const { scrollLeft, offsetWidth, scrollWidth } = el;
        isLeft.value = scrollLeft > 0;
        isRight.value = scrollWidth - offsetWidth > scrollLeft;
    }
};

const scrollHandler = debounce(scrollHandlerCompute);

onMounted(() => {
    scrollHandlerCompute();
});
</script>

<template>
    <div class="scroll-with-shadow" :class="`${isRight && 'right'} ${isLeft && 'left'}`">
        <div class="scroll-with-shadow-content" ref="refEl" @scroll="scrollHandler">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
@import "../../assets/styles/mixins";
.scroll-with-shadow {
    overflow: hidden;
    position: relative;
    width: 100%;
    &:after,
    &:before {
        border-radius: 100%;
        content: "";
        height: 80%;
        left: -10px;
        position: absolute;
        right: 0;
        top: 10%;
        transition: box-shadow 0.3s linear;
        width: 10px;
        z-index: 1;
    }
    &:after {
        left: auto;
        right: -10px;
    }
    &.left {
        &:before {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        }
    }
    &.right {
        &:after {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        }
    }
    &-content {
        overflow-x: auto;
        width: 100%;
        &::-webkit-scrollbar {
            width: 3px;
            height: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: rgba($color-dark, 0.1);
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track {
            background: rgba($color-dark, 0.05);
        }
    }
}
</style>
