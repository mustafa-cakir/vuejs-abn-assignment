<script setup lang="ts">
import ShimmerLoadingContainer from "@/components/common/Shimmer/ShimmerLoadingContainer.vue";
import ShimmerItem from "@/components/common/Shimmer/ShimmerItem.vue";
</script>

<template>
    <ShimmerLoadingContainer>
        <div class="top" v-for="i in Array.from(Array(2).keys())" :key="i">
            <ShimmerItem height="23px" width="280px" marginLeft="auto" marginRight="auto" />
            <div class="box" v-for="j in Array.from(Array(2).keys())" :key="j">
                <div class="row">
                    <div class="col col-left">
                        <ShimmerItem height="60px" width="60px" shape="circle" />
                    </div>
                    <div class="col col-middle">
                        <ShimmerItem width="100px" height="23px" marginBottom="15px" />
                        <ShimmerItem width="300px" marginBottom="15px" />
                        <ShimmerItem width="100px" marginBottom="15px" />
                        <ShimmerItem width="171px" height="42px" />
                    </div>
                    <div class="col col-right">
                        <ShimmerItem width="100px" height="16px" marginBottom="15px" class="text-balance" />
                        <ShimmerItem width="200px" height="32px" />
                    </div>
                </div>
            </div>
        </div>
    </ShimmerLoadingContainer>
</template>

<style scoped lang="scss">
@import "../../assets/styles/mixins";
.top {
    margin: 25px 0 15px;
}
.box {
    margin: 15px 0;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    padding: 15px;
    border-radius: 10px;
    .col-left {
        flex: 0 0 auto;
        width: auto;
    }
    .col-middle {
        margin: 15px 0;
        @include media-breakpoint-up(md) {
            margin: 0;
        }
    }
    .col-right {
        flex: 0 0 auto;
        width: auto;
        .text-balance {
            @include media-breakpoint-up(md) {
                margin-left: auto;
            }
        }
    }
}
</style>
