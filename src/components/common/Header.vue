<script setup lang="ts">
import { RouterLink } from "vue-router";
import { URL_ACCOUNTS, URL_HOME, URL_TRANSACTIONS } from "@/helpers/constants";
</script>

<template>
    <header class="main-header">
        <RouterLink to="/">
            <img alt="Vue logo" class="main-header-logo" src="@/assets/images/logo.svg" width="125" height="125" />
        </RouterLink>
        <div class="main-header-right">
            <nav>
                <ul>
                    <li>
                        <RouterLink class="ui-link" :to="URL_HOME" activeClass="active">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="ui-link" :to="URL_ACCOUNTS" activeClass="active">Accounts</RouterLink>
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
        height: 44px;
        width: auto;
    }
    &-right {
        display: flex;
        flex: 1;
        justify-content: flex-end;
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
