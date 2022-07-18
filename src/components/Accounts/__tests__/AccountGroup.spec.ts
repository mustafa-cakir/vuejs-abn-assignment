import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import router from "../../../router";
import AccountGroup from "../AccountGroup.vue";

const mountOptions = {
    global: {
        plugins: [router],
    },
    props: {
        accountGroup: {
            groupName: "Current Accounts",
            groupId: "current",
            accounts: [
                {
                    accountNumberType: "IBAN",
                    accountNumber: "NL18ABNA5476393838",
                    productName: "Current Account",
                    currencyCode: "EUR",
                    holderName: "John Doe",
                    bankCountryCode: "BE",
                    bankIdentifierCode: "ZYABBE20",
                    balance: 7500.39,
                },
                {
                    accountNumberType: "IBAN",
                    accountNumber: "NL14ABNA4415260276",
                    productName: "Current Account",
                    currencyCode: "EUR",
                    holderName: "John Doe",
                    bankCountryCode: "BE",
                    bankIdentifierCode: "ZYABBE20",
                    balance: 3000.0,
                },
            ],
        },
    },
};

describe("AccountGroup Component", () => {
    it("should render properly", () => {
        const wrapper = mount(AccountGroup, mountOptions);
        expect(wrapper.text()).toContain("Balance");
    });
    it("should render group name properly", () => {
        const wrapper = mount(AccountGroup, mountOptions);
        expect(wrapper.text()).toContain("Current Accounts");
    });
    it("should handle empty case properly", () => {
        const wrapper = mount(AccountGroup, {
            ...mountOptions,
            props: {
                accountGroup: {
                    groupName: "Current Accounts",
                    groupId: "current",
                    accounts: null,
                },
            },
        });
        expect(wrapper.text()).toContain("No account has been found.");
    });
});
