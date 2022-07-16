<script setup lang="ts">
import { RouterView } from "vue-router";
import MainFooter from "@/components/footer/MainFooter.vue";
import MainHeader from "@/components/header/MainHeader.vue";
</script>

<template>
    <div class="app-container">
        <MainHeader />
        <div class="container">
            <RouterView />
        </div>
        <MainFooter />
    </div>
</template>

<style lang="scss">
@import "assets/styles/mixins";

.app-container {
    min-height: 100vh;
}
</style>
