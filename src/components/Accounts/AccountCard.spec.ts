import { render, fireEvent } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import router from "@/router";
import AccountCard from "./AccountCard.vue";

const mountOptions = {
    global: {
        plugins: [router],
    },
    props: {
        account: {
            accountNumberType: "IBAN",
            accountNumber: "NL18ABNA5476393838",
            productName: "Current Account",
            currencyCode: "EUR",
            holderName: "John Doe",
            bankCountryCode: "BE",
            bankIdentifierCode: "ZYABBE20",
            balance: 7500.39,
        },
    },
};

describe("AccountsView", () => {
    it("should render properly", () => {
        const wrapper = mount(AccountCard, mountOptions);
        expect(wrapper.text()).toContain("Balance");
    });
    it("should render account holder name properly", () => {
        const wrapper = mount(AccountCard, mountOptions);
        expect(wrapper.text()).toContain("John Doe");
    });
    it("should render account account number properly", () => {
        const wrapper = mount(AccountCard, mountOptions);
        expect(wrapper.text()).toContain("NL18ABNA5476393838 (IBAN)");
    });

    it("should render view transactions button", () => {
        const wrapper = mount(AccountCard, mountOptions);
        expect(wrapper.get("a.ui-button").text()).toContain("View Transactions");
    });
});
