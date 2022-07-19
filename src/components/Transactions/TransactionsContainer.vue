<script setup lang="ts">
import type { ITransaction, ITransactionAccount, ITransactions } from "@/types/types";
import AlertBox from "@/components/common/AlertBox.vue";
import { dateFormatter, priceFormatter } from "@/helpers/utils";
import ScrollWithShadow from "@/components/common/ScrollWithShadow.vue";
import FeatherIcon from "@/components/common/FeatherIcon.vue";
import { onMounted, onUnmounted, ref, watch } from "vue";
import Checkbox from "@/components/common/Checkbox.vue";

type Props = {
    transactions: ITransactions;
    account: ITransactionAccount;
};
const props = defineProps<Props>();

const filteredTransactions = ref<ITransactions>(props.transactions);
const searchValue = ref<string>("");
const filterDropdownContainerEl = ref<HTMLElement>();
const isFilterDropdownOpen = ref<boolean>(false);
const checkedDates = ref<string[]>([]);

const getFromattedPrice = (amount: number, currency: string): string => priceFormatter(amount, currency);
const getFormattedDate = (date: string): string => dateFormatter(date);
const getFormattedDateByTime = (date: string): string => dateFormatter(date, true);

watch([searchValue, checkedDates], () => {
    const keyword = searchValue.value;
    const dates = checkedDates.value;

    const filterbyKeyword = (transaction: ITransaction): boolean => {
        // if no keyword presented, return true
        if (!keyword) return true;

        // if keyword is presented, check all the values of the transaction and look for a match
        return (
            Object.values(transaction).findIndex(
                (x: string | number) => String(x).toLowerCase().indexOf(keyword.toLowerCase()) > -1,
            ) > -1
        );
    };

    const filterbyDate = (transaction: ITransaction): boolean => {
        // if no date has been selected, return true
        if (dates.length === 0) return true;

        // if there is a selected date(s), then look for a match
        return dates.includes(getFormattedDate(transaction.transactionDateTime));
    };

    // if there is no keyword, and no dates are selected then use the original transaction[], otherwise apply the filters
    filteredTransactions.value =
        !keyword && dates.length === 0
            ? props.transactions
            : props.transactions.filter(transaction => filterbyKeyword(transaction) && filterbyDate(transaction));
});

const cancelSearchHandler = (): void => {
    searchValue.value = "";
};

const availableDates = props.transactions.reduce<string[]>((whole, item) => {
    const formattedDate = getFormattedDate(item.transactionDateTime);
    if (whole.includes(formattedDate)) return whole;
    whole.push(formattedDate);
    return whole;
}, []);

const filterButtonClickHandler = (): void => {
    isFilterDropdownOpen.value = !isFilterDropdownOpen.value;
};

const handleClickOutsideForFilterDropdown = (event: Event): void => {
    if (
        filterDropdownContainerEl?.value &&
        !filterDropdownContainerEl.value.contains(event.target as HTMLElement) &&
        isFilterDropdownOpen?.value
    ) {
        isFilterDropdownOpen.value = false;
    }
};

const clearDateSelection = (): void => {
    checkedDates.value = [];
};

onMounted(() => {
    // add the handle click outside handler to document
    document.addEventListener("click", handleClickOutsideForFilterDropdown);
});

onUnmounted(() => {
    // cleanup upon onmount
    document.removeEventListener("click", handleClickOutsideForFilterDropdown);
});

