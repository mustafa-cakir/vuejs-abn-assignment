<script setup lang="ts">
import FeatherIcon from "@/components/common/FeatherIcon.vue";

type Props = {
    value: string;
    label: string;
    checked: boolean;
};
const props = defineProps<Props>();
</script>

<template>
    <label tabindex="0" class="checkbox" :class="props.checked ? 'is-checked' : ''">
        <input type="checkbox" :value="props.value" @input="$emit('onChange', $event)" :checked="props.checked" />
        <span class="square"><FeatherIcon name="check" /></span>
        <span :class="props.checked ? 'text-bold' : ''">{{ props.label }}</span>
    </label>
</template>

<style lang="scss">
@import "../../assets/styles/mixins";
.checkbox {
    display: flex;
    input {
        opacity: 0;
        height: 0;
        visibility: hidden;
        width: 0;
    }
    .square {
        margin-right: 7px;
        position: relative;
        width: 24px;
        height: 24px;
        border: 1px solid $color-dark;
        border-radius: 3px;
        transition: border-color 0.2s linear, background-color 0.2s linear, box-shadow 0.2s linear;
        .icons {
            font-size: 18px;
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            width: 24px;
            height: 24px;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s linear;
        }
    }
    &.is-checked {
        .square {
            background-color: $color-link;
            border-color: $color-link;
            color: #fff;
            .icons {
                animation: checkboxBounceIn 0.2s linear forwards;
                animation-delay: 0.2s;
            }
        }
        &:hover {
            .square {
                background-color: $color-link-dark;
                border-color: $color-link-dark;
            }
        }
    }
    &:hover {
        .square {
            border-color: $color-link;
        }
    }
    &:focus,
    &:active {
        .square {
            box-shadow: 0 0 0 1px $color-link-shadow;
        }
    }
    .text-bold {
        font-weight: bolder;
    }
}
</style>
