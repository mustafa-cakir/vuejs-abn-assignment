<script setup lang="ts">
import type { ITransactionAccount, ITransactions } from "@/types/types";
import TransactionItem from "@/components/Transactions/TransactionItem.vue";
import AlertBox from "@/components/common/AlertBox.vue";

type Props = {
    transactions: ITransactions;
    account: ITransactionAccount;
};
const props = defineProps<Props>();
</script>

<template>
    <template v-if="props.account">
        <div>Account Number: {{ props.account.accountNumber }}</div>
        <div>Currency Code: {{ props.account.currencyCode }}</div>
    </template>
    <AlertBox v-else type="info" message="Account details can't be gathered." />

    <hr />

    <template v-if="props.transactions && props.transactions.length > 0">
        <TransactionItem
            v-for="transaction in props.transactions"
            :transaction="transaction"
            :key="transaction.transactionId"
        />
    </template>
    <AlertBox v-else message="No transactions have been found." type="info" />
</template>
