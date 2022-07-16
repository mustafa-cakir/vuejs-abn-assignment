<script setup lang="ts">
import FeatherIcon from "@/components/common/FeatherIcon.vue";
</script>

<template>
    <footer class="main-footer">
        <div class="container">
            © 2022 - ABN AMRO Assignment.
            <span class="ui-text-muted">Crafted with <FeatherIcon name="heart" /> by Mustafa Cakir</span>
        </div>
    </footer>
</template>

<style lang="scss">
@import "../../assets/styles/mixins";

.main-footer {
    text-align: right;
    margin-top: 25px;
    border-top: 1px solid rgba($color-dark, 0.2);
    padding: 25px 0;
}
</style>