const onCheckboxChange = ({ target: el }: { target: HTMLInputElement }) => {
    if (!el.checked) {
        checkedDates.value = checkedDates.value.filter(x => x !== el.value);
    } else {
        checkedDates.value = [...checkedDates.value, el.value];
    }
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
                <div class="col col-filter">
                    <div class="transactions-filter-selection" ref="filterDropdownContainerEl">
                        <button
                            data-testid="transactions-filter-btn"
                            type="button"
                            role="button"
                            class="ui-button is-ghost"
                            :class="isFilterDropdownOpen ? 'active' : ''"
                            aria-label="Filter by dates"
                            @click="filterButtonClickHandler"
                        >
                            Filter by dates <FeatherIcon :name="isFilterDropdownOpen ? 'chevron-up' : 'chevron-down'" />
                        </button>
                        <div v-if="checkedDates.length > 0" class="has-dates-dot" />
                        <div class="dropdown" v-if="isFilterDropdownOpen">
                            <div class="dates">
                                <Checkbox
                                    v-for="filterDropdownDate in availableDates"
                                    :key="filterDropdownDate"
                                    :value="filterDropdownDate"
                                    :label="filterDropdownDate"
                                    :checked="checkedDates.includes(filterDropdownDate)"
                                    @on-change="onCheckboxChange"
                                />
                                <button
                                    type="button"
                                    role="button"
                                    aria-label="Clear date selection"
                                    v-if="checkedDates.length > 0"
                                    class="ui-link btn-clear-selection"
                                    @click="clearDateSelection"
                                >
                                    Clear selection
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-search">
                    <div class="transactions-search-input">
                        <input
                            data-testid="transactions-search-input"
                            type="text"
                            placeholder="Search"
                            v-model="searchValue"
                            aria-label="Search through transactions"
                        />
                        <FeatherIcon name="search" class="search-icon" />
                        <button
                            class="cancel-icon"
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
                            <th>Amount</th>
                            <th>Book Date</th>
                            <th>Acc. Number</th>
                            <th class="min-w-160">Counterparty Name</th>
                            <th>Credit / Debit</th>
                            <th class="min-w-200">Description</th>
                            <th class="min-w-200">Transaction Date</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="transaction in filteredTransactions" :key="transaction.transactionId">
                            <td>
                                {{ getFromattedPrice(transaction.amount, props.account.currencyCode) }}
                            </td>
                            <td>{{ getFormattedDate(transaction.bookDate) }}</td>
                            <td>{{ transaction.counterpartyAccountNumber }}</td>
                            <td>{{ transaction.counterpartyName }}</td>
                            <td>{{ transaction.creditDebitIndicator }}</td>
                            <td>{{ transaction.description }}</td>
                            <td>{{ getFormattedDateByTime(transaction.transactionDateTime) }}</td>
                            <td>{{ transaction.transactionId }}</td>
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
        margin: 15px;

        .col {
            &-filter,
            &-search {
                flex: 1 0 100%;
                max-width: 100%;
                @include media-breakpoint-up(md) {
                    flex: 0 0 50%;
                    max-width: 50%;
                }
            }
            &-filter {
                margin-bottom: 10px;
                @include media-breakpoint-up(md) {
                    margin-bottom: 0;
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
            min-width: 120px;
            background-color: rgba($color-dark, 0.05);
            color: rgba($color-dark, 0.6);
            font-weight: inherit;
            &.min-w-160 {
                min-width: 160px;
            }
            &.min-w-200 {
                min-width: 200px;
            }
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

    &-search-input {
        position: relative;

        .search-icon,
        .cancel-icon {
            position: absolute;
            height: 42px;
            width: 42px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            left: 0;
            top: 0;
            font-size: 18px;
            color: rgba($color-dark, 0.5);
            transition: color 0.2s linear;
        }

        .cancel-icon {
            left: auto;
            right: 0;
            border-radius: 0 5px 5px 0;
            color: $color-dark;
            transition: background-color 0.2s linear;

            &:hover {
                background-color: rgba($color-dark, 0.05);
            }
        }

        input {
            display: block;
            border: 1px solid rgba($color-dark, 0.5);
            height: 42px;
            padding: 0 42px;
            width: 100%;
            border-radius: 5px;
            transition: border-color 0.2s linear, box-shadow 0.2s linear;

            &::placeholder {
                color: rgba($color-dark, 0.5);
            }

            &:hover,
            &:not(:placeholder-shown) {
                border-color: $color-dark;

                + .search-icon {
                    color: $color-dark;
                }
            }

            &:focus {
                outline: none;
                border-color: $color-link;
                box-shadow: 0 0 0 2px rgba($color-link, 0.2);

                + .icons {
                    color: $color-dark;
                }
            }
        }
    }

    &-filter-selection {
        position: relative;
        @include media-breakpoint-up(md) {
            display: inline-flex;
        }
        .ui-button {
            width: 100%;
            justify-content: center;
            @include media-breakpoint-up(md) {
                width: auto;
            }
            .icons {
                margin-left: 5px;
            }
        }
        .has-dates-dot {
            height: 8px;
            width: 8px;
            box-shadow: 0 0 0 2px #fff;
            position: absolute;
            right: -3px;
            top: -3px;
            background-color: $color-red-bright;
            border-radius: 8px;
        }
        .dropdown {
            position: absolute;
            top: calc(100% + 2px);
            background-color: #fff;
            box-shadow: 0 0 10px rgba($color-dark, 0.1);
            border-radius: 5px;
            z-index: 1;
            padding: 15px;
            min-width: 100%;
            .dates {
                label {
                    margin-bottom: 10px;
                    &:last-of-type {
                        margin-bottom: 0;
                    }
                }
            }
            .btn-clear-selection {
                margin-top: 15px;
            }
        }
    }
}
</style>
