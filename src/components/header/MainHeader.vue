<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <header class="main-header">
        <img alt="Vue logo" class="main-header-logo" src="@/assets/images/logo.svg" width="125" height="125" />
        <div class="main-header-right">
            <div class="greating">You did it!</div>
            <nav>
                <ul>
                    <li>
                        <RouterLink to="/" activeClass="active">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about" activeClass="active">About</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
@import "../../assets/styles/mixins";

.main-header {
    padding: 15px;
    display: flex;
    align-items: center;
    @include media-breakpoint-up(lg) {
        border-bottom: 1px solid rgba($color-dark, 0.2);
    }
    &-logo {
        height: 50px;
        width: auto;
    }
    &-right {
        display: flex;
        flex: 1;

        .greating {
            display: flex;
            flex: 1;
            justify-content: center;
        }
        nav {
            ul {
                display: flex;
                li {
                    padding: 0 16px;
                    border-left: 1px solid rgba($color-dark, 0.4);
                    &:first-of-type {
                        border: none;
                    }
                }
            }

        }
    }
}
</style>
