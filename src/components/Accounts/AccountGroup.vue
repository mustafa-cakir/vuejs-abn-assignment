<script setup lang="ts">
import type { IAccountGroup } from "@/types/types";
import AccountCard from "@/components/Accounts/AccountCard.vue";
import AlertBox from "@/components/common/AlertBox.vue";

type Props = {
    accountGroup: IAccountGroup;
};
const props = defineProps<Props>();
</script>

<template>
    <h3 class="account-group-title">
        <span>{{ props.accountGroup.groupName }}</span>
    </h3>
    <AlertBox
        type="info"
        message="No account has been found."
        v-if="!props.accountGroup.accounts || props.accountGroup.accounts.length === 0"
    />
    <div class="account-cards-container" v-if="props.accountGroup.accounts && props.accountGroup.accounts.length > 0">
        <AccountCard :account="account" v-for="account in props.accountGroup.accounts" :key="account.accountNumber" />
    </div>
</template>

<style lang="scss">
@import "../../assets/styles/mixins";
.account-cards-container {
    > div {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
.account-group-title {
    margin: 25px 0 15px;
    span {
        display: flex;
        width: 100%;
        align-items: center;
        &:after,
        &:before {
            flex-grow: 1;
            content: "";
            display: flex;
            height: 1px;
            width: 100px;
            background-color: rgba($color-dark, 0.1);
        }
        &:after {
            margin-left: 15px;
        }
        &:before {
            margin-right: 15px;
        }
    }
}
</style>
