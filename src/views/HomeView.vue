<script setup lang="ts">
import { URL_ACCOUNTS } from "@/helpers/constants";
</script>

<template>
    <div class="home-view">
        <p>This is the home page.</p>
        <p>Navigate to <RouterLink class="ui-link" :to="URL_ACCOUNTS">Accounts</RouterLink> page.</p>
    </div>
</template>

<style scoped lang="scss">
.home-view {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p {
        margin: 15px 0;
        font-size: 16px;
    }
}
</style>
