<script setup lang="ts">
import type { ITransactionAccount, ITransactions } from "@/types/types";
import AlertBox from "@/components/common/AlertBox.vue";
import { priceFormatter } from "@/helpers/utils";
import ScrollWithShadow from "@/components/common/ScrollWithShadow.vue";
import FeatherIcon from "@/components/common/FeatherIcon.vue";
import { ref, watch, watchEffect } from "vue";

type Props = {
    transactions: ITransactions;
    account: ITransactionAccount;
};
const props = defineProps<Props>();

const filteredTransactions = ref<ITransactions>(props.transactions);

const printFromattedPrice = (amount: number, currency: string): string => priceFormatter(amount, currency);

const searchValue = ref<string>("");

watch(searchValue, () => {
    const keyword = searchValue.value;
    filteredTransactions.value = props.transactions.filter(x => x.transactionId.indexOf(keyword) > -1);
});

const cancelSearchHandler = () => {
    searchValue.value = "";
};
</script>

<template>
    <div class="transactions">
        <div v-if="props.account" class="transactions-account">
            <div><span class="ui-text-muted">Account Number:</span> {{ props.account.accountNumber }}</div>
            <div><span class="ui-text-muted">Currency Code:</span> {{ props.account.currencyCode }}</div>
        </div>
        <AlertBox v-else type="info" message="Account details can't be gathered." />

        <hr />
        <div class="transactions-filters">
            <div class="row">
                <div class="col col-filter">Filter Goes here</div>
                <div class="col col-search">
                    <div class="ui-search-input">
                        <input
                            type="text"
                            placeholder="Search"
                            v-model="searchValue"
                            aria-label="Search through transactions"
                        />
                        <FeatherIcon name="search" class="search-icon" />
                        <button
                            type="button"
                            @click="cancelSearchHandler"
                            v-if="searchValue"
                            title="Cancel Search"
                            aria-label="Cancel Search"
                        >
                            <FeatherIcon name="x" class="cancel-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="filteredTransactions && filteredTransactions.length > 0" class="transactions-table-container">
            <ScrollWithShadow>
                <table class="transactions-table">
                    <thead>
                        <tr>
                            <th>Transaction Id</th>
                            <th>Counterparty Account Number</th>
                            <th>Book Date</th>
                            <th>Transaction Date Time</th>
                            <th>Credit Debit Indicator</th>
                            <th>Counterparty Name</th>
                            <th>Description</th>
                            <th class="text-align-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="transaction in filteredTransactions" :key="transaction.transactionId">
                            <td>{{ transaction.transactionId }}</td>
                            <td>{{ transaction.counterpartyAccountNumber }}</td>
                            <td>{{ transaction.bookDate }}</td>
                            <td>{{ transaction.transactionDateTime }}</td>
                            <td>{{ transaction.creditDebitIndicator }}</td>
                            <td>{{ transaction.counterpartyName }}</td>
                            <td>{{ transaction.description }}</td>
                            <td class="text-align-right">
                                {{ printFromattedPrice(transaction.amount, props.account.currencyCode) }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </ScrollWithShadow>
        </div>
        <div v-else class="transactions-info">
            <AlertBox message="No transactions have been found." type="info" />
        </div>
    </div>
</template>

<style lang="scss">
@import "../../assets/styles/mixins";
.transactions {
    background-color: #fff;
    box-shadow: 0 0 15px rgba($color-dark, 0.05);
    border-radius: 10px 10px 0 0;
    &-info {
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &-account {
        padding: 15px 15px 0;
    }
    &-filters {
        padding: 0 15px;
        .col {
            &-filter,
            &-search {
                margin: 15px 0;
                flex: 1 0 100%;
                max-width: 100%;
                @include media-breakpoint-up(md) {
                    flex: 0 0 50%;
                    max-width: 50%;
                }
            }
        }
    }
    &-table {
        border-collapse: separate;
        border-spacing: 0;
        caption-side: bottom;
        text-align: left;
        vertical-align: middle;
        width: 100%;
        min-width: 1200px;
        &-container {
            max-width: 100%;
        }
        thead {
            vertical-align: bottom;
        }

        td,
        th {
            padding: 15px;
        }
        th {
            min-width: 150px;
            background-color: rgba($color-dark, 0.05);
            color: rgba($color-dark, 0.6);
            font-weight: inherit;
            white-space: nowrap;
        }

        td {
            border-bottom: 1px solid rgba($color-dark, 0.1);
        }

        tr:last-child {
            td {
                border-bottom: none;
            }
        }
        .text-align-right {
            text-align: right;
        }
    }
}
</style>
