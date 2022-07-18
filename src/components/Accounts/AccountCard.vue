<script setup lang="ts">
import type { IAccount } from "@/types/types";
import FeatherIcon from "@/components/common/FeatherIcon.vue";
import { priceFormatter } from "@/helpers/utils";
import { ref } from "vue";
import { URL_TRANSACTIONS } from "@/helpers/constants";

type Props = {
    account: IAccount;
};
const props = defineProps<Props>();

const isMoreInfoOpen = ref<boolean>(false);

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
                <div class="row">
                    <div class="col">
                        <div class="holder-name">{{ props.account.holderName }}</div>
                        <div class="ui-text-muted">
                            {{ props.account.accountNumber }} ({{ props.account.accountNumberType }})
                        </div>
                    </div>
                    <div class="col col-balance">
                        <div class="ui-text-muted">Balance:</div>
                        <div class="balance">{{ formattedPrice }}</div>
                    </div>
                </div>
                <div class="more-info-btn">
                    <button
                        data-testid="more-info-btn"
                        @click="moreInfoButtonClickHandler"
                        class="ui-link"
                        type="button"
                        aria-label="more about account"
                    >
                        More info <FeatherIcon :name="isMoreInfoOpen ? 'chevron-up' : 'chevron-down'" />
                    </button>
                </div>
                <div class="more-info" v-if="isMoreInfoOpen">
                    <div><span class="ui-text-muted">Bank Country Code:</span> {{ props.account.bankCountryCode }}</div>
                    <div>
                        <span class="ui-text-muted">Bank Identifier Code:</span> {{ props.account.bankIdentifierCode }}
                    </div>
                    <div><span class="ui-text-muted">Account Type:</span> {{ props.account.productName }}</div>
                </div>
                <RouterLink
                    data-testid="view-transaction-btn"
                    class="ui-button"
                    :to="`${URL_TRANSACTIONS}/${props.account.accountNumber}`"
                    >View Transactions</RouterLink
                >
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../../assets/styles/mixins";
.account-card {
    background-color: $color-white;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);

    .col {
        &-balance {
            flex: 0 0 100%;
            max-width: 100%;
            margin: 15px 0;
            @include media-breakpoint-up(md) {
                margin: 0;
                flex-direction: column;
                flex: 0 0 300px;
                max-width: 300px;
                text-align: right;
            }
        }
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
        font-size: 32px;
        @include media-breakpoint-up(lg) {
            margin: 0;
        }
    }
    .more-info {
        margin: 15px 0;
        &-btn {
            margin-bottom: 15px;
        }
    }
}
</style>
