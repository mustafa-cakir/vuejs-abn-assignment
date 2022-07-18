<script setup lang="ts">
import { RouterView } from "vue-router";
import Footer from "@/components/common/Footer.vue";
import Header from "@/components/common/Header.vue";
</script>

<template>
    <div class="app-container">
        <Header />
        <main class="main-content container">
            <RouterView />
        </main>
        <Footer />
    </div>
</template>

<style lang="scss">
@import "assets/styles/mixins";

.app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.main-content {
    flex-grow: 1;
    padding-bottom: 25px;
}
</style>
