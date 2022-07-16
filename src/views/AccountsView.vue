<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchService } from "@/services/fetch";
import { simualetFetchWithDelay } from "@/helpers/utils";
import type { IAccountGroups, IAccountGroupsResponse } from "@/types/types";
import AccountCard from "@/components/AccountCard.vue";

const isLoading = ref<boolean>(true);
const errorMessage = ref<string>("");
const accountGroups = ref<IAccountGroups>(null);

onMounted(() => {
    fetchService("/accounts")
        .then((res: IAccountGroupsResponse) => {
            simualetFetchWithDelay(() => {
                accountGroups.value = res.accountGroups;
                isLoading.value = false;
            });
        })
        .catch(err => {
            simualetFetchWithDelay(() => {
                errorMessage.value = err?.message || "An Unexpected Error Occurred.";
                isLoading.value = false;
            });
        });
});
</script>

<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div v-if="isLoading" class="ui-loading">loading...</div>
        <div v-if="errorMessage" class="ui-error">{{ errorMessage }}</div>

        <template v-if="accountGroups && accountGroups.length > 0">
            <template v-for="accountGroup in accountGroups" :key="accountGroup.groupName">
                <h2>Group Id: {{ accountGroup.groupName }}</h2>
                <div v-if="!accountGroup.accounts || accountGroup.accounts.length === 0">
                    No account has been found.
                </div>
                <template v-if="accountGroup.accounts && accountGroup.accounts.length > 0">
                    <template v-for="account in accountGroup.accounts" :key="account.accountNumber">
                        <AccountCard :account="account"/>
<!--                        <div>accountNumber: {{ account.accountNumber }}</div>-->
<!--                        <div>accountNumberType: {{ account.accountNumberType }}</div>-->
<!--                        <div>balance: {{ account.balance }}</div>-->
<!--                        <div>bankCountryCode: {{ account.bankCountryCode }}</div>-->
<!--                        <div>bankIdentifierCode: {{ account.bankIdentifierCode }}</div>-->
<!--                        <div>currencyCode: {{ account.currencyCode }}</div>-->
<!--                        <div>holderName: {{ account.holderName }}</div>-->
<!--                        <div>productName: {{ account.productName }}</div>-->
                        <hr />
                    </template>
                </template>
            </template>
        </template>
    </div>
</template>

<style lang="scss">
@import "../assets/styles/mixins";
</style>
