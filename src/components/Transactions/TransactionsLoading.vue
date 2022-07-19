<script setup lang="ts">
import ShimmerLoadingContainer from "@/components/common/Shimmer/ShimmerLoadingContainer.vue";
import ShimmerItem from "@/components/common/Shimmer/ShimmerItem.vue";
</script>

<template>
    <ShimmerLoadingContainer>
        <div class="box">
            <div class="top">
                <ShimmerItem height="16px" width="100px" marginBottom="7px" />
                <ShimmerItem height="16px" width="75px" />
            </div>
            <hr />
            <div class="row">
                <div class="col">
                    <ShimmerItem height="42px" width="165px" />
                </div>
                <div class="col col-right">
                    <ShimmerItem height="42px" />
                </div>
            </div>
            <ShimmerItem height="50px" width="100%" marginTop="15px" marginBottom="25px" />
            <ShimmerItem height="16px" width="75%" marginBottom="15px" />
            <ShimmerItem height="16px" width="75%" marginBottom="15px" />
            <ShimmerItem height="16px" width="50%" marginBottom="15px" />
            <ShimmerItem height="16px" width="50%" marginBottom="15px" />
            <ShimmerItem height="16px" width="25%" marginBottom="15px" />
        </div>
    </ShimmerLoadingContainer>
</template>

<style scoped lang="scss">
@import "../../assets/styles/mixins";
.box {
    min-height: 60vh;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    padding: 15px;
    border-radius: 10px;
    hr {
        margin-left: -15px;
        margin-right: -15px;
    }
    .col-right {
        flex: 1 0 75%;
        width: 75%;
        max-width: 75%;
        margin-top: 15px;
        @include media-breakpoint-up(md) {
            margin-top: 0;
            flex: 1 0 50%;
            width: 50%;
            max-width: 50%;
        }
    }
    .space {
        height: 65px;
    }
}
</style>
