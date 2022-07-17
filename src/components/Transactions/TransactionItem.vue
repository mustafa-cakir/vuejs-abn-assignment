<script setup lang="ts">
import type { ITransaction } from "@/types/types";

type Props = {
    transaction: ITransaction;
};
const props = defineProps<Props>();
</script>

<template>
    <div>amount: {{ props.transaction.amount }}</div>
    <div>bookDate: {{ props.transaction.bookDate }}</div>
    <div>transactionId: {{ props.transaction.transactionId }}</div>
    <div>counterpartyAccountNumber: {{ props.transaction.counterpartyAccountNumber }}</div>
    <div>creditDebitIndicator: {{ props.transaction.creditDebitIndicator }}</div>
    <div>counterpartyName: {{ props.transaction.counterpartyName }}</div>
    <div>description: {{ props.transaction.description }}</div>
    <div>transactionDateTime: {{ props.transaction.transactionDateTime }}</div>
</template>
