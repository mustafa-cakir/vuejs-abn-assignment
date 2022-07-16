<script setup lang="ts">
import type { IAccount } from "@/types/types";
import FeatherIcon from "@/components/common/FeatherIcon.vue";
import { priceFormatter } from "@/helpers/utils";
import { ref } from "vue";
import { URL_ACCOUNT_DETAIL } from "@/helpers/constants";

type Props = {
    account: IAccount;
};
const props = defineProps<Props>();

const isMoreInfoOpen = ref(false);

const moreInfoButtonClickHandler = () => {
    isMoreInfoOpen.value = !isMoreInfoOpen.value;
};

const formattedPrice = priceFormatter(props.account.balance, props.account.currencyCode);
</script>
<template>
    <div class="account-card">
        <div class="row">
            <div class="col col-avatar">
                <FeatherIcon name="user" />
            </div>
            <div class="col">
                <div class="holder-name">{{ props.account.holderName }}</div>
                <div class="ui-text-muted">
                    {{ props.account.accountNumber }} ({{ props.account.accountNumberType }})
                </div>
                <div class="balance">{{ formattedPrice }}</div>
                <div class="more-info-btn">
                    <button
                        @click="moreInfoButtonClickHandler"
                        class="ui-link"
                        type="button"
                        aria-label="more about account"
                    >
                        More info <FeatherIcon :name="isMoreInfoOpen ? 'chevron-up' : 'chevron-down'" />
                    </button>
                </div>
                <div class="more-info" v-if="isMoreInfoOpen">
                    <div><span class="ui-text-muted">Bank Country:</span> {{ props.account.bankCountryCode }}</div>
                    <div>
                        <span class="ui-text-muted">Bank Identifier:</span> {{ props.account.bankIdentifierCode }}
                    </div>
                    <div><span class="ui-text-muted">Account Type:</span> {{ props.account.productName }}</div>
                </div>
                <RouterLink class="ui-button" :to="`${URL_ACCOUNT_DETAIL}/${props.account.accountNumber}`"
                    >View Transactions <FeatherIcon name="chevron-right"
                /></RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/styles/mixins";
.account-card {
    background-color: $color-white;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-left: -10px;
        margin-right: -10px;
    }
    .col {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
        padding-left: 10px;
        padding-right: 10px;
        width: 100%;
        &-avatar {
            flex: 0 0 auto;
            max-width: 100%;
            width: auto;
            .icons {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 60px;
                width: 60px;
                border-radius: 30px;
                background-color: $color-light;
                font-size: 36px;
            }
        }
    }
    .holder-name {
        font-size: 24px;
    }
    .account-number {
        color: rgba($color-dark, 0.5);
    }
    .balance {
        margin: 5px 0 15px;
        font-size: 32px;
    }
    .more-info {
        margin: 15px 0;
        &-btn {
            margin: 15px 0;
        }
    }
}
.row {
    flex: 0 0 auto;
    max-width: 100%;
    width: auto;
}

.col-auto {
}
</style>
