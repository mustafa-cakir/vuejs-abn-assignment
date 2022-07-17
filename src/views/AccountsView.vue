<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchService } from "@/services/fetch";
import type { IAccountGroups, IAccountGroupsResponse } from "@/types/types";
import AccountsLoading from "@/components/Accounts/AccountsLoading.vue";
import AlertBox from "@/components/common/AlertBox.vue";
import AccountGroup from "@/components/Accounts/AccountGroup.vue";

const isLoading = ref<boolean>(true);
const errorMessage = ref<string>("");
const accountGroups = ref<IAccountGroups>();

onMounted(() => {
    fetchService("/accounts")
        .then((res: IAccountGroupsResponse) => {
            accountGroups.value = res.accountGroups;
            isLoading.value = false;
        })
        .catch(err => {
            errorMessage.value = err?.message || "An Unexpected Error Occurred.";
            isLoading.value = false;
        });
});
</script>

<template>
    <h1>Accounts</h1>
    <AccountsLoading v-if="isLoading" />
    <AlertBox v-else-if="errorMessage" type="error" :message="errorMessage" />
    <template v-else-if="accountGroups && accountGroups.length > 0">
        <AccountGroup v-for="accountGroup in accountGroups" :key="accountGroup.groupId" :accountGroup="accountGroup" />
    </template>
    <AlertBox v-else message="No account groups have been found." type="info" />
</template>
