<script setup lang="ts">
import type { IAccountGroups } from "@/types/types";
import AccountGroup from "@/components/Accounts/AccountGroup.vue";

type Props = {
    accountGroups: IAccountGroups;
};
const props = defineProps<Props>();
</script>

<template>
    <AccountGroup
        v-for="accountGroup in props.accountGroups"
        :key="accountGroup.groupId"
        :accountGroup="accountGroup"
    />
</template>
