<script setup lang="ts">
import { RouterView } from "vue-router";
import Footer from "@/components/common/Footer.vue";
import Header from "@/components/common/Header.vue";
</script>

<template>
    <div class="app-container">
        <Header />
        <div class="container">
            <RouterView />
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
@import "assets/styles/mixins";

.app-container {
    min-height: 100vh;
}
</style>
