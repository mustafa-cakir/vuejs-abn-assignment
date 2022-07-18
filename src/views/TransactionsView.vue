<script setup lang="ts">
import { URL_ACCOUNTS } from "@/helpers/constants";
import FeatherIcon from "@/components/common/FeatherIcon.vue";
import TransactionsContainer from "@/components/Transactions/TransactionsContainer.vue";
import { onMounted, ref } from "vue";
import { fetchService } from "@/services/fetch";
import type { ITransactionsResponse } from "@/types/types";
import { useRoute } from "vue-router";
import TransactionsLoading from "@/components/Transactions/TransactionsLoading.vue";
import AlertBox from "@/components/common/AlertBox.vue";

const isLoading = ref<boolean>(true);
const errorMessage = ref<string>("");
const transactionsResponse = ref<ITransactionsResponse>();

onMounted(() => {
    const route = useRoute();
    const { accountNumber } = route?.params || {};
    if (accountNumber) {
        fetchService(`/transactions?id=${accountNumber}`)
            .then((res: ITransactionsResponse) => {
                transactionsResponse.value = res;
                isLoading.value = false;
            })
            .catch(err => {
                errorMessage.value = err?.message || "An Unexpected Error Occurred.";
                isLoading.value = false;
            });
    }
});
</script>
<template>
    <h1>Transactions Details</h1>
    <RouterLink class="ui-link back-btn" :to="URL_ACCOUNTS"><FeatherIcon name="chevron-left" /> Back</RouterLink>
    <TransactionsLoading v-if="isLoading" />
    <AlertBox v-else-if="errorMessage" type="error" :message="errorMessage" />
    <TransactionsContainer
        v-else-if="transactionsResponse"
        :transactions="transactionsResponse.transactions"
        :account="transactionsResponse.account"
    />
    <AlertBox v-else type="info" message="Transaction details can't be gathered." />
</template>

<style>
.back-btn {
    display: inline-flex;
    margin: 0 0 15px;
    align-items: center;
}
</style>
