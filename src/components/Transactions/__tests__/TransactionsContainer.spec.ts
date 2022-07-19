import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import router from "../../../router";
import TransactionsContainer from "../TransactionsContainer.vue";

const mountOptions = {
    global: {
        plugins: [router],
    },
    props: {
        account: {
            accountNumber: "NL14ABNA4415260276",
            currencyCode: "EUR",
        },
        transactions: [
            {
                transactionId: "193594294273392.040002",
                bookDate: "2020-12-31",
                transactionDateTime: "2020-12-31T20:23:00Z",
                creditDebitIndicator: "DEBIT",
                amount: 12.4,
                counterpartyAccountNumber: "NL68INGB6669002742",
                counterpartyName: "POSTNL",
                description: "Postage Expenses",
            },
            {
                transactionId: "193594294273392.040001",
                bookDate: "2020-12-31",
                transactionDateTime: "2020-12-31T20:23:00Z",
                creditDebitIndicator: "DEBIT",
                amount: 7.64,
                counterpartyAccountNumber: "NL67INGB8338800724",
                counterpartyName: "BELASTINGDIENST",
                description: "TAX PAID",
            },
        ],
    },
};

describe("TransactionsContainer Component", () => {
    it("should render properly", () => {
        const wrapper = mount(TransactionsContainer, mountOptions);
        expect(wrapper.get(".transactions")).toBeTruthy();
    });

    it("should render the header of table properly", () => {
        const wrapper = mount(TransactionsContainer, mountOptions);
        expect(wrapper.text()).toContain("Account Number: NL14ABNA4415260276");
        expect(wrapper.text()).toContain("Currency Code: EUR");
    });

    it("should render the filter by dates button properly", () => {
        const wrapper = mount(TransactionsContainer, mountOptions);
        expect(wrapper.text()).toContain("Filter by dates");
        expect(wrapper.get('[data-testid="transactions-filter-btn"]')).toBeTruthy();
    });

    it("should render the search input properly", () => {
        const wrapper = mount(TransactionsContainer, mountOptions);
        expect(wrapper.get('[data-testid="transactions-search-input"]')).toBeTruthy();
    });

    it("should render the transaction table properly", () => {
        const wrapper = mount(TransactionsContainer, mountOptions);
        expect(wrapper.get(".transactions-table")).toBeTruthy();
        expect(wrapper.get(".transactions-table thead")).toBeTruthy();
        expect(wrapper.get(".transactions-table tbody")).toBeTruthy();
    });

    it("should transactions table include the transactions details", () => {
        const wrapper = mount(TransactionsContainer, mountOptions);
        expect(wrapper.get(".transactions-table tbody").text()).toContain("193594294273392.040001");
        expect(wrapper.get(".transactions-table tbody").text()).toContain("Postage Expenses");
        expect(wrapper.get(".transactions-table tbody").text()).toContain("TAX PAID");
        expect(wrapper.get(".transactions-table tbody").text()).toContain("BELASTINGDIENST");
    });

    it("should first row includes the first transactions details", () => {
        const wrapper = mount(TransactionsContainer, mountOptions);
        expect(wrapper.get(".transactions-table tbody tr:first-child").text()).toContain("193594294273392.040002");
        expect(wrapper.get(".transactions-table tbody").text()).toContain("Postage Expenses");
        expect(wrapper.get(".transactions-table tbody").text()).toContain("POSTNL");
    });
});
